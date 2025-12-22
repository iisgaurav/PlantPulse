import ClickPhoto from "@/assets/click-photo.jpg";
import Greenry from "@/assets/happy-greens.jpg";
import Processing from "@/assets/processing.jpg";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Take a clear photo of your plant leaf showing signs of disease. Our AI works best with focused, well-lit images.",
    image: ClickPhoto,
    alt: "Person capturing plant photo",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "Our advanced ResNet18 AI model analyzes your image instantly, identifying diseases with high accuracy across 38+ conditions.",
    image: Processing,
    alt: "AI processing the image",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Heal",
    description: `${siteConfig.name} provides detailed disease information and effective treatment recommendations to save your plants.`,
    image: Greenry,
    alt: "Healthy green plants",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 nature-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="text-sm font-medium text-primary">
              Simple Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How <span className="gradient-text">{siteConfig.name}</span> Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Three simple steps to diagnose and treat your plant diseases using
            cutting-edge AI technology
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="group">
              <div className="glass-card rounded-3xl overflow-hidden card-hover h-full">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 gradient-bg" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
