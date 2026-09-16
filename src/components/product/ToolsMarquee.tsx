import { techStack } from "@/data/techStack";

// The same tool list as the "Tools chosen for the work" section below, but as a
// continuously-scrolling row — moving left to right (reverse of the services
// marquee) so the two don't read as identical motion. Duplicated once so
// animating the wrapper back to 0% loops it seamlessly.
const ToolsMarquee = () => {
  return (
    <div className="py-8 border-y border-border overflow-hidden">
      <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center flex-shrink-0" aria-hidden={copy === 1}>
            {techStack.map((t) => (
              <div key={t.name} className="flex items-center gap-3 px-8">
                <t.icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-xl sm:text-2xl font-bold text-foreground whitespace-nowrap">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsMarquee;
