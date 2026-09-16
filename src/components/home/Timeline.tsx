import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { lifecycle } from "@/data/services";
import { FadeInView } from "@/components/FadeInView";

// A coverflow-style wheel: the active stage sits centered and slightly enlarged,
// each neighbor curves away to its side (rotated in 3D via rotateY, so it reads as
// following a circular path rather than a flat fan), shrinking and dimming with
// distance until it's effectively behind the center card.
const MAX_DEPTH = 2;
const styleFor = (signedOffset: number) => {
  const depth = Math.min(Math.abs(signedOffset), MAX_DEPTH + 1);
  const side = Math.sign(signedOffset);
  if (depth === 0) return { rotateY: 0, x: 0, y: 0, scale: 1.08, opacity: 1, z: 40 };
  if (depth === 1) return { rotateY: side * -35, x: side * 210, y: 14, scale: 0.86, opacity: 0.7, z: 30 };
  if (depth === 2) return { rotateY: side * -50, x: side * 340, y: 26, scale: 0.7, opacity: 0.35, z: 20 };
  // Anything further just folds in behind the depth-2 card, out of the way.
  return { rotateY: side * -55, x: side * 360, y: 30, scale: 0.6, opacity: 0, z: 10 };
};

const Timeline = () => {
  const count = lifecycle.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const go = (delta: number) => setActiveIndex((i) => (i + delta + count) % count);

  return (
    <section className="py-24 bg-secondary/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInView className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            How we build
          </h2>
        </FadeInView>

        <FadeInView
          className="relative mx-auto max-w-5xl h-[420px] sm:h-[400px]"
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
                className="absolute left-1/2 top-0 w-full max-w-sm h-full"
                style={{
                  transform: `translate(calc(-50% + ${style.x}px), ${style.y}px) rotateY(${style.rotateY}deg) scale(${style.scale})`,
                  opacity: style.opacity,
                  zIndex: style.z,
                  pointerEvents: style.opacity < 0.1 ? "none" : "auto",
                  transition: "transform 800ms cubic-bezier(0.22,1,0.36,1), opacity 800ms cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div
                  className={`card-professional h-full flex flex-col items-center justify-center text-center p-8 transition-colors duration-300 ${
                    isActive ? "border-primary/40" : ""
                  }`}
                >
                  <span className="text-5xl font-bold text-primary/30 mb-4">{stage.step}</span>
                  <h3 className="text-xl font-bold text-foreground mb-2">{stage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
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
