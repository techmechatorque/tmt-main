import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Dean of Engineering",
    institution: "IIT Technology Institute",
    content: "TechMecha Torque has revolutionized how we manage our institution. The integrated platform saved us countless hours and significantly improved our operational efficiency.",
    rating: 5
  },
  {
    name: "Prof. Anjali Sharma",
    role: "Head of Administration",
    institution: "Global University",
    content: "The NextAttendance and Smart Scheduling modules have been game-changers. We've seen a 40% reduction in administrative workload and much happier faculty members.",
    rating: 5
  },
  {
    name: "Dr. Vikram Patel",
    role: "IT Director",
    institution: "National College of Technology",
    content: "Implementation was seamless, and the support team is outstanding. The security features give us complete peace of mind while managing sensitive student data.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from educators and administrators who transformed their institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="card-professional border-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground/90 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.institution}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
