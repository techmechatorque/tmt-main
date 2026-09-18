import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ImageOff, Pause, Play } from "lucide-react";
import { workItems } from "@/data/work";
import { screenshotFor } from "@/data/screenshots";
import BrowserFrame from "@/components/showcase/BrowserFrame";

const AUTOPLAY_MS = 5000;
const TRANSITION = "transform 2000ms cubic-bezier(0.65,0,0.35,1), opacity 2000ms cubic-bezier(0.65,0,0.35,1)";
// Responsive slide width — full "desktop" size on wide screens, shrinking to fit
// narrow ones instead of rendering at a fixed pixel width and getting cropped.
const SLIDE_W = "clamp(280px, 78vw, 780px)";

const MAX_DEPTH = 2;
const styleFor = (signedOffset: number) => {
  const depth = Math.min(Math.abs(signedOffset), MAX_DEPTH + 1);
  const side = Math.sign(signedOffset);
  if (depth === 0) return { rotateY: 0, x: 0, scale: 1, opacity: 1, z: 40 };
  if (depth === 1) return { rotateY: side * -32, x: side * 46, scale: 0.82, opacity: 0.55, z: 30 };
  if (depth === 2) return { rotateY: side * -46, x: side * 70, scale: 0.68, opacity: 0.25, z: 20 };
  return { rotateY: side * -50, x: side * 76, scale: 0.6, opacity: 0, z: 10 };
};

// A rotational (3D coverflow) slider: the active slide sits centered and full
// size, each neighbor curves away in 3D on either side. Clicking a neighbor
// rotates it into the center instead of navigating away; only the centered
// slide's frame links out to its case study. Autoplay/arrows/dots drive the
// same rotation, slowly (2s) so the turn actually reads.
const WorkCarousel = () => {
  const count = workItems.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const isHoveredRef = useRef(false);

  const go = (delta: number) => setActiveIndex((i) => (i + delta + count) % count);

  useEffect(() => {
    if (!isPlaying || count <= 1) return;
    const id = setInterval(() => {
      if (!isHoveredRef.current) go(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, count]);

  const active = workItems[activeIndex];

  return (
    <div
      onMouseEnter={() => (isHoveredRef.current = true)}
      onMouseLeave={() => (isHoveredRef.current = false)}
    >
      <div
        className="relative mx-auto h-[400px] sm:h-[460px] md:h-[540px] overflow-hidden"
        style={{ perspective: "1800px" }}
      >
        {workItems.map((item, i) => {
          const raw = (i - activeIndex + count) % count;
          const signedOffset = raw > count / 2 ? raw - count : raw;
          const style = styleFor(signedOffset);
          const isActive = signedOffset === 0;
          const shot = screenshotFor(item.slug);

          const frame = shot ? (
            <BrowserFrame src={shot.path} alt={shot.alt} />
          ) : (
            <div className="rounded-xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center text-muted-foreground text-sm">
              <ImageOff className="w-8 h-8" />
            </div>
          );

          const commonStyle: React.CSSProperties = {
            width: SLIDE_W,
            left: "50%",
            transform: `translate(-50%, -50%) translateX(${style.x}%) rotateY(${style.rotateY}deg) scale(${style.scale})`,
            opacity: style.opacity,
            zIndex: style.z,
            pointerEvents: style.opacity < 0.1 ? "none" : "auto",
            transition: TRANSITION,
          };

          // Always the same element (a <Link>) regardless of active state — if this
          // swapped tags (Link when active, button otherwise) React would destroy
          // and recreate the DOM node on every change of who's active, and the CSS
          // transition below would never get to animate the very card that matters
          // most. Non-active clicks just recenter instead of navigating away.
          return (
            <Link
              key={item.slug}
              to={`/work/${item.slug}`}
              aria-label={isActive ? item.title : `Show ${item.title}`}
              onClick={(e) => {
                if (!isActive) {
                  e.preventDefault();
                  setActiveIndex(i);
                }
              }}
              className="absolute top-1/2"
              style={commonStyle}
            >
              {frame}
            </Link>
          );
        })}

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous work"
              className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors z-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next work"
              className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 backdrop-blur border border-border flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors z-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      <div className="max-w-2xl mx-auto text-center mt-8 px-6">
        <span className="text-xs font-bold uppercase tracking-wide text-primary mb-2 block">
          {active.client}
        </span>
        <h2 className="text-2xl font-bold text-foreground mb-3">{active.title}</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">{active.summary}</p>
        <Link
          to={`/work/${active.slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
        >
          Case study
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary/40 hover:text-primary transition-colors flex-shrink-0"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <div className="flex items-center gap-2.5">
            {workItems.map((item, i) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to ${item.title}`}
                aria-current={i === activeIndex}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCarousel;
