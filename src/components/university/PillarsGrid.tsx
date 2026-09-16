import { FadeInView } from "@/components/FadeInView";
import { pillars } from "@/data/university";

const PillarsGrid = () => {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <FadeInView className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Pillars</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Three connected systems, one campus-wide platform.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <FadeInView
              key={pillar.title}
              delay={index * 120}
              className="group rounded-2xl border border-red-500/[0.15] bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/40 hover:shadow-[0_0_40px_-8px_rgba(220,38,38,0.5)]"
            >
              <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                <pillar.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6">{pillar.description}</p>
              <ul className="space-y-2.5 pt-5 border-t border-white/10">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsGrid;
