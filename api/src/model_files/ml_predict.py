from PIL import Image
import torch
import torchvision.transforms as transforms
from torchvision import models
import torch.nn as nn
import io
import json
import os
import torch.nn.functional as F

# Get the directory where this script is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Class labels for New Plant Diseases Dataset (87k images)
CLASS_NAMES = [
    'Apple___Apple_scab',
    'Apple___Black_rot',
    'Apple___Cedar_apple_rust',
    'Apple___healthy',
    'Blueberry___healthy',
    'Cherry___Powdery_mildew',
    'Cherry___healthy',
    'Corn___Cercospora_leaf_spot Gray_leaf_spot',
    'Corn___Common_rust',
    'Corn___Northern_Leaf_Blight',
    'Corn___healthy',
    'Grape___Black_rot',
    'Grape___Esca_(Black_Measles)',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
    'Grape___healthy',
    'Orange___Haunglongbing_(Citrus_greening)',
    'Peach___Bacterial_spot',
    'Peach___healthy',
    'Pepper___Bacterial_spot',
    'Pepper___healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',
    'Raspberry___healthy',
    'Soybean___healthy',
    'Squash___Powdery_mildew',
    'Strawberry___Leaf_scorch',
    'Strawberry___healthy',
    'Tomato___Bacterial_spot',
    'Tomato___Early_blight',
    'Tomato___Late_blight',
    'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot',
    'Tomato___Spider_mites Two-spotted_spider_mite',
    'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy'
]

NUM_CLASSES = len(CLASS_NAMES)

# Image transforms for ResNet18
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])


def is_plant_image(image_tensor):
    """Advanced check to see if image looks like it contains a plant based on multiple features"""
    # Convert tensor to numpy for analysis
    img_np = image_tensor.squeeze().cpu().numpy().transpose(1, 2, 0)
    
    # Get color channels
    green_channel = img_np[:, :, 1]  # Green channel
    red_channel = img_np[:, :, 0]    # Red channel
    blue_channel = img_np[:, :, 2]   # Blue channel
    
    # Calculate average values
    avg_green = green_channel.mean()
    avg_red = red_channel.mean()
    avg_blue = blue_channel.mean()
    
    # Calculate standard deviations
    green_std = green_channel.std()
    red_std = red_channel.std()
    blue_std = blue_channel.std()
    
    # Check if green is significantly higher than red/blue (common in plant images)
    green_dominant = avg_green > avg_red * 0.7 and avg_green > avg_blue * 0.7
    
    # Check for sufficient texture variation (common in plant leaves)
    texture_varied = green_std > 0.08 or red_std > 0.08 or blue_std > 0.08
    
    # Check if image isn't too dark or too bright
    brightness_ok = 0.15 < avg_green < 0.85 and 0.15 < avg_red < 0.85 and 0.15 < avg_blue < 0.85
    
    # Additional check: color distribution patterns
    color_balance = abs(avg_green - avg_red) < 0.25 and abs(avg_green - avg_blue) < 0.25
    
    # For human faces, typically red and green are more balanced, and there's less texture variation
    human_like = abs(avg_red - avg_green) < 0.05 and abs(avg_red - avg_blue) < 0.05
    
    # For plant images, there should be more texture and potentially more green
    if green_dominant and texture_varied and brightness_ok:
        return True
    
    # Additional check: if it's not human-like but has some plant characteristics
    if not human_like and texture_varied and brightness_ok:
        return True
    
    # For non-plant images (like faces), they usually have more balanced red/green/blue
    # and less texture variation in the way plants do
    return False


def get_model(num_classes=NUM_CLASSES):
    """Create a ResNet18 model with custom number of output classes"""
    model = models.resnet18(weights=None)
    # Replace the final fully connected layer
    model.fc = nn.Linear(model.fc.in_features, num_classes)
    return model


def load_model():
    """Load the trained ResNet18 model"""
    model = get_model(NUM_CLASSES)
    model_path = os.path.join(BASE_DIR, 'plant_disease_resnet18.pth')
    
    # Load model weights
    state_dict = torch.load(model_path, map_location=torch.device('cpu'))
    model.load_state_dict(state_dict)
    model.eval()
    return model


def get_remedy(plant_disease):
    """Get remedy for a given plant disease"""
    data_path = os.path.join(BASE_DIR, 'data.json')
    with open(data_path, 'r') as f:
        remedies = json.load(f)
    
    # Get remedy for the given plant disease
    if plant_disease in remedies:
        return remedies[plant_disease]
    return None


# Global model instance (loaded once)
_model = None


def get_cached_model():
    """Get or load the cached model"""
    global _model
    if _model is None:
        _model = load_model()
    return _model


@torch.no_grad()
def predict_plant(imgdata):
    """Predict plant disease from image data"""
    model = get_cached_model()
    
    # Convert bytes to PIL Image
    image = Image.open(io.BytesIO(imgdata))
    
    # Convert RGBA to RGB if necessary
    if image.mode == 'RGBA':
        image = image.convert('RGB')
    elif image.mode != 'RGB':
        image = image.convert('RGB')
    
    # Apply transforms
    input_tensor = transform(image).unsqueeze(0)
    
    # Check if image appears to contain a plant
    if not is_plant_image(input_tensor[0]):
        return "Not a Plant", "Image does not appear to contain a plant. Please upload an image of a plant leaf or part for disease detection.", 0.0
    
    # Get prediction
    outputs = model(input_tensor)
    probabilities = torch.nn.functional.softmax(outputs, dim=1)
    confidence, predicted_idx = torch.max(probabilities, 1)
    
    # If image appears to be non-plant, return with low confidence
    if not is_plant_image(input_tensor[0]):
        return "Not a Plant", "Image does not appear to contain a plant. Please upload an image of a plant leaf or part for disease detection.", 0.0
    
    # Get the class name
    plant_disease = CLASS_NAMES[predicted_idx.item()]
    confidence_score = confidence.item()
    
    # Additional check: if confidence is too low, it might be a non-plant image
    if confidence_score < 0.3:
        return "Not a Plant", "Image does not appear to contain a plant. Please upload an image of a plant leaf or part for disease detection.", 0.0
    
    # Get remedy
    if "healthy" not in plant_disease.lower():
        remedy = get_remedy(plant_disease)
        if remedy is None:
            remedy = f"No specific remedy found for {plant_disease}. Please consult a plant specialist."
    else:
        remedy = "Your plant is healthy! Keep up the good care."
    
    return plant_disease, remedy, confidence_score