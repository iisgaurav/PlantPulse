import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-navbar">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex gap-10 items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <span className="text-xl font-bold gradient-text">
              {siteConfig.name}
            </span>
          </Link>
          <ul className="hidden md:flex gap-8">
            <li>
              <Link
                href="/Explore"
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                Explore
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/Explore"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full gradient-bg text-white text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 btn-nature"
          >
            Get Started
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
