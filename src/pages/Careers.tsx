import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowLeft,
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
        <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold group mb-8"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="text-center max-w-4xl mx-auto">
              <FadeInView delay={100}>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/90 to-accent backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-8">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white">
                    We&apos;re Hiring!
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
                  Join the Future of EdTech
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-12">
                  Launch your career with TechMecha Torque. Gain hands-on experience
                  building a real, live product from a small team.
                </p>
              </FadeInView>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {benefits.map((b, index) => (
                  <FadeInView key={b.label} delay={200 + index * 100} className="card-professional">
                    <b.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm font-semibold text-foreground">{b.label}</p>
                  </FadeInView>
                ))}
              </div>

              <FadeInView delay={200 + benefits.length * 100} className="mt-8">
                <Link to="/">
                  <Button className="btn-primary-glow text-lg px-8 py-6 rounded-full">
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
