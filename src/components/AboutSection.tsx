import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Unbreakable Resilience",
      description: "Build mental fortitude that turns setbacks into comebacks and obstacles into opportunities."
    },
    {
      icon: Target,
      title: "Focused Determination", 
      description: "Develop laser-sharp focus and unwavering commitment to achieve your most ambitious goals."
    },
    {
      icon: Zap,
      title: "Courageous Action",
      description: "Transform fear into fuel and take bold action even when the path ahead seems uncertain."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            What Is <span className="bg-gradient-hero bg-clip-text text-transparent">TrueGritX</span>?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            TrueGritX is more than coaching—it's a complete transformation system that builds the 
            heroic qualities within you. We combine proven psychology, ancient wisdom, and modern 
            performance science to forge unshakeable character and extraordinary results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-card-custom hover:shadow-hero transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold font-display text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-card-custom p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-display text-foreground mb-6">
                The TrueGritX Method
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Assess Your Foundation</h4>
                    <p className="text-muted-foreground">Identify your current strengths, challenges, and the specific areas where you need to build grit.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Build Mental Armor</h4>
                    <p className="text-muted-foreground">Develop unshakeable resilience through proven techniques that strengthen your mental fortitude.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Take Heroic Action</h4>
                    <p className="text-muted-foreground">Apply your newfound grit to achieve breakthrough results in your most important goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero rounded-xl p-8 text-white">
              <blockquote className="text-lg italic mb-4">
                "True grit isn't about never falling down. It's about getting back up every single time, 
                stronger and more determined than before."
              </blockquote>
              <cite className="font-semibold">— TrueGritX Philosophy</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;