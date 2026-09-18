import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScreenshotPanel from "@/components/showcase/ScreenshotPanel";
import { FadeInView } from "@/components/FadeInView";
import { workItems } from "@/data/work";
import { usePageMeta } from "@/hooks/use-page-meta";

const WorkDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = workItems.find((w) => w.slug === slug);

  usePageMeta({
    title: item?.title ?? "Work",
    description: item?.summary ?? "",
    path: `/work/${slug ?? ""}`,
  });

  if (!item) return <Navigate to="/work" replace />;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 group font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All work
          </Link>

          <FadeInView>
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-primary">{item.client}</span>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mt-2 mb-4 sm:mb-6 text-foreground">{item.title}</h1>
            </div>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-10 sm:mb-16">{item.summary}</p>
          </FadeInView>

          <ScreenshotPanel slug={item.slug} liveUrl={item.liveUrl} />

          <FadeInView as="h2" className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground block">
            Scope
          </FadeInView>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {item.scope.map((s, index) => (
              <FadeInView key={s} as="li" delay={index * 100} className="card-professional p-3 sm:p-4 text-center text-sm sm:text-base font-medium text-foreground/90">
                {s}
              </FadeInView>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkDetail;
