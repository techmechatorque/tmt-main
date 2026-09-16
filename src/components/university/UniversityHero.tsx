import { ArrowRight, Compass } from "lucide-react";

const scrollToAnchor = (href: string) => {
  const el = document.querySelector(href);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const UniversityHero = () => {
  return (
    <section className="relative pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
      {/* Ambient crimson glow, layered on top of the global flow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-800/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="motion-reduce:animate-none animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-white/5 backdrop-blur-md px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-white/80">
            Digital Transformation for Higher Education
          </span>
        </div>

        <h1 className="motion-reduce:animate-none animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white max-w-5xl mx-auto mb-6">
          ENGINEERING THE FUTURE OF HIGHER EDUCATION.
        </h1>

        <p className="motion-reduce:animate-none animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Production-ready digital platforms that transform universities into connected ecosystems.
        </p>

        <div className="motion-reduce:animate-none animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToAnchor("#contact")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-base px-8 py-3.5 rounded-full shadow-[0_0_30px_-6px_rgba(220,38,38,0.8)] hover:shadow-[0_0_42px_-4px_rgba(220,38,38,1)] hover:scale-105 transition-all duration-300"
          >
            Prebook Now
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToAnchor("#solutions")}
            className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-red-500/20 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300"
          >
            <Compass className="w-4 h-4" />
            Explore Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversityHero;
