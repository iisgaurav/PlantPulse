# 🌿 PlantPulse

<div align="center">

![PlantPulse Banner](https://img.shields.io/badge/PlantPulse-Plant%20Disease%20Detection-10b981?style=for-the-badge&logo=leaf&logoColor=white)

**AI-Powered Plant Disease Detection Platform**

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Python](https://img.shields.io/badge/Python-Flask-3776AB?style=flat-square&logo=python)](https://flask.palletsprojects.com/)
[![PyTorch](https://img.shields.io/badge/PyTorch-ResNet18-EE4C2C?style=flat-square&logo=pytorch)](https://pytorch.org/)

[Live Demo](#) · [Report Bug](https://github.com/iisgaurav/PlantPulse/issues) · [Request Feature](https://github.com/iisgaurav/PlantPulse/issues)

</div>

---

## 📖 About

PlantPulse is a modern web application that helps farmers and plant enthusiasts detect diseases in their plants using advanced AI technology. Simply upload a photo of your plant, and our ResNet18-based machine learning model will analyze it to identify potential diseases and provide treatment recommendations.

### ✨ Features

- 🔍 **38+ Disease Detection** - Identifies diseases across 14 plant species
- 🤖 **AI-Powered Analysis** - Uses ResNet18 deep learning model
- 💊 **Treatment Suggestions** - Provides remedies and prevention tips
- ⚡ **Instant Results** - Get diagnosis in seconds
- 🌙 **Dark Mode** - Easy on the eyes, day or night
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Glassmorphism design with nature-inspired aesthetics

---

## 🌱 About the Model

PlantPulse uses a ResNet18 model trained on the New Plant Diseases Dataset (87k images), providing accurate detection across 38 different plant diseases and healthy plant identification.

## 🌱 Supported Plants & Diseases

| Plant | Diseases Detected |
|-------|------------------|
| 🍎 Apple | Scab, Black Rot, Cedar Rust, Healthy |
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

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.8+
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iisgaurav/PlantPulse.git
   cd PlantPulse
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd api/src
   pip install -r requirements.txt
   cd ../..
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env.local
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

---

## 🏗️ Project Structure

```
PlantPulse/
├── api/                      # Python Flask Backend
│   └── src/
│       ├── model_files/      # ML Model & Data
│       │   ├── plant_disease_resnet18.pth
│       │   ├── data.json     # Disease remedies
│       │   └── ml_predict.py # Prediction logic
│       ├── main.py           # Flask API server
│       └── requirements.txt
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
│   │   ├── navbar.tsx
│   │   ├── intro.tsx
│   │   ├── how-it-works.tsx
│   │   ├── image-box.tsx
│   │   ├── ml-result.tsx
│   │   └── footer.tsx
│   │
│   ├── lib/                  # Utilities
│   └── config/               # Site configuration
│
├── package.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4 with glassmorphism effects
- **Components**: Radix UI (accessible components)
- **State Management**: TanStack React Query
- **Theming**: next-themes (dark/light mode)
- **Language**: TypeScript 5.9

### Backend
- **Framework**: Flask (Python)
- **ML Framework**: PyTorch
- **Model**: ResNet18 (fine-tuned on PlantVillage dataset)
- **CORS**: Flask-CORS

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

### GET `/health`
Health check endpoint.

**Response:**
```json
{
  "status": "healthy"
}
```

---

## 🎨 Design Features

- **Glassmorphism** - Frosted glass effects with backdrop blur
- **Nature Theme** - Green color palette inspired by plants
- **Animations** - Smooth transitions and floating elements
- **Responsive** - Mobile-first design approach
- **Accessibility** - ARIA-compliant components

---

## 📦 Scripts

```bash
# Development
npm run dev        # Start development server

# Build
npm run build      # Build for production

# Production
npm run start      # Start production server

# Linting
npm run lint       # Run ESLint
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Gaurav Verma**

- GitHub: [@iisgaurav](https://github.com/iisgaurav)
- LinkedIn: [iisgaurav](https://linkedin.com/in/iisgaurav)

---

<div align="center">

Made with 💚 for plants everywhere

</div>
