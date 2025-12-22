import { siteConfig } from "@/config/site";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 nature-bg opacity-50" />

      <div className="relative glass-navbar">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold gradient-text">
                  {siteConfig.name}
                </span>
              </Link>
              <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
                A digital platform empowering farmers and plant enthusiasts to
                protect their crops and gardens from diseases using cutting-edge
                AI technology.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/iisgaurav"
                  target="_blank"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                >
                  <GitHubLogoIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/iisgaurav"
                  target="_blank"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
                >
                  <LinkedInLogoIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Explore"
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-lg mb-6">Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full gradient-bg" />
                  38+ Disease Detection
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full gradient-bg" />
                  AI-Powered Analysis
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full gradient-bg" />
                  Treatment Suggestions
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full gradient-bg" />
                  Instant Results
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              Made with
              <svg
                className="w-4 h-4 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              for plants everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
