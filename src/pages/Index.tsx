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
          <WhatWeBuild />
          <WorkTeaser />
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
