import { Link } from "react-router-dom";
import { ArrowRight, ImageOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { workItems } from "@/data/work";
import { screenshotFor } from "@/data/screenshots";
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
          <FadeInView className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Delivery evidence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real client work, currently live.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {workItems.map((item, index) => {
              const shot = screenshotFor(item.slug);
              return (
                <FadeInView key={item.slug} delay={index * 100}>
                  <Link
                    to={`/work/${item.slug}`}
                    className="card-professional group flex flex-col p-0 overflow-hidden h-full"
                  >
                    <div className="aspect-video bg-black/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {shot ? (
                        <img
                          src={shot.path}
                          alt={shot.alt}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <ImageOff className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <span className="text-sm font-bold uppercase tracking-wide text-primary mb-2">
                        {item.client}
                      </span>
                      <h2 className="text-2xl font-bold text-foreground mb-3">{item.title}</h2>
                      <p className="text-muted-foreground leading-relaxed flex-grow mb-6">{item.summary}</p>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                        Case study
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
