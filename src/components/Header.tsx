import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-display bg-gradient-hero bg-clip-text text-transparent">
              TrueGritX
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-hero-accent transition-colors font-medium">
              About
            </a>
            <a href="#programs" className="text-foreground hover:text-hero-accent transition-colors font-medium">
              Programs
            </a>
            <a href="#testimonials" className="text-foreground hover:text-hero-accent transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-foreground hover:text-hero-accent transition-colors font-medium">
              Contact
            </a>
            <Button variant="hero" size="lg">
              Start Your Journey
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="text-foreground hover:text-hero-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#programs"
                className="text-foreground hover:text-hero-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-hero-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-hero-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button variant="hero" size="lg" className="w-full">
                Start Your Journey
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;