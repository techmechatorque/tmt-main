import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ServicesMarquee from "@/components/home/ServicesMarquee";
import WhatWeDo from "@/components/home/WhatWeDo";
import LiveProof from "@/components/home/LiveProof";
import ToolsMarqueeCurved from "@/components/home/ToolsMarqueeCurved";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import WorkTeaser from "@/components/home/WorkTeaser";
import Timeline from "@/components/home/Timeline";
import BeyondLaunch from "@/components/home/BeyondLaunch";
import WhyTMT from "@/components/home/WhyTMT";
import ContactCTA from "@/components/home/ContactCTA";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta({
    title: "Digital Platforms for Universities",
    description:
      "TechMecha Torque builds digital platforms end to end. Learning Spaces, our coding education platform, is live today.",
    path: "/",
  });

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ServicesMarquee />
          <WhatWeDo />
          <LiveProof />
          <ToolsMarqueeCurved />
          {/* "What we build" sticks in place while "Delivered work" scrolls up and
              stacks on top of it — same sticky + increasing z-index technique as
              the /services page's stacking cards, just applied across these two
              home sections instead of within one. The shared `relative` wrapper
              is what scopes the sticky's containing block to just these two
              sections' combined height — without it, the sticky element's nearest
              positioned ancestor would be the page-spanning wrapper way up in
              Index.tsx, so it would never release and "What we build" would stay
              stuck (invisibly, behind "Delivered work") for the rest of the page. */}
          <div className="relative">
            <div className="sticky top-24 z-[1]">
              <WhatWeBuild />
            </div>
            <div className="relative z-[2] bg-background">
              <WorkTeaser />
            </div>
          </div>
          <Timeline />
          <BeyondLaunch />
          <WhyTMT />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
