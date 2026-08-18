import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * react-router-dom's BrowserRouter doesn't reset scroll position on
 * navigation (unlike a full page load) -- without this, clicking an
 * internal link while scrolled down on one page lands at the same pixel
 * offset on the next page, which can land mid-content on a shorter page.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Explicit "instant" -- Bootstrap sets `html { scroll-behavior: smooth }`
    // globally, which window.scrollTo(0, 0) would otherwise inherit, turning
    // a route change into a slow scroll-up animation instead of landing
    // instantly like a real page load does.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};
