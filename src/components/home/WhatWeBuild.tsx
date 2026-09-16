import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductGrid from "@/components/product/ProductGrid";
import { FadeInView } from "@/components/FadeInView";

const WhatWeBuild = () => {
  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-6">
        <FadeInView className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              What we build
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sorted honestly: what's live, what's being built, what's planned.
            </p>
          </div>
          <Link to="/products" className="inline-flex items-center gap-2 text-primary font-semibold flex-shrink-0">
            All products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeInView>

        <ProductGrid />
      </div>
    </section>
  );
};

export default WhatWeBuild;
