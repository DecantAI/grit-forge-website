import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Mail, Phone, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Start Your <span className="bg-gradient-accent bg-clip-text text-transparent">Heroic Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to transform your challenges into victories? Let's discuss how TrueGritX 
            can help you build unshakeable resilience and achieve extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-card-custom">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-display text-foreground flex items-center">
                <Zap className="w-6 h-6 text-hero-accent mr-3" />
                Get Started Today
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What's your biggest challenge right now?
                </label>
                <Textarea 
                  placeholder="Tell us about the challenge you're facing or the goal you want to achieve..."
                  rows={4}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Which program interests you most?
                </label>
                <select className="w-full p-3 border border-input rounded-md bg-background">
                  <option value="">Select a program</option>
                  <option value="foundation">Grit Foundation (Individual)</option>
                  <option value="transformation">Heroic Transformation (Premium)</option>
                  <option value="corporate">Corporate Grit (Team)</option>
                  <option value="consultation">Free Consultation First</option>
                </select>
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Schedule Free Consultation
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll respond within 24 hours to schedule your free 30-minute strategy session.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info & CTA */}
          <div className="space-y-8">
            <Card className="border-0 shadow-card-custom bg-gradient-hero text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-display mb-6">
                  Why Choose TrueGritX?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-hero-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Proven methodology used by 500+ successful clients</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-hero-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>95% goal achievement rate across all programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-hero-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Personalized approach tailored to your unique situation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-hero-accent rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>Ongoing support throughout your transformation journey</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-card-custom text-center">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 text-hero-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Free Consultation</h4>
                  <p className="text-sm text-muted-foreground">
                    30-minute strategy session to assess your needs
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card-custom text-center">
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 text-hero-accent mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-card-custom">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Other Ways to Connect</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-hero-accent mr-3" />
                    <span className="text-muted-foreground">hello@truegritx.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-hero-accent mr-3" />
                    <span className="text-muted-foreground">+1 (555) 123-GRIT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;