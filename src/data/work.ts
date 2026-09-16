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
    title: "Restaurant website for Hotel Vedha",
    summary:
      "A restaurant website covering menu, gallery, and booking contact.",
    liveUrl: company.domains.hotelVedha,
    scope: ["Menu", "Gallery", "Booking contact"],
  },
  {
    slug: "swagath",
    client: "Swagath",
    title: "Website for Swagath restaurants",
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
      "A school management application covering student enrollment, fee collection, attendance, and UDISE-based reporting.",
    scope: ["Student enrollment", "Fee collection", "Attendance", "UDISE-based application"],
  },
];
