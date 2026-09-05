import { useEffect, useRef, useState } from "react";

function useScrollAnimation() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    const update = () => {
      const element = ref.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      const value = Math.min(
        1,
        Math.max(
          0,
          (screenHeight - rect.top) /
            (screenHeight + rect.height)
        )
      );

      setProgress(value);
      frame.current = null;
    };

    const handleScroll = () => {
      if (!frame.current) {
        frame.current = requestAnimationFrame(update);
      }
    };

    update();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return [ref, progress];
}

export default useScrollAnimation;