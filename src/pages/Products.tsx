import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import TechStack from "@/components/product/TechStack";
import ToolsMarquee from "@/components/product/ToolsMarquee";
import { FadeInView } from "@/components/FadeInView";
import { usePageMeta } from "@/hooks/use-page-meta";

const Products = () => {
  usePageMeta({
    title: "Products",
    description:
      "The platforms TechMecha Torque builds — Learning Spaces is live today; the rest are in progress or planned.",
    path: "/products",
  });

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <ToolsMarquee />
        <div className="container mx-auto px-6">
          <FadeInView className="max-w-3xl mb-10 sm:mb-16 mt-10 sm:mt-16">
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Built Today, Shaping Tomorrow
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
              One platform is live and in use today. The rest are honestly labelled by
              status — nothing here claims to be more finished than it is.
            </p>
          </FadeInView>

          <ProductGrid />
          <TechStack />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
