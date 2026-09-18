import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatusBadge from "@/components/product/StatusBadge";
import ScreenshotPanel from "@/components/showcase/ScreenshotPanel";
import { FadeInView } from "@/components/FadeInView";
import { productBySlug } from "@/data/products";
import { usePageMeta } from "@/hooks/use-page-meta";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productBySlug(slug) : undefined;
  const isViewable = !!product && (product.status === "LIVE" || product.status === "BUILDING");

  usePageMeta({
    title: product?.name ?? "Product",
    description: product?.description ?? "",
    path: `/products/${slug ?? ""}`,
  });

  // Detail-page rule (rebuild plan §3): only LIVE/BUILDING products get a page.
  // Unknown slugs and PLANNED products redirect to the index rather than 404 or
  // render a thin, padded-out page.
  if (!isViewable || !product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 group font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All products
          </Link>

          <FadeInView>
            <div className="flex items-center gap-3 mb-4">
              <StatusBadge status={product.status} />
              <span className="text-sm text-muted-foreground">{product.category}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 text-foreground">{product.name}</h1>
            <p className="text-base sm:text-xl text-primary font-semibold mb-4 sm:mb-6">{product.tagline}</p>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6 sm:mb-10">
              {product.description}
            </p>

            {product.liveUrl && (
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5 mb-10 sm:mb-16"
              >
                Open {product.name}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </FadeInView>

          <ScreenshotPanel slug={product.slug} liveUrl={product.liveUrl} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
            {product.howItWorks && (
              <div>
                <FadeInView as="h2" className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground block">
                  How it works
                </FadeInView>
                <ol className="space-y-3 sm:space-y-4">
                  {product.howItWorks.map((step, index) => (
                    <FadeInView key={step} as="li" delay={index * 75} className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base text-foreground/90">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      {step}
                    </FadeInView>
                  ))}
                </ol>
              </div>
            )}

            {product.features && (
              <div>
                <FadeInView as="h2" className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground block">
                  What it does
                </FadeInView>
                <ul className="space-y-3 sm:space-y-4">
                  {product.features.map((f, index) => (
                    <FadeInView key={f} as="li" delay={index * 75} className="flex items-start gap-3 text-sm sm:text-base text-foreground/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      {f}
                    </FadeInView>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
