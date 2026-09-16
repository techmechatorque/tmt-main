import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import BrowserFrame from "@/components/showcase/BrowserFrame";
import { products } from "@/data/products";
import { screenshotFor } from "@/data/screenshots";
import { company } from "@/data/company";

const Hero = () => {
  const learningSpaces = products.find((p) => p.slug === "learning-spaces");
  const shot = learningSpaces ? screenshotFor(learningSpaces.slug) : undefined;

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
              {shot ? (
                <BrowserFrame url="learningspaces.co.in" src={shot.path} alt={shot.alt} notch />
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
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
