from PIL import Image
import torch
import torchvision.transforms as transforms
from torchvision import models
import torch.nn as nn
import io
import json
import os

# Get the directory where this script is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Class labels for PlantVillage dataset (38 classes)
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
    
    # Get prediction
    outputs = model(input_tensor)
    probabilities = torch.nn.functional.softmax(outputs, dim=1)
    confidence, predicted_idx = torch.max(probabilities, 1)
    
    # Get the class name
    plant_disease = CLASS_NAMES[predicted_idx.item()]
    confidence_score = confidence.item()
    
    # Get remedy
    if "healthy" not in plant_disease.lower():
        remedy = get_remedy(plant_disease)
        if remedy is None:
            remedy = f"No specific remedy found for {plant_disease}. Please consult a plant specialist."
    else:
        remedy = "Your plant is healthy! Keep up the good care."
    
    return plant_disease, remedy, confidence_score