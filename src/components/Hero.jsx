import { useEffect, useRef, useState } from "react";
import useReveal from "./hooks/useReveal";

function Hero() {
  const [sectionRef, isVisible] = useReveal();
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMousePosition({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) {
        return;
      }

      heroRef.current.style.setProperty(
        "--hero-scroll",
        `${window.scrollY * 0.15}px`
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={(element) => {
        sectionRef.current = element;
        heroRef.current = element;
      }}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
  <img
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1800&q=85"
    alt="Laptop"
    style={{
      transform: `translate3d(${mousePosition.x * 10}px, calc(${mousePosition.y * 10}px + var(--hero-scroll, 0px)), 0) scale(1.05)`,
    }}
    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1500ms] ease-out ${
      isVisible ? "opacity-90" : "opacity-0"
    }`}
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
</div>

<div className="relative z-10 flex min-h-screen items-center px-5 pb-20 pt-28 sm:px-8 sm:pb-20 sm:pt-28 md:px-12 lg:px-20 lg:pt-28">        <div className="w-full max-w-7xl">
          <div className="max-w-4xl">
            <div
              className={`mb-5 flex items-center gap-3 transition-all duration-1000 sm:mb-7 sm:gap-4 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="text-xs uppercase tracking-[4px] text-white/60 sm:text-sm sm:tracking-[6px]">
                New Launch
              </span>

              <span className="h-px w-12 bg-white/50 sm:w-20" />
            </div>

       <h1
  className={`text-4xl font-light leading-[0.95] tracking-[-1.5px] transition-all delay-150 duration-1000 sm:text-5xl md:text-8xl lg:text-[110px] ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-16 opacity-0"
  }`}
>
  Dell Inspiron
  <br />
  14 Plus 2-in-1
</h1>
          <p
  className={`mt-5 max-w-xl text-sm leading-6 text-white/65 transition-all delay-300 duration-1000 sm:mt-7 sm:text-base sm:leading-7 md:text-xl md:leading-8 ${
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
  className={`mt-6 transition-all delay-500 duration-1000 sm:mt-9 ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  }`}
>
  <p className="text-[9px] uppercase tracking-[3px] text-white/50 sm:text-xs sm:tracking-[5px]">
    Starting At
  </p>

  <p className="mt-1 text-3xl font-light sm:text-4xl md:text-5xl">
    ₹56,000*
  </p>
</div>

            <button
              onClick={() => {
                document
                  .getElementById("ai")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`group mt-7 flex items-center gap-4 rounded-full border border-white/50 px-6 py-3 text-xs transition-all duration-500 hover:bg-white hover:text-black sm:mt-9 sm:gap-5 sm:px-7 sm:py-3.5 sm:text-sm ${
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

        <div className="h-12 w-px bg-white/50" />

        <span className="h-3 w-3 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/30" />
        <span className="h-2 w-2 rounded-full bg-white/30" />

        <span className="mt-2 text-sm text-white/60">06</span>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 text-center sm:block">
        <p className="text-[10px] uppercase tracking-[4px] text-white/60 sm:text-xs sm:tracking-[5px]">
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