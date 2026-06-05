import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Founder from "./pages/Founder";
import Careers from "./pages/Careers";
import Vision from "./pages/Vision";
import Auth from "./pages/Auth";
// import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ParticleBackground from "./ParticleBackground";
// import Internships from "./pages/Internships";
import AIBootcamp from "./pages/AIBootcamp";
import Certifications from "./pages/Certifications";
import CourseCurriculum from "./pages/CourseCurriculum";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => ( 
  <ThemeProvider defaultTheme="dark" storageKey="tmt-theme" attribute="class">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ParticleBackground />
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/internships" element={<Internships />} /> */}
          <Route path="/bootcamps" element={<AIBootcamp />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/course/:courseId" element={<CourseCurriculum />} />

          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </ThemeProvider>
);

export default App;
