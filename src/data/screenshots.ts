// Screenshot inventory — see rebuild plan §7 "Screenshot pipeline". Every entry
// records a real capture, when it was taken, and where the file lives under
// public/screens/. Products/work items with no entry here show an honest
// "pending" state instead (ProductDetail.tsx, WorkDetail.tsx) — never a
// composited or invented image.
//
// To add a real screenshot: drop the file at the path below (desktop: 1440x900,
// mobile: 390x844) and add/update its entry with today's date.

export interface Screenshot {
  path: string;
  capturedAt: string; // YYYY-MM-DD
  alt: string;
}

export const screenshots: Record<string, Screenshot> = {
  "learning-spaces": {
    path: "/screens/learning-spaces/home-desktop.png",
    capturedAt: "2026-09-02",
    alt: "Learning Spaces dashboard showing course progress and modules",
  },
  "hotel-vedha": {
    path: "/screens/hotel-vedha/home-desktop.png",
    capturedAt: "2026-09-02",
    alt: "Hotel Vedha restaurant homepage",
  },
  "swagath": {
    path: "/screens/swagath/home-desktop.png",
    capturedAt: "2026-09-03",
    alt: "Swagath restaurant homepage",
  },
  "gandhi-century-high-school": {
    path: "/screens/GCHS/GandhiSchool.png",
    capturedAt: "2026-09-17",
    alt: "Gandhi Century High School management system",
  },
};

export const screenshotFor = (slug: string) => screenshots[slug];
