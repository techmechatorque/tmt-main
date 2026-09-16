import type { LucideIcon } from "lucide-react";
import { GraduationCap, Code2, ClipboardCheck, IndianRupee, ShoppingCart } from "lucide-react";
import { company } from "./company";

export type ProductStatus = "LIVE" | "BUILDING" | "PLANNED";

export interface Product {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  tagline: string;
  description: string;
  liveUrl?: string;
  features?: string[];
  /** Short usage-flow steps — how someone actually uses the product, not just what it has. */
  howItWorks?: string[];
  icon: LucideIcon;
}

// B4 assumption (unresolved as of 2026-09-02): only products explicitly named in the
// rebuild plan are listed here. Learning Spaces is the one confirmed LIVE product.
// Everything else defaults to PLANNED until someone confirms otherwise — see
// docs/rebuild-plan-v2.1.md B4.
export const products: Product[] = [
  {
    slug: "learning-spaces",
    name: "Learning Spaces",
    category: "Education",
    status: "LIVE",
    tagline: "Learn to code, for real",
    description:
      "A live learning platform for C, C++, Java, and Python — coding challenges, an integrated online compiler, interactive tutorials, and certificates.",
    liveUrl: company.domains.learningSpaces,
    features: [
      "C, C++, Java, Python courses",
      "Coding challenges",
      "Integrated online compiler",
      "Interactive tutorials",
      "Certificates on completion",
    ],
    howItWorks: [
      "Sign in to a personal dashboard that tracks your progress across every course",
      "Work through structured lessons in C, C++, Java, or Python",
      "Practice in the built-in online compiler and coding challenges — nothing to install",
      "Progress saves automatically, so you pick up exactly where you left off",
      "Complete a track and earn a certificate",
    ],
    icon: GraduationCap,
  },
  {
    slug: "campus-spaces",
    name: "Campus Spaces",
    category: "Education",
    status: "PLANNED",
    tagline: "Campus communication",
    description:
      "A planned communication platform for messaging, video, and collaboration between students, faculty, and administration.",
    icon: Code2,
  },
  {
    slug: "school-spaces",
    name: "School Spaces",
    category: "Education",
    status: "PLANNED",
    tagline: "Coding education for institutions",
    description:
      "A planned institutional coding-education platform with an integrated IDE, automated assessment, and plagiarism detection.",
    icon: Code2,
  },
  {
    slug: "academic-spaces",
    name: "Academic Spaces",
    category: "Education",
    status: "PLANNED",
    tagline: "Attendance tracking",
    description:
      "A planned attendance management system with biometric and geolocation verification and institutional analytics.",
    icon: ClipboardCheck,
  },
  {
    slug: "hr-payroll",
    name: "HR & Payroll",
    category: "Business",
    status: "PLANNED",
    tagline: "HR and payroll operations",
    description:
      "A planned HR and payroll platform covering automated calculations, compliance, and benefits tracking.",
    icon: IndianRupee,
  },
  {
    slug: "e-commerce",
    name: "E-Commerce",
    category: "Commerce",
    status: "PLANNED",
    tagline: "Online storefronts",
    description: "A planned e-commerce platform for businesses selling online.",
    icon: ShoppingCart,
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const statusOrder: Record<ProductStatus, number> = {
  LIVE: 0,
  BUILDING: 1,
  PLANNED: 2,
};

export const sortedProducts = [...products].sort(
  (a, b) => statusOrder[a.status] - statusOrder[b.status]
);
