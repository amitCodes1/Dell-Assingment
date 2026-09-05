import { useEffect, useRef, useState } from "react";

function useScrollAnimation() {
  const elementRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight;
      const end = -rect.height;

      const current = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end))
      );

      setProgress(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return [elementRef, progress];
}

export default useScrollAnimation;