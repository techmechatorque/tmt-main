import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FadeInView } from "@/components/FadeInView";
import { lifecycle } from "@/data/services";
import ServicesDeck from "@/components/services/ServicesDeck";
import { usePageMeta } from "@/hooks/use-page-meta";

const Services = () => {
  usePageMeta({
    title: "Services",
    description: "Software development, digital transformation, and market support from TechMecha Torque.",
    path: "/services",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <FadeInView className="max-w-3xl mb-10 sm:mb-16">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Our services
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              Software built and supported end to end.
            </p>
          </FadeInView>
        </div>

        {/* Scroll-jacked card deck — see ServicesDeck for the throw-off-window
            mechanics. Full width / outside the padded container since it manages
            its own centering via a pinned, viewport-height sticky panel. */}
        <ServicesDeck />

        <div className="container mx-auto px-6">
          <FadeInView as="h2" className="text-xl sm:text-3xl font-bold mb-6 sm:mb-10 text-foreground text-center block">
            How the work actually runs
          </FadeInView>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {lifecycle.map((stage, index) => (
              <FadeInView key={stage.step} delay={index * 100} className="flex gap-3 sm:gap-4">
                <span className="text-xl sm:text-3xl font-bold text-primary/40 flex-shrink-0">{stage.step}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">{stage.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stage.description}</p>
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
