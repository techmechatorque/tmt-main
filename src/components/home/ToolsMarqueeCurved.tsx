import { techStack } from "@/data/techStack";

const ITEMS = techStack.length;
const PERIODS = 2; // one hump per duplicated set — stays in sync with the loop

// Samples a smooth sine wave into an SVG polyline path across a 0-100 viewBox,
// so it can be stretched (preserveAspectRatio="none") to exactly match the
// scrolling track's own width and height — same curve, same box, same motion.
const wavePath = (amplitude: number, baseline: number, phase = 0, steps = 120) => {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 100;
    const y = baseline - amplitude * Math.sin((i / steps) * PERIODS * 2 * Math.PI + phase);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)} `;
  }
  return d.trim();
};

const TOP_RAIL = wavePath(10, 16);
const BOTTOM_RAIL = wavePath(10, 84);

// Same tool list and scroll mechanics as the Products page's straight marquee,
// but everything rides a curve instead of a flat line — the pills bob on a
// sine hump per repeating set, and the top/bottom rails bend through the exact
// same wave, both living inside the same scrolling track so they move as one
// piece instead of pills wobbling between two straight lines.
const ToolsMarqueeCurved = () => {
  return (
    <div className="relative h-44 overflow-x-hidden">
      <div className="relative flex h-full w-max items-center animate-marquee-reverse hover:[animation-play-state:paused]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={TOP_RAIL} stroke="hsl(var(--border))" strokeWidth={1.5} fill="none" vectorEffect="non-scaling-stroke" />
          <path d={BOTTOM_RAIL} stroke="hsl(var(--border))" strokeWidth={1.5} fill="none" vectorEffect="non-scaling-stroke" />
        </svg>

        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center flex-shrink-0" aria-hidden={copy === 1}>
            {techStack.map((t, i) => {
              const progress = i / (ITEMS - 1);
              const arc = Math.sin(progress * Math.PI);
              const translateY = -arc * 28;
              const rotate = (progress - 0.5) * -16;
              const scale = 1 + arc * 0.1;

              return (
                <div
                  key={t.name}
                  className="px-3"
                  style={{ transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})` }}
                >
                  <div className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 shadow-professional whitespace-nowrap">
                    <t.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-bold text-foreground whitespace-nowrap">{t.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsMarqueeCurved;
