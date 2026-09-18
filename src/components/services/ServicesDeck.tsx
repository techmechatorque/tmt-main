import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services, type Service } from "@/data/services";

// "What you get" per service — broken out from each service's own description
// above (data/services.ts), not new claims, just the same scope spelled out as
// four points instead of one sentence.
const WHAT_YOU_GET: Record<string, string[]> = {
  "Software Development": [
    "Product design & UX",
    "Full-stack development",
    "Deployment & hosting setup",
    "Ongoing maintenance",
  ],
  "Turn Complexity Into Intelligent Automation": [
    "AI-powered workflow automation",
    "Eliminates manual, repetitive tasks",
    "Connects and unifies your data",
    "Reduces operational errors",
  ],
  "Build Smarter Operations. Scale Without Friction.": [
    "AI embedded into daily operations",
    "Unifies disconnected data sources",
    "Streamlined, automated workflows",
    "Scales with your business",
  ],
  "SaaS Development": [
    "Architecture design",
    "End-to-end development",
    "Deployment & scaling",
    "Concept to production",
  ],
  "API Development": [
    "RESTful & GraphQL APIs",
    "Comprehensive documentation",
    "Testing & validation",
    "Integration support",
  ],
  "Data Analytics": [
    "Real-time dashboards",
    "Machine learning insights",
    "Business intelligence tools",
    "Analytics platform design",
  ],
  "Training & Certification": [
    "Structured C/C++/Java/Python curriculum",
    "Delivered via Learning Spaces",
    "Hands-on coding practice",
    "Certificate on completion",
  ],
};

// Scroll distance (vh) dedicated to each card's dwell-then-throw, and how far
// (vh) a thrown card travels before it's off-screen.
const CARD_SCROLL_VH = 85;
const THROW_VH = 95;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const CardBody = ({ service, index, total }: { service: Service; index: number; total: number }) => {
  const label = String(index + 1).padStart(2, "0");
  return (
    <>
      <div className="flex items-center justify-between pb-3 mb-4 sm:pb-4 sm:mb-6 border-b border-border">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {label} / {String(total).padStart(2, "0")}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Service</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 lg:gap-16 items-start">
        <div>
          <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground uppercase tracking-tight">
            {service.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-3 sm:mb-6 max-w-lg">
            {service.description}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
          >
            Talk to us about this
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="border-t lg:border-t-0 lg:border-l border-border pt-3 lg:pt-0 lg:pl-16">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-2 sm:mb-4">
            What you get
          </span>
          <ul>
            {WHAT_YOU_GET[service.title]?.map((point, i) => (
              <li key={point} className="flex items-baseline gap-4 py-1.5 sm:py-3 border-b border-border last:border-0">
                <span className="text-xs font-bold text-primary/60 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs sm:text-sm text-foreground/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

// A deck of cards, not a list: the front card sits pinned at the center of the
// viewport while you scroll, then gets thrown up and off-window (translated,
// rotated, faded) to reveal the next one waiting stacked behind it — like
// flicking through a physical stack rather than a flat scroll list.
const ServicesDeck = () => {
  const total = services.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let rafId = 0;

    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      const overall = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      const raw = overall * total;
      const activeIndex = Math.min(total - 1, Math.floor(raw));
      const exitT = Math.max(0, Math.min(1, raw - activeIndex));

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        let e = 0; // this card's own throw progress
        let pointerEvents: "auto" | "none" = "none";

        if (i < activeIndex) {
          e = 1; // already thrown, fully gone
        } else if (i === activeIndex) {
          e = exitT;
          pointerEvents = "auto";
        }
        // Waiting cards (i > activeIndex) get no offset at all — every card sits
        // in exactly the same spot, stacked directly underneath, only revealed
        // once everything in front of it has been thrown away.

        const throwY = e * THROW_VH;
        const throwX = e * 6;
        const rotate = e * -12;
        const scale = 1 - e * 0.06;
        const fade = Math.max(0, (e - 0.55) / 0.45);
        const opacity = i < activeIndex ? 0 : 1 - fade;

        el.style.transform = `translate(-50%, calc(-50% - ${throwY}vh)) translateX(${throwX}vw) rotate(${rotate}deg) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${total - i}`;
        el.style.pointerEvents = pointerEvents;
      });
    };

    const onScroll = () => {
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [total]);

  return (
    <>
      <div
        ref={trackRef}
        className="motion-reduce:hidden relative"
        style={{ height: `calc(100vh + ${total * CARD_SCROLL_VH}vh)` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex items-center pt-24">
          <div className="container mx-auto px-6 relative h-0">
            {services.map((s, index) => (
              <div
                key={s.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="absolute left-1/2 top-1/2 w-[calc(100%-3rem)] max-w-4xl h-[440px] sm:h-[480px] lg:h-[440px] overflow-y-auto rounded-2xl sm:rounded-3xl border border-border bg-card p-5 sm:p-8 lg:p-10 shadow-professional-xl"
                style={{ willChange: "transform, opacity" }}
              >
                <CardBody service={s} index={index} total={total} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reduced-motion fallback — a plain stacked list, no scroll-jacked throw */}
      <div className="hidden motion-reduce:block space-y-6 mb-24">
        {services.map((s, index) => (
          <div
            key={s.title}
            className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-professional-xl"
          >
            <CardBody service={s} index={index} total={total} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesDeck;
