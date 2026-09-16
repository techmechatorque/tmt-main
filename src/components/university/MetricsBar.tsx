import { FadeInView } from "@/components/FadeInView";
import { impactMetrics } from "@/data/university";

const MetricsBar = () => {
  return (
    <section id="ecosystem" className="relative py-20 border-y border-red-500/[0.12] bg-white/[0.02] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
          {impactMetrics.map((metric, index) => (
            <FadeInView key={metric.label} delay={index * 120}>
              <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-white/60 font-medium">{metric.label}</div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
