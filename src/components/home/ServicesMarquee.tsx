import { services } from "@/data/services";

// A continuously-scrolling row of our services — icon + label, looping seamlessly.
// The list is rendered twice back to back; animating the wrapper left by exactly
// -50% loops it invisibly, since the second copy picks up exactly where the first
// left off. Pausable on hover so it doesn't fight anyone trying to read it.
const ServicesMarquee = () => {
  return (
    <div className="py-8 border-y border-border overflow-hidden">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center flex-shrink-0" aria-hidden={copy === 1}>
            {services.map((s) => (
              <div key={s.title} className="flex items-center gap-3 px-10">
                <s.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-2xl sm:text-3xl font-bold text-foreground whitespace-nowrap">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesMarquee;
