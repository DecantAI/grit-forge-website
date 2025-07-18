import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Grit Foundation",
      subtitle: "Individual Coaching",
      duration: "12 weeks",
      icon: Zap,
      price: "$2,997",
      description: "Build unshakeable mental resilience and develop the core traits of true grit through personalized 1-on-1 coaching.",
      features: [
        "Weekly 90-minute coaching sessions",
        "Personalized grit development plan",
        "24/7 text support for breakthrough moments",
        "Mental resilience assessment & tracking",
        "Goal achievement framework",
        "Access to TrueGritX resource library"
      ],
      highlighted: false
    },
    {
      title: "Heroic Transformation",
      subtitle: "Premium Program",
      duration: "6 months", 
      icon: CheckCircle,
      price: "$7,497",
      description: "The complete heroic transformation experience with intensive coaching, group support, and real-world challenges.",
      features: [
        "Bi-weekly 2-hour intensive sessions",
        "Small group mastermind (max 8 people)",
        "Monthly heroic challenges & competitions",
        "Direct access to coach via private channel",
        "Quarterly in-person intensive workshop", 
        "Lifetime access to alumni community",
        "Certificate of Heroic Achievement"
      ],
      highlighted: true
    },
    {
      title: "Corporate Grit",
      subtitle: "Team Development",
      duration: "3-12 months",
      icon: Users,
      price: "Custom",
      description: "Transform your entire organization with our corporate grit development program designed for high-performing teams.",
      features: [
        "Team grit assessment & strategy",
        "Leadership resilience training",
        "Monthly team building challenges",
        "Executive coaching for key leaders",
        "Performance metrics & tracking",
        "Custom workshop design",
        "Ongoing support & maintenance"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Choose Your <span className="bg-gradient-accent bg-clip-text text-transparent">Heroic Path</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every hero's journey is unique. Select the program that matches your current stage 
            and desired level of transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-card-custom hover:shadow-hero transition-all duration-300 hover:scale-105 ${
                program.highlighted ? 'ring-2 ring-hero-accent' : ''
              }`}
            >
              {program.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-accent text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  program.highlighted ? 'bg-gradient-accent' : 'bg-gradient-hero'
                }`}>
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold font-display text-foreground">
                  {program.title}
                </CardTitle>
                <p className="text-muted-foreground">{program.subtitle}</p>
                <div className="flex items-center justify-center text-sm text-muted-foreground mt-2">
                  <Clock className="w-4 h-4 mr-2" />
                  {program.duration}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{program.price}</div>
                  <p className="text-muted-foreground text-sm">{program.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-hero-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={program.highlighted ? "accent" : "hero"} 
                  size="lg" 
                  className="w-full"
                >
                  {program.price === "Custom" ? "Get Quote" : "Start Journey"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which program is right for you?
          </p>
          <Button variant="outline" size="lg">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;