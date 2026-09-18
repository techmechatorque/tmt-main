import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  const location = useLocation();

  usePageMeta({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
    path: location.pathname,
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 pt-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-gradient">404</h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-xl text-muted-foreground">This page doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all hover:-translate-y-0.5"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
