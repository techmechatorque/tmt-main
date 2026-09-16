import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { services } from "@/data/services";

const SIDES = services.length; // 7 — a heptagon, one side per service
// Percent-of-radius distance from the shape's center at which each vertex sits — used
// for the polygon corners and the label boxes, so both align.
const VERTEX_RADIUS = 47;
const ROTATION_SPEED = 6; // degrees/sec while idle
const ROTATION_EASE = 3; // how quickly speed lerps toward its target (higher = snappier)

const vertexAt = (index: number, radius: number) => {
  const angle = (index / SIDES) * 2 * Math.PI - Math.PI / 2;
  return { x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
};

// Regular heptagon, one vertex pointing straight up, as SVG polygon points in a
// 0-100 viewBox — an <svg><polygon> renders a real fill + stroke, which a CSS
// clip-path shape can't (a clip-path only cuts the box, it can't outline the cut).
const heptagonPoints = Array.from({ length: SIDES }, (_, i) => {
  const { x, y } = vertexAt(i, VERTEX_RADIUS);
  return `${x},${y}`;
}).join(" ");

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const WhatWeDo = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const rotatorRef = useRef<HTMLDivElement>(null);
  const markerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let angle = 0;
    let velocity = 0;
    let lastTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const target = isHoveredRef.current ? 0 : ROTATION_SPEED;
      velocity += (target - velocity) * Math.min(1, ROTATION_EASE * dt);
      angle = (angle + velocity * dt) % 360;

      if (rotatorRef.current) rotatorRef.current.style.transform = `rotate(${angle}deg)`;
      // Counter-rotate each marker so its own box/label stays upright while it orbits.
      markerRefs.current.forEach((el) => {
        if (el) el.style.transform = `translate(-50%, -50%) rotate(${-angle}deg)`;
      });

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Heading heptagon — 7 sides for 7 services, with a labeled box per service
              at each corner, slowly rotating clockwise. Hovering the shape eases the
              rotation to a stop; moving off eases it back up. Clicking (or hovering,
              on the list to the right) opens the matching item. */}
          <FadeInView className="flex justify-center">
            <div
              className="relative w-full max-w-[400px] aspect-square"
              onMouseEnter={() => (isHoveredRef.current = true)}
              onMouseLeave={() => (isHoveredRef.current = false)}
            >
              {/* Soft ambient glow behind the outline — symmetric, doesn't need to rotate */}
              <div className="absolute inset-6 rounded-full bg-primary/10 blur-3xl" />

              {/* Everything that spins together: the shape + the marker boxes */}
              <div ref={rotatorRef} className="absolute inset-0">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="heptagon-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points={heptagonPoints}
                    fill="url(#heptagon-fill)"
                    stroke="hsl(var(--primary))"
                    strokeOpacity="0.3"
                    strokeWidth="0.6"
                    strokeLinejoin="round"
                  />
                </svg>

                {services.map((s, index) => {
                  const { x, y } = vertexAt(index, VERTEX_RADIUS);
                  const isActive = openIndex === index;
                  return (
                    <button
                      key={s.title}
                      ref={(el) => (markerRefs.current[index] = el)}
                      onClick={() => setOpenIndex(isActive ? -1 : index)}
                      onMouseEnter={() => setOpenIndex(index)}
                      className={`absolute flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border whitespace-nowrap transition-colors duration-300 ${
                        isActive
                          ? "bg-primary/15 border-primary text-primary"
                          : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                    >
                      <s.icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="text-xs font-semibold">{s.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Center text — stays upright, not part of the rotating group */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 sm:px-12 pointer-events-none">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">What we do</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  TechMecha Torque builds digital platforms end to end — from first design
                  through to a product people actually use.
                </p>
              </div>
            </div>
          </FadeInView>

          {/* List — the header (title) sits above each divider line from the start;
              its icon and description stay hidden until you hover (or tap, on touch)
              that row, then fade/expand in. The matching box on the heptagon
              highlights too. Moving off the whole list collapses everything back down. */}
          <div className="flex flex-col" onMouseLeave={() => setOpenIndex(-1)}>
            {services.map((s, index) => {
              const isOpen = openIndex === index;
              return (
                <FadeInView key={s.title} delay={index * 40}>
                  <div className="border-b border-border">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      onMouseEnter={() => setOpenIndex(index)}
                      className="w-full flex items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                      aria-label={s.title}
                    >
                      <div
                        className={`flex items-center gap-4 transition-transform duration-300 ${
                          isOpen ? "translate-x-2" : ""
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-opacity duration-300 ${
                            isOpen ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <s.icon className="w-4 h-4 text-primary" />
                        </div>
                        {/* The header stays visible even before hover — only the icon,
                            chevron, and description reveal on hover/click. */}
                        <span className="font-semibold text-foreground">{s.title}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-primary flex-shrink-0 transition-all duration-300 ${
                          isOpen ? "opacity-100 rotate-180" : "opacity-0"
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm text-muted-foreground leading-relaxed pb-4 pl-[3.25rem]">
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
