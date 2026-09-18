import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation — without this,
// clicking a nav link (Services, Work, ...) while scrolled down on the current
// page lands on the new page at the same scroll offset, showing its footer
// instead of its top. Mounted once inside the router so every route change
// (except same-page hash links) jumps back to the top.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
