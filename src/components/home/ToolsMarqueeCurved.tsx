import { techStack } from "@/data/techStack";

const ITEMS = techStack.length;

// Same tool list and scroll mechanics as the Products page's straight marquee,
// but each item rides an arc instead of a flat line — a sine hump computed per
// item position within one repeating set, so the wave loops seamlessly with
// the horizontal scroll instead of jumping at the seam.
const ToolsMarqueeCurved = () => {
  return (
    <div className="relative h-44 overflow-hidden">
      <div className="relative flex h-full w-max items-center animate-marquee-reverse hover:[animation-play-state:paused]">
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
