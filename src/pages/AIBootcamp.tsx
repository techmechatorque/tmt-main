import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, Calendar, ClipboardList } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { usePageMeta } from "@/hooks/use-page-meta";

const AIBootcamp = () => {
  usePageMeta({
    title: "Bootcamps",
    description: "Intensive, hands-on bootcamps from TechMecha Torque — currently in planning.",
    path: "/training/bootcamps",
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow pt-28 pb-16 px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
        </div>

        <FadeInView className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-bold text-xs sm:text-sm tracking-wider mb-5 sm:mb-8">
            <Sparkles className="w-4 h-4" />
            PLANNED
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 text-foreground leading-tight tracking-tighter">
            BOOTCAMPS
            <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">IN PLANNING</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Intensive, hands-on learning experiences — scoped, not yet built.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="card-professional flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <div className="text-left">
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Expected Launch</p>
                <p className="text-sm sm:text-base font-bold text-foreground">TBA</p>
              </div>
            </div>

            <div className="card-professional flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4">
              <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <div className="text-left">
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">Status</p>
                <p className="text-sm sm:text-base font-bold text-foreground">Planned</p>
              </div>
            </div>
          </div>
        </FadeInView>
      </main>

      <Footer />
    </div>
  );
};

export default AIBootcamp;
