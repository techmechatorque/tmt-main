import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";
import Services from "./pages/Services";
import University from "./pages/University";
import Training from "./pages/Training";
import ContactPage from "./pages/ContactPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Auth from "./pages/Auth";
// import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import AIBootcamp from "./pages/AIBootcamp";
import Certifications from "./pages/Certifications";
import CourseCurriculum from "./pages/CourseCurriculum";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

// Client-side redirect for a moved course URL — preserves the :courseId param.
// This only fires for JS-executing visitors; the real HTTP 301 lives in nginx.conf.
const CourseRedirect = () => {
  const { courseId } = useParams<{ courseId: string }>();
  return <Navigate to={`/training/courses/${courseId ?? ""}`} replace />;
};

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="tmt-theme" attribute="class">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/admin" element={<Admin />} /> */}

          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />

          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />

          <Route path="/services" element={<Services />} />
          <Route path="/university" element={<University />} />

          <Route path="/training" element={<Training />} />
          <Route path="/training/bootcamps" element={<AIBootcamp />} />
          <Route path="/training/certifications" element={<Certifications />} />
          <Route path="/training/courses/:courseId" element={<CourseCurriculum />} />

          {/* Retired URLs — real 301s live in nginx.conf; these cover
              client-side navigation for anyone already on the page. */}
          <Route path="/vision" element={<Navigate to="/products" replace />} />
          <Route path="/founder" element={<Navigate to="/about" replace />} />
          <Route path="/certifications" element={<Navigate to="/training/certifications" replace />} />
          <Route path="/bootcamps" element={<Navigate to="/training/bootcamps" replace />} />
          <Route path="/course/:courseId" element={<CourseRedirect />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
