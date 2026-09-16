import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { workItems } from "@/data/work";
import { screenshotFor } from "@/data/screenshots";
import { FadeInView } from "@/components/FadeInView";

// A symmetric fan: the active card sits centered, its left neighbor leans out to
// the left (rotated counter-clockwise), its right neighbor leans out to the right
// (rotated clockwise) — like a hand of 3 cards, not a one-directional stack.
// GROUP_SHIFT nudges the whole fan slightly right within its box.
const GROUP_SHIFT = 28;
const styleFor = (signedOffset: number) => {
  if (signedOffset === 0) return { rotate: 0, x: 0, y: 0, scale: 1, opacity: 1, z: 30 };
  const side = Math.sign(signedOffset); // -1 = left neighbor, +1 = right neighbor
  return { rotate: side * 9, x: side * 150, y: 24, scale: 0.93, opacity: 0.6, z: 20 };
};

const WorkTeaser = () => {
  const count = workItems.length;
  // Start centered on Gandhi Century High School specifically (falling back to the
  // middle item if it's ever removed from the list).
  const defaultIndex = workItems.findIndex((w) => w.slug === "gandhi-century-high-school");
  const [activeIndex, setActiveIndex] = useState(defaultIndex >= 0 ? defaultIndex : Math.floor((count - 1) / 2));

  const go = (delta: number) => setActiveIndex((i) => (i + delta + count) % count);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <FadeInView className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Delivered work
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real client work, live today.
            </p>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 text-primary font-semibold flex-shrink-0">
            All work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeInView>

        <FadeInView className="relative w-full max-w-3xl mx-auto h-[460px] sm:h-[440px]">
          {workItems.map((item, i) => {
            // Distance from the active card, wrapped to the shortest signed direction
            // (e.g. for 3 items: 0 = center, +1 = right neighbor, -1 = left neighbor).
            const raw = (i - activeIndex + count) % count;
            const signedOffset = raw > count / 2 ? raw - count : raw;
            const style = styleFor(signedOffset);
            const shot = screenshotFor(item.slug);
            const isFront = signedOffset === 0;

            const cardBody = (
              <div className="card-professional p-0 overflow-hidden h-full flex flex-col">
                <div className="aspect-video bg-black/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {shot ? (
                    <img src={shot.path} alt={shot.alt} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <ImageOff className="w-8 h-8 text-muted-foreground" />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wide text-primary mb-2 block">
                    {item.client}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {item.summary}
                  </p>
                  {isFront && (
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      View case study
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            );

            // Set in inline style, not Tailwind's `transition-all` + `duration-*` +
            // `ease-*` utility classes — `transition-all` carries its own baked-in
            // default duration/timing-function that was winning the cascade over the
            // arbitrary-value utilities, so the fan was actually snapping in ~150ms
            // instead of the intended slow, smooth glide. Inline style always wins.
            const commonStyle = {
              transform: `translate(calc(-50% + ${style.x + GROUP_SHIFT}px), ${style.y}px) rotate(${style.rotate}deg) scale(${style.scale})`,
              opacity: style.opacity,
              zIndex: style.z,
              transition: "transform 900ms cubic-bezier(0.22,1,0.36,1), opacity 900ms cubic-bezier(0.22,1,0.36,1)",
            };
            // Anchored to the horizontal center of the box (left-1/2 + the -50% in
            // the transform above), then nudged out to each side — that's what makes
            // this a fan around a center point instead of a stack piling one way.
            const commonClass = "absolute left-1/2 top-0 w-full max-w-md h-full";

            return isFront ? (
              <Link key={item.slug} to={`/work/${item.slug}`} className={commonClass} style={commonStyle}>
                {cardBody}
              </Link>
            ) : (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Show ${item.client}`}
                className={`${commonClass} text-left`}
                style={commonStyle}
              >
                {cardBody}
              </button>
            );
          })}
        </FadeInView>

        {count > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkTeaser;
