import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { lifecycle } from "@/data/services";
import { FadeInView } from "@/components/FadeInView";
import { useIsMobile } from "@/hooks/use-mobile";

const MAX_DEPTH = 2;

const Timeline = () => {
  const isMobile = useIsMobile();
  // A coverflow-style wheel: the active stage sits centered and slightly enlarged,
  // each neighbor curves away to its side (rotated in 3D via rotateY, so it reads
  // as following a circular path rather than a flat fan), shrinking and dimming
  // with distance until it's effectively behind the center card. The neighbor
  // offsets are much smaller on mobile — at full size they'd push each card well
  // past a narrow screen's edge.
  const styleFor = (signedOffset: number) => {
    const depth = Math.min(Math.abs(signedOffset), MAX_DEPTH + 1);
    const side = Math.sign(signedOffset);
    if (depth === 0) return { rotateY: 0, x: 0, y: 0, scale: 1.08, opacity: 1, z: 40 };
    if (depth === 1)
      return { rotateY: side * -35, x: side * (isMobile ? 80 : 175), y: isMobile ? 10 : 14, scale: 0.86, opacity: 0.7, z: 30 };
    if (depth === 2)
      return { rotateY: side * -50, x: side * (isMobile ? 130 : 285), y: isMobile ? 18 : 26, scale: 0.7, opacity: 0.35, z: 20 };
    // Anything further just folds in behind the depth-2 card, out of the way.
    return { rotateY: side * -55, x: side * (isMobile ? 140 : 300), y: isMobile ? 20 : 30, scale: 0.6, opacity: 0, z: 10 };
  };

  const count = lifecycle.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const go = (delta: number) => setActiveIndex((i) => (i + delta + count) % count);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInView className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            How the work actually runs
          </h2>
        </FadeInView>

        <FadeInView
          className="relative mx-auto max-w-5xl h-[340px] sm:h-[420px]"
          style={{ perspective: "1400px" }}
        >
          {lifecycle.map((stage, i) => {
            const raw = (i - activeIndex + count) % count;
            const signedOffset = raw > count / 2 ? raw - count : raw;
            const style = styleFor(signedOffset);
            const isActive = signedOffset === 0;

            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Show ${stage.title}`}
                aria-current={isActive}
                className="absolute left-1/2 top-0 w-full max-w-[220px] sm:max-w-xs h-full"
                style={{
                  transform: `translate(calc(-50% + ${style.x}px), ${style.y}px) rotateY(${style.rotateY}deg) scale(${style.scale})`,
                  opacity: style.opacity,
                  zIndex: style.z,
                  pointerEvents: style.opacity < 0.1 ? "none" : "auto",
                  transition: "transform 800ms cubic-bezier(0.22,1,0.36,1), opacity 800ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div
                  className={`card-professional h-full flex flex-col items-center justify-center text-center p-4 sm:p-8 transition-colors duration-300 ${
                    isActive ? "border-primary/40" : ""
                  }`}
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-4">
                    <stage.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{stage.title}</h3>
                  <p className="hidden sm:block text-sm text-muted-foreground leading-relaxed mb-4">{stage.description}</p>
                  <ul className="space-y-1 sm:space-y-2 w-full">
                    {stage.points.map((point) => (
                      <li key={point} className="text-[11px] sm:text-xs text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            );
          })}
        </FadeInView>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous stage"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next stage"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
