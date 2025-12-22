from flask import Flask, jsonify, request
from flask_cors import CORS
from model_files.ml_predict import predict_plant
import base64


app = Flask("Plant Disease Detector")
CORS(app)


@app.route('/', methods=['POST'])
def predict():
    try:
        key_dict = request.get_json()
        image = key_dict["image"]
        imgdata = base64.b64decode(image)
        
        # Get prediction from ResNet18 model
        result, remedy, confidence = predict_plant(imgdata)
        
        # Parse plant and disease from result
        parts = result.split("___")
        plant = parts[0].replace("_", " ")
        disease = parts[1].replace("_", " ") if len(parts) > 1 else "Unknown"
        
        response = {
            "plant": plant,
            "disease": disease,
            "remedy": remedy,
            "confidence": round(confidence * 100, 2)
        }
        return jsonify(response)
    
    except Exception as e:
        return jsonify({
            "error": str(e),
            "plant": "Unknown",
            "disease": "Error processing image",
            "remedy": "Please try again with a different image."
        }), 500


@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8080)
