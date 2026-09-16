import { FadeInView } from "@/components/FadeInView";
import { methodologySteps } from "@/data/university";

const Methodology = () => {
  return (
    <section id="vision" className="relative py-24 lg:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <FadeInView className="max-w-2xl mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            A staged rollout, not a big-bang migration.
          </p>
        </FadeInView>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Connecting line across the row, desktop only */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-red-600/0 via-red-600/40 to-red-600/0" />

          {methodologySteps.map((step, index) => (
            <FadeInView key={step.title} delay={index * 120} className="relative text-center lg:text-left">
              <div className="relative z-10 w-14 h-14 rounded-full bg-black border-2 border-red-500/40 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                <step.icon className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-xs font-bold text-red-500/70 tracking-widest mb-1">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
