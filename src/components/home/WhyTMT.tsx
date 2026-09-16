import { CheckCircle } from "lucide-react";
import { benefits } from "@/data/services";
import { FadeInView } from "@/components/FadeInView";

const WhyTMT = () => {
  return (
    <section className="py-24 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6">
        <FadeInView className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Why TechMecha Torque
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {benefits.map((b, index) => (
            <FadeInView key={b.title} delay={index * 100} className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTMT;
