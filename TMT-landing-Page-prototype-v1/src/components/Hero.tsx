import { TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 dark:bg-primary/8 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating accent icons */}
      <div className="absolute top-32 left-12 opacity-20 dark:opacity-30 hidden md:block">
        <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-lg border border-slate-200 dark:border-white/10 flex items-center justify-center backdrop-blur-sm">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div className="absolute top-48 right-16 opacity-20 dark:opacity-30 hidden md:block">
        <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 shadow-lg border border-slate-200 dark:border-white/10 flex items-center justify-center backdrop-blur-sm">
          <Shield className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-24 opacity-20 dark:opacity-30 hidden md:block">
        <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 shadow-lg border border-slate-200 dark:border-white/10 flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-5 py-2 mb-8 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Transforming Higher Education
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight">
            <span className="block text-foreground">TechMecha</span>
            <span className="text-gradient block">Torque</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Comprehensive digital transformation platform designed specifically for universities.
            Streamline operations, enhance learning experiences, and modernize your institution
            with our integrated suite of advanced tools.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/7993442607?text=Hi%20I'm%20interested%20in%20TechMecha%20Torque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,0,0,0.25)] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] hover:-translate-y-0.5">
                Prebook Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <Link to="/vision">
              <button className="inline-flex items-center gap-2 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-foreground font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:-translate-y-0.5">
                Our Vision
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;