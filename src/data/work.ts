import { company } from "./company";

export interface WorkItem {
  slug: string;
  client: string;
  title: string;
  summary: string;
  /** Not every delivered project has a public URL — school/internal systems, for one. */
  liveUrl?: string;
  scope: string[];
}

export const workItems: WorkItem[] = [
  {
    slug: "hotel-vedha",
    client: "Hotel Vedha",
    title: "Bringing Hotel Vedha Online",
    summary:
      "A restaurant website covering menu, gallery, and booking contact.",
    liveUrl: company.domains.hotelVedha,
    scope: ["Menu", "Gallery", "Booking contact"],
  },
  {
    slug: "swagath",
    client: "Swagath",
    title: "Scaling Swagath Across Locations",
    summary:
      "A multi-location restaurant chain website covering the menu, dining and events, and a location finder across their branches.",
    liveUrl: company.domains.swagath,
    scope: ["Menu", "Dining & events", "Location finder", "Careers"],
  },
  {
    slug: "gandhi-century-high-school",
    client: "Gandhi Century High School",
    title: "School management system for Gandhi Century High School",
    summary:
      "A school management application covering student enrollment, fee structure and collection, attendance, school analytics, and scholarships — with role-based access, built securely throughout, and UDISE-based reporting.",
    scope: [
      "Student enrollment",
      "School details",
      "Fee structure",
      "Fee collection",
      "Fee reports",
      "Attendance",
      "School analytics",
      "Scholarships",
      "Role-based access",
      "Secure by design",
      "UDISE-based application",
    ],
  },
  {
    slug: "gandhi-century-high-school-landing",
    client: "Gandhi Century High School",
    title: "A New Front Door for Gandhi Century High School",
    summary:
      "The school's public website — admissions, academics, infrastructure, and gallery, alongside the management system.",
    liveUrl: company.domains.gandhiCenturyHighSchool,
    scope: ["Home", "About", "Academics", "Infrastructure", "Gallery", "Admissions", "Contact"],
  },
];
