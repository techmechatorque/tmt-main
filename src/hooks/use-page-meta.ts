import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
}

const SITE_NAME = "TechMecha Torque";
const SITE_ORIGIN = "https://techmechatorque.com";

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Vite serves a single static index.html, so per-route <title>/<meta> tags can
// only be set client-side. Search engines that execute JS (Google) pick this up;
// most social-share scrapers do not run JS, so OG previews still resolve to the
// root index.html tags until a prerender step exists (see rebuild plan Phase 7).
export function usePageMeta({ title, description, path }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = `${title} - ${SITE_NAME}`;
    document.title = fullTitle;
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setCanonical(`${SITE_ORIGIN}${path}`);
  }, [title, description, path]);
}
