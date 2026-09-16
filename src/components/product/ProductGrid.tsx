import { sortedProducts } from "@/data/products";
import ProductCard from "./ProductCard";

// No FadeInView wrapper here — each ProductCard owns its own entrance animation
// (screenshot cards slide their two halves in from opposite sides; others fade
// up on their own). Wrapping it again here would nest IntersectionObservers and
// break that animation — see the comment in ProductCard.tsx.
const ProductGrid = () => {
  const live = sortedProducts.filter((p) => p.status === "LIVE" || p.status === "BUILDING");

  if (live.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      {live.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;
