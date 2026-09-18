import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { learningSpacesHeroSlides } from "@/data/screenshots";
import { company } from "@/data/company";

const SLIDE_INTERVAL_MS = 3200;

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Hero = () => {
  const learningSpaces = products.find((p) => p.slug === "learning-spaces");

  // Cycles through the extra Learning Spaces captures on the desktop hero,
  // each one sliding in from the right (1s) before the next dwell begins.
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    if (learningSpacesHeroSlides.length <= 1 || prefersReducedMotion()) return;
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % learningSpacesHeroSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex items-center min-h-[640px] sm:min-h-[700px] lg:min-h-[880px] pt-28 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          {/* Copy — staged entrance: badge, headline, subtext, CTAs each land in turn.
              Mount-triggered (not scroll-triggered) since the hero is always above the
              fold. motion-reduce: strips it for users who've asked for less motion. */}
          <div className="text-center lg:text-left">
            

            <h1 className="motion-reduce:animate-none animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 fill-mode-both text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-foreground">
              We build software.
              <br />
              We ship real products.
            </h1>

            <p className="motion-reduce:animate-none animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
              TechMecha Torque builds digital platforms end to end — from concept and
              development to deployment. Explore our live products and see what we've built.
            </p>

            <div className="motion-reduce:animate-none animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                See what we build
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={company.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/5 border border-white/15 text-foreground font-semibold text-base px-7 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Talk to us
              </a>
            </div>
          </div>

          {/* Product visual — the actual live product, not a decorative graphic */}
          {learningSpaces && (
            <div className="motion-reduce:animate-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl -z-10" />
              {/* Accent shape peeking from behind the frame's cut corner — echoes the
                  frame's own notch so the two read as one deliberate silhouette. */}
              <div
                className="absolute -top-5 -left-5 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-primary to-accent -z-10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)" }}
              />
              <div className="relative">
              {learningSpacesHeroSlides.length > 0 ? (
                <div
                  className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b0d12]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 48px), calc(100% - 48px) 100%, 0 100%)" }}
                >
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="ml-3 text-[11px] text-white/40 font-mono truncate">learningspaces.co.in</span>
                  </div>
                  <div className="relative w-full aspect-[11/5] overflow-hidden">
                    {learningSpacesHeroSlides.map((slide, i) => {
                      const count = learningSpacesHeroSlides.length;
                      // Shortest circular distance from the active slide — without this,
                      // wrapping from the last slide back to the first (or stepping
                      // backward past the first) would slide the whole width of the
                      // strip instead of sliding in from the adjacent side.
                      const raw = (i - activeSlide + count) % count;
                      const signedOffset = raw > count / 2 ? raw - count : raw;
                      // With an even slide count, the slide sitting exactly opposite the
                      // active one has no single "shortest side" — its shortest-path sign
                      // flips between transitions, which would otherwise fly it visibly
                      // across the whole strip. It's always off past the immediate
                      // neighbors anyway, so just keep anything beyond ±1 invisible.
                      const isNear = Math.abs(signedOffset) <= 1;
                      return (
                        <img
                          key={slide.path}
                          src={slide.path}
                          alt={slide.alt}
                          className="absolute inset-0 w-full h-full object-contain"
                          style={{
                            transform: `translateX(${signedOffset * 100}%)`,
                            opacity: isNear ? 1 : 0,
                            transition: "transform 1000ms cubic-bezier(0.65,0,0.35,1), opacity 1000ms cubic-bezier(0.65,0,0.35,1)",
                          }}
                          loading="eager"
                          decoding="async"
                        />
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center text-muted-foreground text-sm">
                  Screenshot pending
                </div>
              )}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-background border border-border rounded-xl px-4 py-2.5 shadow-xl flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">{learningSpaces.name}</span>
              </div>
              <a
                href={learningSpaces.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-4 -right-2 sm:-right-4 bg-background border border-border rounded-full p-3 shadow-xl hover:scale-110 transition-transform"
                aria-label={`Open ${learningSpaces.name}`}
              >
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </a>
              </div>

              {/* Slide bars — show which capture is active and, since they jump straight
                  to that index, make the current direction/position obvious at a glance. */}
              {learningSpacesHeroSlides.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 mt-8">
                  {learningSpacesHeroSlides.map((slide, i) => (
                    <button
                      key={slide.path}
                      type="button"
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Show slide ${i + 1}`}
                      aria-current={i === activeSlide}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeSlide ? "w-8 bg-primary" : "w-3 bg-foreground/15 hover:bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
