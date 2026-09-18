import { ArrowUpRight, Check, Code2, Cpu, Puzzle, Award } from "lucide-react";
import { products } from "@/data/products";
import { FadeInView } from "@/components/FadeInView";

// Curated from learningSpaces.features/howItWorks — grounded in the same source of
// truth as the checklist on the right, just condensed to 4 highlight cards.
const HIGHLIGHTS = [
  { icon: Code2, title: "Languages", description: "C, C++, Java & Python complete curriculum" },
  { icon: Cpu, title: "Online Compiler", description: "Real-time browser-based code execution" },
  { icon: Puzzle, title: "Coding Challenges", description: "Hands-on practice problems across every course" },
  { icon: Award, title: "Certificates", description: "Earned on completing a track" },
];

const LiveProof = () => {
  const learningSpaces = products.find((p) => p.slug === "learning-spaces");
  if (!learningSpaces) return null;

  const displayUrl = learningSpaces.liveUrl?.replace(/^https?:\/\//, "");

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {learningSpaces.name} is live today
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              {learningSpaces.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {HIGHLIGHTS.map((h, index) => (
                <FadeInView key={h.title} delay={index * 80} className="rounded-lg bg-card/50 p-3">
                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center mb-2">
                    <h.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-0.5">{h.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{h.description}</p>
                </FadeInView>
              ))}
            </div>

            <a
              href={learningSpaces.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5"
            >
              Visit {learningSpaces.name} live
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </FadeInView>

          <FadeInView delay={150} className="rounded-2xl border border-border bg-card p-5 sm:p-8">
            <div className="mb-6 pb-6 border-b border-border">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Active Environment
              </div>
              <div className="text-xl font-bold text-foreground break-all">{displayUrl}</div>
            </div>

            <ul className="space-y-3 mb-6">
              {learningSpaces.features?.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/50 px-4 py-3"
                >
                  <span className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-4 pt-6 border-t border-border text-sm">
              <span className="text-muted-foreground">Live and in use today</span>
              <span className="font-semibold text-primary">Zero setup required</span>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default LiveProof;
