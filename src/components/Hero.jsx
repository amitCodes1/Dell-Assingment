import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";

function Hero() {
  const videoRef = useRef(null);
  const [sectionRef, isVisible] = useReveal();

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame;

    const handleMouseMove = (event) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const x =
          (event.clientX / window.innerWidth - 0.5) * 12;

        const y =
          (event.clientY / window.innerHeight - 0.5) * 8;

        setMouse({ x, y });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    let frame;

    const handleScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const explore = () => {
    document.getElementById("secure")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const videoMove = Math.min(scrollY * 0.35, 220);
  const textMove = Math.min(scrollY * 0.18, 120);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src="/videos/dell.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{
          transform: `
            scale(1.08)
            translate3d(
              ${mouse.x}px,
              ${mouse.y - videoMove}px,
              0
            )
          `,
        }}
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div
        className={`relative z-10 w-full px-6 pb-16 text-white sm:px-10 sm:pb-20 lg:px-20 lg:pb-24 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
        style={{
          transform: `
            translate3d(
              ${mouse.x * 0.35}px,
              ${mouse.y * 0.35 - textMove}px,
              0
            )
          `,
          transition:
            "transform 0.25s ease-out, opacity 1.4s ease-out",
        }}
      >
        <p className="mb-5 text-xs uppercase tracking-[5px] text-white/60">
          Dell Inspiron 14 Plus 2-in-1
        </p>

        <h1 className="premium-title max-w-5xl text-6xl font-light leading-[0.88] sm:text-7xl md:text-8xl lg:text-[125px]">
          Designed
          <br />
          for more.
        </h1>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <p className="text-sm text-white/70">
            Starting from ₹56,000*
          </p>

          <button
            onClick={explore}
            className="group flex w-fit items-center gap-5 rounded-full border border-white/40 px-6 py-3 text-sm transition-all duration-500 hover:bg-white hover:text-black"
          >
            Explore

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-8 right-6 z-10 hidden text-xs uppercase tracking-[4px] text-white/40 sm:block lg:right-20"
        style={{
          transform: `translateY(${-scrollY * 0.15}px)`,
          transition: "transform 0.15s linear",
        }}
      >
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;