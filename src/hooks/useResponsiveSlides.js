import { useState, useEffect } from "react";

// Returns 1 (mobile), 2 (tablet), or 4 (desktop)
export default function useResponsiveSlides() {
  const [visibleCount, setVisibleCount] = useState(getCount());

  function getCount() {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 4; // desktop
  }

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getCount());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visibleCount;
}
