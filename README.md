# 🌿 PlantPulse

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Python-Flask-3776AB?style=for-the-badge&logo=python)](https://flask.palletsprojects.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-ResNet18-EE4C2C?style=for-the-badge&logo=pytorch)](https://pytorch.org/)

**AI-Powered Plant Disease Detection Platform**

[Live Demo](https://plantpulsesoit.vercel.app/) · [API Endpoint](https://plantpulse.onrender.com) · [Report Bug](https://github.com/iisgaurav/PlantPulse/issues) · [Request Feature](https://github.com/iisgaurav/PlantPulse/issues)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Model Architecture](#-model-architecture)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🌱 About

PlantPulse is a cutting-edge agricultural technology platform that leverages deep learning to help farmers, gardeners, and plant enthusiasts detect diseases in their plants instantly. Using advanced computer vision and a custom-trained ResNet18 model, the application analyzes plant images to identify diseases across 38 different plant species and provides actionable treatment recommendations.

### 🎯 Mission

To democratize plant health monitoring by making advanced AI-powered disease detection accessible to everyone, from small-scale farmers to urban gardeners.

### 🌍 Impact

- Reduces crop losses through early disease detection
- Minimizes pesticide overuse with targeted treatments
- Empowers farmers with real-time diagnostic tools
- Promotes sustainable agriculture practices

---

## ✨ Features

### 🤖 AI-Powered Detection
- **38+ Disease Classes**: Comprehensive coverage across 14 plant species
- **Custom ML Model**: ResNet18 trained on 87k plant images
- **High Accuracy**: Advanced image validation prevents false positives
- **Real-time Analysis**: Sub-second diagnosis with confidence scores

### 🌿 Comprehensive Remedies
- **Treatment Recommendations**: Detailed care instructions for each disease
- **Prevention Tips**: Proactive measures to maintain plant health
- **Cultural Practices**: Species-specific care guidelines

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Contemporary, nature-inspired aesthetic
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop
- **Dark/Light Mode**: Eye-friendly themes for all conditions
- **Intuitive Workflow**: Simple drag-and-drop image upload

### 🔧 Technical Features
- **Robust Validation**: Advanced plant detection to prevent non-plant misclassification
- **Confidence Scoring**: Percentage-based confidence in predictions
- **Error Handling**: Comprehensive error management and user feedback
- **Performance Optimized**: Efficient image processing pipelines

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1 | React framework with App Router |
| **React** | 19 | UI library |
| **TypeScript** | 5.9 | Type safety |
| **Tailwind CSS** | 4.1 | Styling and responsive design |
| **TanStack Query** | 5.59 | Data fetching and state management |
| **Radix UI** | 1.1 | Accessible UI components |
| **next-themes** | 0.4 | Dark/light mode toggle |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.13 | Runtime environment |
| **Flask** | 3.1 | Web framework |
| **PyTorch** | 2.6.0 | Deep learning framework |
| **Torchvision** | 0.21.0 | Computer vision utilities |
| **Pillow** | 12.0 | Image processing |
| **Flask-CORS** | 6.0 | Cross-origin resource sharing |

### ML Model
| Component | Details |
|-----------|---------|
| **Architecture** | ResNet18 |
| **Training Data** | 87k plant images (New Plant Diseases Dataset) |
| **Classes** | 38 (37 diseases + 1 healthy) |
| **Input Size** | 224x224 RGB images |
| **Preprocessing** | Normalization with ImageNet statistics |

### Deployment
| Service | Purpose |
|---------|---------|
| **Vercel** | Frontend hosting |
| **Render** | Backend API hosting |

---

## 🧠 Model Architecture

### ResNet18 Architecture
```
Input (224x224x3) → Conv1 → MaxPool → ResBlock1 → ResBlock2 → ResBlock3 → ResBlock4 → AvgPool → FC (38 classes) → Output
```

### Training Details
- **Dataset**: New Plant Diseases Dataset (87k images)
- **Classes**: 38 (Apple, Blueberry, Cherry, Corn, Grape, Orange, Peach, Pepper, Potato, Raspberry, Soybean, Squash, Strawberry, Tomato)
- **Preprocessing**: Resize to 224x224, normalization with mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]
- **Validation**: Advanced plant detection to prevent non-plant misclassification

### Disease Classes
| Plant | Diseases |
|-------|----------|
| 🍎 Apple | Apple Scab, Black Rot, Cedar Rust, Healthy |
| 🫐 Blueberry | Healthy |
| 🍒 Cherry | Powdery Mildew, Healthy |
| 🌽 Corn | Gray Leaf Spot, Common Rust, Northern Leaf Blight, Healthy |
| 🍇 Grape | Black Rot, Esca, Leaf Blight, Healthy |
| 🍊 Orange | Citrus Greening |
| 🍑 Peach | Bacterial Spot, Healthy |
| 🌶️ Pepper | Bacterial Spot, Healthy |
| 🥔 Potato | Early Blight, Late Blight, Healthy |
| 🫐 Raspberry | Healthy |
| 🫘 Soybean | Healthy |
| 🎃 Squash | Powdery Mildew |
| 🍓 Strawberry | Leaf Scorch, Healthy |
| 🍅 Tomato | 10 diseases + Healthy |

### Plant Detection Algorithm
The system implements advanced validation to distinguish between plant and non-plant images:
- **Color Distribution Analysis**: Checks for dominant green content
- **Texture Variation**: Analyzes leaf-like patterns
- **Brightness Validation**: Ensures proper lighting conditions
- **Confidence Thresholding**: Low-confidence predictions are rejected

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.8+
- **Git**
- **Git Large File Storage (git-lfs)** - for model file

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iisgaurav/PlantPulse.git
   cd PlantPulse
   ```

2. **Install git-lfs (for large model file)**
   ```bash
   git lfs install
   git lfs pull
   ```

3. **Install frontend dependencies**
   ```bash
   npm install
   ```

4. **Install backend dependencies**
   ```bash
   cd api/src
   pip install -r requirements.txt
   cd ../..
   ```

5. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

6. **Configure environment variables**
   ```env
   # Frontend (in .env.local)
   NEXT_PUBLIC_ML_API_URL=http://localhost:8080
   ```

### Running the Application

1. **Start the Flask API** (Terminal 1)
   ```bash
   cd api/src
   python main.py
   ```
   The API will run on `http://localhost:8080`

2. **Start the Next.js frontend** (Terminal 2)
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

### Development Commands

```bash
# Frontend development
npm run dev

# Frontend build
npm run build

# Frontend start (production)
npm run start

# Frontend linting
npm run lint

# Backend development
cd api/src
python main.py
```

---

## 📡 API Reference

### POST `/`
Detect plant disease from an image.

**Request Body:**
```json
{
  "image": "base64_encoded_image_string"
}
```

**Response:**
```json
{
  "plant": "Tomato",
  "disease": "Early blight",
  "remedy": "Treatment and prevention recommendations...",
  "confidence": 95.5
}
```

**Response Fields:**
- `plant`: Detected plant species
- `disease`: Identified disease or "healthy"
- `remedy`: Treatment recommendations
- `confidence`: Confidence percentage (0-100)

**Error Response:**
```json
{
  "error": "Error description",
  "plant": "Unknown",
  "disease": "Error processing image",
  "remedy": "Please try again with a different image."
}
```

### GET `/health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy"
}
```

### Image Validation
The API includes advanced validation to prevent non-plant misclassification:
- **Plant Detection**: Analyzes color distribution and texture patterns
- **Confidence Threshold**: Low-confidence predictions are rejected
- **Error Handling**: Comprehensive error management

---

## 🏗️ Project Structure

```
PlantPulse/
├── api/                      # Python Flask Backend
│   └── src/
│       ├── model_files/      # ML Model & Data
│       │   ├── plant_disease_resnet18.pth    # Trained ResNet18 model
│       │   ├── data.json                     # Disease remedies
│       │   └── ml_predict.py                 # Prediction logic
│       ├── main.py           # Flask API server
│       ├── requirements.txt  # Python dependencies
│       └── Procfile          # Render deployment config
│
├── src/                      # Next.js Frontend
│   ├── app/                  # App Router pages
│   │   ├── page.tsx          # Home page
│   │   ├── Explore/          # Disease detection page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   │
│   ├── components/           # React components
│   │   ├── ui/               # Shadcn UI components
│   │   ├── ml-result.tsx     # Results display
│   │   ├── image-box.tsx     # Image upload
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── theme-provider.tsx
│   │
│   ├── config/               # Site configuration
│   ├── lib/                  # Utilities
│   │   ├── types.ts          # TypeScript interfaces
│   │   └── utils.ts          # Utility functions
│   │
│   └── content/              # Documentation
│       └── docs/             # MDX content
│
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── .vercelignore            # Vercel ignore rules
├── vercel.json              # Vercel configuration
├── package.json             # Node.js dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md
```

---

## 🚀 Deployment

### Frontend (Vercel)

1. **Push to GitHub**
2. **Connect Vercel to repository**
3. **Configure environment variables**
   ```env
   NEXT_PUBLIC_ML_API_URL=https://your-render-app.onrender.com
   ```
4. **Deploy automatically**

### Backend (Render)

1. **Create new Web Service on Render**
2. **Connect to GitHub repository**
3. **Configure deployment settings**:
   - **Root Directory**: `api/src`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn main:app`
   - **Environment Variables**:
     - `PORT`: `8080`

