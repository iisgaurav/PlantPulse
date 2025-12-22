import { ImageBox } from "@/components/image-box";
import { siteConfig } from "@/config/site";

export default function Explore() {
  return (
    <main className="min-h-screen nature-bg pt-24 pb-16">
      {/* Decorative Elements */}
      <div className="fixed top-40 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="fixed bottom-20 -right-20 w-96 h-96 rounded-full bg-success/10 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Page Header */}
        <div className="text-center px-6 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              AI Disease Detection
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground max-w-2xl mx-auto">
            Upload your plant image and let our AI detect diseases instantly
          </h2>
        </div>

        {/* Image Upload Section */}
        <ImageBox />
      </div>
    </main>
  );
}
