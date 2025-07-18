import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Tech Executive",
      content: "TrueGritX transformed how I handle pressure. I went from avoiding challenges to actively seeking them out. My team noticed the change immediately, and I was promoted to VP within 6 months.",
      rating: 5,
      result: "Promoted to VP"
    },
    {
      name: "Marcus Thompson", 
      role: "Entrepreneur",
      content: "After years of giving up on projects halfway through, TrueGritX taught me real persistence. I finally launched my business and hit $100K revenue in the first year. The difference is night and day.",
      rating: 5,
      result: "$100K Revenue"
    },
    {
      name: "Jennifer Chen",
      role: "Marathon Runner",
      content: "I thought I knew what mental toughness was until I worked with TrueGritX. The mental strategies didn't just help me run my first marathon—they changed how I approach every challenge in life.",
      rating: 5,
      result: "First Marathon Completed"
    },
    {
      name: "David Rodriguez",
      role: "Military Veteran",
      content: "Transitioning to civilian life felt impossible until TrueGritX helped me channel my military discipline differently. Now I run a successful consulting firm and help other veterans make the transition.",
      rating: 5,
      result: "Successful Career Transition"
    },
    {
      name: "Amanda Foster",
      role: "Single Mother",
      content: "Balancing career and motherhood while pursuing my master's degree seemed overwhelming. TrueGritX gave me the mental framework to not just survive, but thrive in all areas of my life.",
      rating: 5,
      result: "Master's Degree Achieved"
    },
    {
      name: "Robert Kim",
      role: "Sales Manager", 
      content: "My sales numbers were mediocre for years. After applying TrueGritX principles, I became the top performer in my company three quarters in a row. The mindset shift was everything.",
      rating: 5,
      result: "Top Sales Performer"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">
            Real People, <span className="bg-gradient-hero bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how TrueGritX has transformed lives across industries and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card-custom hover:shadow-hero transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-hero-accent fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{testimonial.role}</div>
                  <div className="inline-block bg-gradient-accent text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {testimonial.result}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-card-custom">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-display text-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of people who have transformed their challenges into victories 
              with TrueGritX coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-hero-accent">95%</div>
                <div className="text-sm text-muted-foreground">Goal Achievement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hero-accent">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-hero-accent">500+</div>
                <div className="text-sm text-muted-foreground">Lives Transformed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;