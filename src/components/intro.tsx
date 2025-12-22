import GreenLeaves from "@/assets/green-leaves.jpg";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden nature-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={GreenLeaves}
          alt="Nature Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60 dark:from-background/98 dark:via-background/90 dark:to-background/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl leaf-float" />
      <div
        className="absolute bottom-32 right-20 w-32 h-32 rounded-full bg-success/20 blur-2xl leaf-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/30 blur-lg leaf-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            AI-Powered Plant Health Detection
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
          <span className="block text-foreground">Protect Your</span>
          <span className="block gradient-text mt-2">Plants Today</span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/Explore">
            <Button
              size="lg"
              className="px-8 py-6 text-lg rounded-full gradient-bg text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-nature"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Diagnose Now
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-full border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
            >
              Learn More
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-6 card-hover">
            <p className="text-3xl md:text-4xl font-bold gradient-text">38+</p>
            <p className="text-sm text-muted-foreground mt-1">Plant Diseases</p>
          </div>
          <div className="glass-card rounded-2xl p-6 card-hover">
            <p className="text-3xl md:text-4xl font-bold gradient-text">14</p>
            <p className="text-sm text-muted-foreground mt-1">Plant Species</p>
          </div>
          <div className="glass-card rounded-2xl p-6 card-hover">
            <p className="text-3xl md:text-4xl font-bold gradient-text">AI</p>
            <p className="text-sm text-muted-foreground mt-1">Powered</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">
            Scroll to explore
          </span>
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
