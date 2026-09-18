import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Briefcase,
  Users,
  Heart,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInView } from "@/components/FadeInView";
import { usePageMeta } from "@/hooks/use-page-meta";

const benefits = [
  { icon: Briefcase, label: "Real Projects" },
  { icon: Users, label: "Expert Mentorship" },
  { icon: TrendingUp, label: "Career Growth" },
  { icon: Heart, label: "Flexible Hours" },
];

const Careers = () => {
  usePageMeta({
    title: "Careers",
    description: "Careers at TechMecha Torque.",
    path: "/careers",
  });

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="relative py-16 sm:py-24 lg:py-32 bg-background overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <FadeInView delay={100}>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/90 to-accent backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/30 mb-5 sm:mb-8">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    We&apos;re Hiring!
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 text-foreground leading-tight">
                  Join the Future of EdTech
                </h1>
                <p className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-8 sm:mb-12">
                  Launch your career with TechMecha Torque. Gain hands-on experience
                  building a real, live product from a small team.
                </p>
              </FadeInView>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
                {benefits.map((b, index) => (
                  <FadeInView key={b.label} delay={200 + index * 100} className="card-professional">
                    <b.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                    <p className="text-xs sm:text-sm font-semibold text-foreground">{b.label}</p>
                  </FadeInView>
                ))}
              </div>

              <FadeInView delay={200 + benefits.length * 100} className="mt-8">
                <Link to="/">
                  <Button className="btn-primary-glow text-sm sm:text-lg px-5 sm:px-8 py-4 sm:py-6 rounded-full">
                    No active programs currently
                  </Button>
                </Link>
              </FadeInView>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
