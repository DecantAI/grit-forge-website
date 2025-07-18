import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-hero-accent mr-3" />
              <h3 className="text-2xl font-bold font-display">TrueGritX</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Transform your biggest challenges into your greatest victories. 
              Build unshakeable courage, resilience, and determination.
            </p>
            <div className="text-sm text-white/60">
              © 2024 TrueGritX. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-hero-accent transition-colors">About</a></li>
              <li><a href="#programs" className="hover:text-hero-accent transition-colors">Programs</a></li>
              <li><a href="#testimonials" className="hover:text-hero-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-hero-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#programs" className="hover:text-hero-accent transition-colors">Grit Foundation</a></li>
              <li><a href="#programs" className="hover:text-hero-accent transition-colors">Heroic Transformation</a></li>
              <li><a href="#programs" className="hover:text-hero-accent transition-colors">Corporate Grit</a></li>
              <li><a href="#contact" className="hover:text-hero-accent transition-colors">Free Consultation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>Built for heroes who refuse to give up.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;