### Environment Variables

**Frontend (.env.local)**:
```env
NEXT_PUBLIC_ML_API_URL=https://your-render-app.onrender.com
```

**Backend (Render Dashboard)**:
```env
PORT=8080
```

### Deployment Notes
- **Model File**: Large model file (44MB) requires Git LFS
- **Cold Start**: First request after sleep may take 30-60 seconds
- **Free Tier**: Render free tier spins down after 15 minutes of inactivity
- **CORS**: Properly configured for cross-origin requests

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Guidelines

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Workflow

1. **Code Style**: Follow existing code patterns and TypeScript best practices
2. **Testing**: Ensure all functionality works as expected
3. **Documentation**: Update documentation for new features
4. **Commits**: Use conventional commit messages

### Areas for Improvement

- [ ] Add support for additional plant species
- [ ] Implement user authentication and history
- [ ] Add offline capability
- [ ] Improve model accuracy for rare diseases
- [ ] Add multi-language support

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Gaurav Verma**

- GitHub: [@iisgaurav](https://github.com/iisgaurav)
- LinkedIn: [iisgaurav](https://linkedin.com/in/iisgaurav)
- Portfolio: [iisgaurav.vercel.app](https://iisgaurav.vercel.app)

### Connect

- 📧 Email: gauravv2504@gmail.com
- 📱 Phone: +91 70009 65078

---

<div align="center">

Made with 💚 for plants everywhere

[![](https://visitcount.itsvg.in/api?id=plantpulse&label=Project%20Views&color=1&icon=0&pretty=true)](https://visitcount.itsvg.in)

</div>