import type { LucideIcon } from "lucide-react";
import { Brain, Code2, CalendarClock, Search, Users, Rocket, TrendingUp } from "lucide-react";

export interface NavAnchor {
  label: string;
  href: string;
}

// Single-page microsite — links are in-page anchors, not routes.
export const universityNavLinks: NavAnchor[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
}

export const pillars: Pillar[] = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Automated assessment and cognitive tutoring that adapts to how each student actually learns.",
    points: ["Automated assessment & grading", "Cognitive tutoring engine", "Early risk detection"],
  },
  {
    icon: Code2,
    title: "Academic Innovation Hub",
    description: "A live coding and certification environment built into the curriculum, not bolted on after.",
    points: ["NextCode IDE", "Automated certification tracking", "Plagiarism-aware evaluation"],
  },
  {
    icon: CalendarClock,
    title: "Unified Campus Operations",
    description: "Attendance, payroll, and scheduling running on one connected system instead of three disconnected ones.",
    points: ["NextAttendance", "Payroll automation", "Smart scheduling"],
  },
];

export interface Metric {
  value: string;
  label: string;
}

export const impactMetrics: Metric[] = [
  { value: "40%", label: "Operational Cost Reduction" },
  { value: "60%", label: "Increased Student Engagement" },
  { value: "12-Month", label: "Ecosystem Deployment" },
];

export interface MethodologyStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const methodologySteps: MethodologyStep[] = [
  { icon: Search, title: "Assess", description: "Audit existing systems, workflows, and campus data to map what's really needed." },
  { icon: Users, title: "Co-Create", description: "Design the platform with faculty, administrators, and students — not around them." },
  { icon: Rocket, title: "Deploy", description: "Roll out in staged phases across departments, with real usage validating every step." },
  { icon: TrendingUp, title: "Scale", description: "Extend the ecosystem campus-wide once the foundation is proven." },
];
