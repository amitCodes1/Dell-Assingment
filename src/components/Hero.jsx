import { useEffect, useRef, useState } from "react";
import useReveal from "./hooks/useReveal";
import { useTheme } from "../context/ThemeContext";

function Hero() {
  const [sectionRef, isVisible] = useReveal();
  const heroRef = useRef(null);
  const { isLight } = useTheme();

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [scrollY, setScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    let animationFrame;

    const handleMouseMove = (event) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const x =
          (event.clientX / window.innerWidth - 0.5) * 2;

        const y =
          (event.clientY / window.innerHeight - 0.5) * 2;

        setMousePosition({
          x,
          y,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    let animationFrame;

    const handleScroll = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        animationFrame = null;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isDesktop]);

  const mouseX = isDesktop
    ? mousePosition.x * 5
    : 0;

  const mouseY = isDesktop
    ? mousePosition.y * 5
    : 0;

  const videoY = isDesktop
    ? scrollY * 0.08
    : 0;

  return (
    <section
      ref={(element) => {
        sectionRef.current = element;
        heroRef.current = element;
      }}
      className={`relative min-h-[100svh] overflow-hidden transition-colors duration-700 ${
        isLight
          ? "bg-gray-100 text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={
            isDesktop
              ? {
                  transform: `translate3d(
                    ${mouseX}px,
                    ${mouseY + videoY}px,
                    0
                  ) scale(1.05)`,
                }
              : {
                  transform: "scale(1.01)",
                }
          }
          className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-[1500ms] ease-out ${
            isVisible
              ? "opacity-100"
              : "scale-105 opacity-0"
          }`}
        >
          <source
            src="/videos/video2.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className={`absolute inset-0 transition-all duration-700 ${
            isLight
              ? "bg-gradient-to-b from-white/75 via-white/35 to-white/75 md:bg-gradient-to-r md:from-white/90 md:via-white/40 md:to-transparent"
              : "bg-gradient-to-b from-black/60 via-black/40 to-black/80 md:bg-gradient-to-r md:from-black/85 md:via-black/40 md:to-transparent"
          }`}
        />

        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            isLight
              ? "bg-white/5"
              : "bg-black/10"
          }`}
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-start px-5 pb-20 pt-32 sm:px-8 sm:pt-36 md:items-center md:px-12 md:pb-20 md:pt-28 lg:px-20">
        <div className="w-full max-w-7xl">
          <div className="max-w-4xl">
            <div
              className={`mb-5 flex items-center gap-3 transition-all duration-1000 sm:mb-7 sm:gap-4 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span
                className={`text-[10px] uppercase tracking-[3px] transition-colors duration-700 sm:text-sm sm:tracking-[6px] ${
                  isLight
                    ? "text-gray-600"
                    : "text-white/70"
                }`}
              >
                New Launch
              </span>

              <span
                className={`h-px w-10 transition-all duration-1000 sm:w-20 ${
                  isLight
                    ? "bg-gray-700/50"
                    : "bg-white/60"
                } ${
                  isVisible
                    ? "scale-x-100 opacity-100"
                    : "scale-x-0 opacity-0"
                }`}
              />
            </div>

            <div className="overflow-hidden">
              <h1
                className={`max-w-3xl text-[40px] font-light leading-[0.95] tracking-[-1.8px] transition-all duration-[1200ms] sm:text-6xl sm:tracking-[-3px] md:text-8xl lg:text-[110px] ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-20 scale-105 opacity-0"
                }`}
              >
                Dell Inspiron
                <br />
                14 Plus 2-in-1
              </h1>
            </div>

            <p
              className={`mt-6 max-w-xl text-sm leading-6 transition-all delay-300 duration-1000 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl ${
                isLight
                  ? "text-gray-700"
                  : "text-white/75"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Built for flexibility. Designed for performance.
              <br className="hidden sm:block" />
              Four modes. Infinite possibilities.
            </p>

            <div
              className={`mt-7 transition-all delay-500 duration-1000 sm:mt-10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p
                className={`text-[9px] uppercase tracking-[3px] sm:text-xs sm:tracking-[5px] ${
                  isLight
                    ? "text-gray-500"
                    : "text-white/60"
                }`}
              >
                Starting At
              </p>

              <p className="mt-1 text-3xl font-light sm:mt-2 sm:text-4xl md:text-5xl">
                ₹56,000*
              </p>
            </div>

            <button
              onClick={() => {
                document
                  .getElementById("ai")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className={`group mt-7 flex items-center gap-4 rounded-full border px-6 py-3 text-xs transition-all duration-500 sm:mt-9 sm:gap-5 sm:px-7 sm:py-3.5 sm:text-sm ${
                isLight
                  ? "border-gray-900/50 hover:bg-gray-900 hover:text-white"
                  : "border-white/60 hover:bg-white hover:text-black"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span>EXPLORE NOW</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2 sm:text-xl">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-5 md:left-6 md:flex">
        <span className="text-sm">01</span>

        <div
          className={`h-12 w-px transition-colors duration-700 ${
            isLight
              ? "bg-gray-900/30"
              : "bg-white/50"
          }`}
        />

        <span
          className={`h-3 w-3 rounded-full transition-all duration-700 ${
            isLight
              ? "bg-gray-900"
              : "bg-white"
          } ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
        />

        <span
          className={`h-2 w-2 rounded-full ${
            isLight
              ? "bg-gray-900/30"
              : "bg-white/30"
          }`}
        />

        <span
          className={`h-2 w-2 rounded-full ${
            isLight
              ? "bg-gray-900/30"
              : "bg-white/30"
          }`}
        />

        <span
          className={`h-2 w-2 rounded-full ${
            isLight
              ? "bg-gray-900/30"
              : "bg-white/30"
          }`}
        />

        <span
          className={`mt-2 text-sm transition-colors duration-700 ${
            isLight
              ? "text-gray-500"
              : "text-white/60"
          }`}
        >
          06
        </span>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 text-center sm:block">
        <p
          className={`text-[10px] uppercase tracking-[4px] sm:text-xs sm:tracking-[5px] ${
            isLight
              ? "text-gray-500"
              : "text-white/60"
          }`}
        >
          Scroll
        </p>

        <div className="mt-2 flex justify-center">
          <span className="animate-bounce text-xl sm:text-2xl">
            ↓
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;