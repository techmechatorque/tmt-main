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
  "gandhi-century-high-school-landing": {
    path: "/screens/GCHS/GCHS-landing-page.png",
    capturedAt: "2026-09-17",
    alt: "Gandhi Century High School landing page",
  },
};

export const screenshotFor = (slug: string) => screenshots[slug];

// Extra Learning Spaces captures for the Hero's auto-advancing slideshow —
// numbered in the filename, played back in that same order (1 is the
// original home-desktop.png, then 2 through 6).
export const learningSpacesHeroSlides: Screenshot[] = [
  {
    path: "/screens/learning-spaces/home-desktop.png",
    capturedAt: "2026-09-02",
    alt: "Learning Spaces dashboard showing course progress and modules",
  },
  {
    path: "/screens/learning-spaces/home-desktop-2.png",
    capturedAt: "2026-09-18",
    alt: "Learning Spaces product view 2",
  },
  {
    path: "/screens/learning-spaces/home-desktop-3.png",
    capturedAt: "2026-09-18",
    alt: "Learning Spaces product view 3",
  },
  {
    path: "/screens/learning-spaces/home-desktop-4.png",
    capturedAt: "2026-09-18",
    alt: "Learning Spaces product view 4",
  },
  {
    path: "/screens/learning-spaces/home-desktop-5.png",
    capturedAt: "2026-09-18",
    alt: "Learning Spaces product view 5",
  },
  {
    path: "/screens/learning-spaces/home-desktop-6.png",
    capturedAt: "2026-09-18",
    alt: "Learning Spaces product view 6",
  },
];
