import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkCarousel from "@/components/work/WorkCarousel";
import { FadeInView } from "@/components/FadeInView";
import { usePageMeta } from "@/hooks/use-page-meta";

const Work = () => {
  usePageMeta({
    title: "Work",
    description: "Delivered client work from TechMecha Torque.",
    path: "/work",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <FadeInView className="max-w-3xl mb-10 sm:mb-16">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Delivery evidence
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              Real client work, currently live.
            </p>
          </FadeInView>
        </div>

        <FadeInView>
          <WorkCarousel />
        </FadeInView>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
