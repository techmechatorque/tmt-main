import type { LucideIcon } from "lucide-react";
import { Code, Rocket, LifeBuoy, Wrench, LineChart, Globe, ShoppingCart, GraduationCap, Store } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Software Development",
    description:
      "Custom platforms built end to end — from product design through to a deployed, maintained application.",
    icon: Code,
  },
  {
    title: "Digital Transformation",
    description:
      "Moving an institution or business from manual, paper-based processes onto a working digital platform.",
    icon: Rocket,
  },
  {
    title: "Beyond Launch",
    description:
      "Ongoing support after go-live: fixes, iteration, and market support as a product finds its users.",
    icon: LifeBuoy,
  },
  {
    title: "Website Design & Development",
    description:
      "Custom websites for restaurants, hotels, and local businesses — delivered and live, like Hotel Vedha and Swagath.",
    icon: Globe,
  },
  {
    title: "Landing Pages",
    description:
      "Single-page sites for restaurants, shops, gyms, and other local businesses. SEO optimization and Google Business Profile setup available.",
    icon: Store,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Online storefronts for businesses that want to sell directly to their customers.",
    icon: ShoppingCart,
  },
  {
    title: "Training & Certification",
    description:
      "Structured courses in C, C++, Java, and Python, delivered through Learning Spaces, with certificates on completion.",
    icon: GraduationCap,
  },
];

export interface BeyondLaunchDetail {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Shared by the home page's BeyondLaunch section and the expanded Beyond Launch
// card on /services — one source, so the two don't drift into duplicated copies.
export const beyondLaunchDetails: BeyondLaunchDetail[] = [
  { icon: LifeBuoy, title: "Ongoing support", description: "Fixes and maintenance after a product goes live." },
  { icon: Wrench, title: "Iteration", description: "Improving the product as real users start using it." },
  { icon: LineChart, title: "Market support", description: "Helping a launched product find its users." },
];

export interface LifecycleStage {
  step: string;
  title: string;
  description: string;
}

export const lifecycle: LifecycleStage[] = [
  { step: "01", title: "Discover", description: "Understand the problem, the users, and the constraints." },
  { step: "02", title: "Design", description: "Plan the product and the technical approach." },
  { step: "03", title: "Build", description: "Develop the platform in stages, with working software at every step." },
  { step: "04", title: "Test", description: "Verify the product works before anyone outside the team sees it." },
  { step: "05", title: "Launch", description: "Ship to real users." },
  { step: "06", title: "Support", description: "Maintain and iterate on what's live." },
];

export interface Benefit {
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  { title: "We build products, not just websites", description: "Learning Spaces is a live, working platform — not a mockup." },
  { title: "Direct access to the team", description: "You work with the people building your platform, not an account manager." },
  { title: "Based in India, working with India-first constraints", description: "Built with local payment, compliance, and connectivity realities in mind." },
  { title: "Full lifecycle delivery", description: "From first design through to post-launch support." },
  { title: "Honest status reporting", description: "We label what's live, what's in progress, and what's planned — and we mean it." },
  { title: "Small team, direct communication", description: "No layers between you and the people doing the work." },
];
