import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { screenshotFor } from "@/data/screenshots";
import { FadeInView } from "@/components/FadeInView";
import StatusBadge from "./StatusBadge";

const ProductCard = ({ product }: { product: Product }) => {
  const hasDetailPage = product.status === "LIVE" || product.status === "BUILDING";
  const Icon = product.icon;

  // PLANNED products get a compact row, not a full card — no detail page,
  // no invented feature list. See rebuild plan §3 detail-page rule.
  if (product.status === "PLANNED") {
    return (
      <div className="flex items-center justify-between gap-4 py-4 border-b border-border last:border-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-muted-foreground" />
          </div>
          <div>
            <div className="font-semibold text-foreground">{product.name}</div>
            <div className="text-sm text-muted-foreground">{product.tagline}</div>
          </div>
        </div>
        <StatusBadge status={product.status} />
      </div>
    );
  }

  // LIVE gets the large treatment; BUILDING gets the same shape at a smaller scale.
  const isLive = product.status === "LIVE";
  const screenshot = isLive ? screenshotFor(product.slug) : undefined;

  const cardContent = (
    <div
      className={`card-professional group h-full flex flex-col overflow-hidden ${
        screenshot ? "p-0" : isLive ? "p-8 md:p-10" : "p-6"
      }`}
    >
      {screenshot ? (
        // Photo on the left, details on the right, each sliding in from its own
        // side as the card scrolls into view — stacks on narrow screens since a
        // card this width can't fit both columns comfortably below sm. Columns are
        // matched ~50/50 so neither side dominates. object-contain (not cover):
        // these are wide dashboard/landscape screenshots, and cropping one into a
        // tall narrow strip just shows a meaningless slice of the middle.
        <div className="flex flex-col sm:flex-row sm:items-stretch h-full">
          <FadeInView
            direction="left"
            className="relative sm:w-1/2 flex-shrink-0 border-b sm:border-b-0 sm:border-r border-border bg-black/30 p-4 flex items-center justify-center"
          >
            <img
              src={screenshot.path}
              alt={screenshot.alt}
              className="w-full h-auto object-contain rounded-md shadow-lg group-hover:scale-[1.03] transition-transform duration-500"
              loading="lazy"
            />
          </FadeInView>

          <FadeInView direction="right" delay={120} className="sm:w-1/2 p-5 sm:p-6 flex flex-col flex-grow">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-bold text-foreground text-xl">{product.name}</h3>
              <StatusBadge status={product.status} />
            </div>
            <p className="text-sm font-semibold text-primary mb-2">{product.tagline}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{product.description}</p>

            {product.features && (
              <ul className="space-y-2 mb-5">
                {product.features.slice(0, 4).map((f) => (
                  <li key={f} className="text-sm text-foreground/80 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto">
              See details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </FadeInView>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div
              className={`rounded-xl bg-primary/10 flex items-center justify-center ${
                isLive ? "w-16 h-16" : "w-12 h-12"
              }`}
            >
              <Icon className={isLive ? "w-8 h-8 text-primary" : "w-6 h-6 text-primary"} />
            </div>
            <StatusBadge status={product.status} />
          </div>

          <h3 className={`font-bold text-foreground mb-2 ${isLive ? "text-2xl" : "text-xl"}`}>
            {product.name}
          </h3>
          <p className="text-sm font-semibold text-primary mb-3">{product.tagline}</p>
          <p className="text-muted-foreground leading-relaxed flex-grow mb-6">{product.description}</p>

          <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto">
            {hasDetailPage ? "See details" : "Learn more"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </>
      )}
    </div>
  );

  const wrapped = hasDetailPage ? (
    <Link to={`/products/${product.slug}`} className="block h-full">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );

  // Screenshot cards already animate themselves — their image/text columns slide
  // in from opposite sides. Wrapping that in another FadeInView here would nest
  // two IntersectionObservers, and the inner ones (still geometrically
  // "intersecting" even while hidden behind the outer one's opacity-0) can
  // resolve before the outer wrapper ever reveals them, so the slide-in never
  // actually shows. Only add the plain up-fade for cards that don't already
  // animate their own contents.
  if (screenshot) {
    return wrapped;
  }

  return <FadeInView>{wrapped}</FadeInView>;
};

export default ProductCard;
