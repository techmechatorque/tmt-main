import AnnouncementBar from "@/components/university/AnnouncementBar";
import UniversityNav from "@/components/university/UniversityNav";
import UniversityHero from "@/components/university/UniversityHero";
import PillarsGrid from "@/components/university/PillarsGrid";
import MetricsBar from "@/components/university/MetricsBar";
import Methodology from "@/components/university/Methodology";
import UniversityFooter from "@/components/university/UniversityFooter";
import { usePageMeta } from "@/hooks/use-page-meta";

// Standalone landing page for the university digital-transformation ecosystem pitch.
// Deliberately hardcodes a pitch-black + crimson aesthetic (bg-[#050505], text-white)
// rather than the site's light/dark theme tokens, so it reads the same regardless of
// the visitor's theme preference elsewhere on the site.
const University = () => {
  usePageMeta({
    title: "University Ecosystem",
    description:
      "TechMecha Torque's digital transformation platform for universities — AI-powered intelligence, academic innovation, and unified campus operations.",
    path: "/university",
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <AnnouncementBar />
      <UniversityNav />
      <main>
        <UniversityHero />
        <PillarsGrid />
        <MetricsBar />
        <Methodology />
      </main>
      <UniversityFooter />
    </div>
  );
};

export default University;
