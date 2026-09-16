import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInView } from "@/components/FadeInView";
import { services, lifecycle, beyondLaunchDetails } from "@/data/services";
import { usePageMeta } from "@/hooks/use-page-meta";

// "What you get" per service — broken out from each service's own description
// above (data/services.ts), not new claims, just the same scope spelled out as
// four points instead of one sentence.
const WHAT_YOU_GET: Record<string, string[]> = {
  "Software Development": [
    "Product design & UX",
    "Full-stack development",
    "Deployment & hosting setup",
    "Ongoing maintenance",
  ],
  "Digital Transformation": [
    "Process audit & mapping",
    "Digital workflow design",
    "Data migration",
    "Staff onboarding & training",
  ],
  "Beyond Launch": [
    "Ongoing support & fixes",
    "Iteration as users adopt it",
    "Market support",
    "Direct access to the team",
  ],
  "Website Design & Development": [
    "Custom design, no templates",
    "Mobile-responsive build",
    "Menu, gallery & booking pages",
    "Delivered and live, not a mockup",
  ],
  "Landing Pages": [
    "Single-page, fast-loading build",
    "SEO optimization",
    "Google Business Profile setup",
    "Mobile-first design",
  ],
  "E-Commerce Solutions": [
    "Product catalog & listings",
    "Secure checkout & payments",
    "Order & inventory management",
    "Storefront design",
  ],
  "Training & Certification": [
    "Structured C/C++/Java/Python curriculum",
    "Delivered via Learning Spaces",
    "Hands-on coding practice",
    "Certificate on completion",
  ],
};

const Services = () => {
  usePageMeta({
    title: "Services",
    description: "Software development, digital transformation, and market support from TechMecha Torque.",
    path: "/services",
  });

  const total = services.length;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <FadeInView className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              What we do
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Software built and supported end to end.
            </p>
          </FadeInView>

          {/* Sticky-stacking cards: each service is a full rounded panel that sticks in
              place as you scroll, and the next one slides up to cover it — same scroll
              interaction as a card deck, no colors changed, just the site's own red/black
              palette on each panel. Pure CSS (position: sticky + increasing z-index per
              panel), no JS scroll listeners. */}
          <div className="relative mb-24">
            {services.map((s, index) => {
              const label = String(index + 1).padStart(2, "0");
              const isBeyondLaunch = s.title === "Beyond Launch";
              return (
                <div key={s.title} className="sticky top-24" style={{ zIndex: index + 1 }}>
                  <FadeInView className="rounded-3xl border border-border bg-card p-8 sm:p-10 min-h-[420px] sm:min-h-[380px] shadow-professional-xl mb-4">
                    <div className="flex items-center justify-between pb-4 mb-8 border-b border-border">
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {label} / {String(total).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Service
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
                      <div>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                          <s.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground uppercase tracking-tight">
                          {s.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-lg">
                          {s.description}
                        </p>

                        {isBeyondLaunch && (
                          <ul className="space-y-4 mb-8">
                            {beyondLaunchDetails.map((d) => (
                              <li key={d.title} className="flex items-start gap-3">
                                <d.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                  <div className="text-sm font-semibold text-foreground">{d.title}</div>
                                  <div className="text-xs text-muted-foreground">{d.description}</div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}

                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          Talk to us about this
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="hidden lg:block border-l border-border pl-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-4">
                          What you get
                        </span>
                        <ul>
                          {WHAT_YOU_GET[s.title]?.map((point, i) => (
                            <li
                              key={point}
                              className="flex items-baseline gap-4 py-3 border-b border-border last:border-0"
                            >
                              <span className="text-xs font-bold text-primary/60 flex-shrink-0">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="text-sm text-foreground/80">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeInView>
                </div>
              );
            })}
          </div>

          <FadeInView as="h2" className="text-3xl font-bold mb-10 text-foreground text-center block">
            How we build
          </FadeInView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {lifecycle.map((stage, index) => (
              <FadeInView key={stage.step} delay={index * 100} className="flex gap-4">
                <span className="text-3xl font-bold text-primary/40 flex-shrink-0">{stage.step}</span>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{stage.title}</h3>
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
