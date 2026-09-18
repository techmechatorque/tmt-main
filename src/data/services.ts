import type { LucideIcon } from "lucide-react";
import {
  Code,
  Rocket,
  LifeBuoy,
  Wrench,
  LineChart,
  GraduationCap,
  Search,
  PenTool,
  Hammer,
  CheckCircle2,
  Bot,
  Workflow,
  Cloud,
  Webhook,
  BarChart3,
} from "lucide-react";

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
    title: "Turn Complexity Into Intelligent Automation",
    description:
      "Transform fragmented workflows and repetitive processes into intelligent, automated systems. Our AI-powered solutions reduce manual effort, eliminate operational errors, connect your data, and accelerate the way your business works—helping your team move faster and scale without unnecessary overhead.",
    icon: Bot,
  },
  {
    title: "Build Smarter Operations. Scale Without Friction.",
    description:
      "We embed AI directly into your everyday operations to automate routine work, unify disconnected data, and turn complex processes into streamlined workflows. The result is faster execution, greater accuracy, and scalable operations designed to grow with your business.",
    icon: Workflow,
  },
  {
    title: "SaaS Development",
    description:
      "End-to-end SaaS application development from concept to deployment, including architecture design, development, and scaling solutions.",
    icon: Cloud,
  },
  {
    title: "API Development",
    description:
      "RESTful and GraphQL API development with comprehensive documentation, testing, and integration support.",
    icon: Webhook,
  },
  {
    title: "Data Analytics",
    description:
      "Advanced analytics platforms with real-time dashboards, machine learning insights, and business intelligence tools.",
    icon: BarChart3,
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
  icon: LucideIcon;
  points: string[];
}

export const lifecycle: LifecycleStage[] = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the problem, the users, and the constraints.",
    icon: Search,
    points: ["Stakeholder & user conversations", "Mapping existing processes", "Defining scope and constraints"],
  },
  {
    step: "02",
    title: "Design",
    description: "Plan the product and the technical approach.",
    icon: PenTool,
    points: ["Product design & UX", "Technical architecture decisions", "Choosing the right stack"],
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the platform in stages, with working software at every step.",
    icon: Hammer,
    points: ["Iterative development in stages", "Working software at every checkpoint", "Regular check-ins as it takes shape"],
  },
  {
    step: "04",
    title: "Test",
    description: "Verify the product works before anyone outside the team sees it.",
    icon: CheckCircle2,
    points: ["Functional & cross-device testing", "Fixing issues before go-live", "Verifying against the original scope"],
  },
  {
    step: "05",
    title: "Launch",
    description: "Ship to real users.",
    icon: Rocket,
    points: ["Deployment & hosting setup", "Going live, not a demo", "Real users, real data"],
  },
  {
    step: "06",
    title: "Support",
    description: "Maintain and iterate on what's live.",
    icon: LifeBuoy,
    points: ["Ongoing fixes & maintenance", "Iterating as usage grows", "Direct access to the team"],
  },
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
