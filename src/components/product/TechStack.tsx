import { Users } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { techStack } from "@/data/techStack";

const TechStack = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.2fr] gap-12 items-start">
        <FadeInView>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">
            Technology &amp; Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Tools chosen for the work.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We choose the stack based on what the product needs, not a fixed template.
            These are the tools we reach for most often.
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <Users className="w-4 h-4" />
            Built to scale past 1,00,000+ users
          </div>
        </FadeInView>

        <FadeInView delay={100} className="flex flex-wrap gap-3">
          {techStack.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 shadow-professional"
            >
              <t.icon className="w-5 h-5 text-foreground flex-shrink-0" />
              <span className="font-semibold text-foreground whitespace-nowrap">{t.name}</span>
            </div>
          ))}
        </FadeInView>
      </div>
    </section>
  );
};

export default TechStack;
