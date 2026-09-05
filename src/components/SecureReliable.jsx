import { useState } from "react";
import useReveal from "./hooks/useReveal";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function SecureReliable() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);
  const { isLight } = useTheme();

  const imageScale = 1.15 - progress * 0.15;
  const imageY = (progress - 0.5) * -50;

  const imageUrl =
    "https://images.unsplash.com/photo-1542471562201-7086102e3374?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwdmlkZW98ZW58MHx8MHx8fDA%3D";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 overflow-hidden"
      >
        <img
          src={imageUrl}
          alt="Laptop"
          style={{
            transform: `translate3d(0, ${imageY}px, 0) scale(${imageScale})`,
          }}
          className="h-full w-full object-cover will-change-transform"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20">
          <div
            className={`max-w-3xl transition-all duration-[1200ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <p className="mb-5 text-xs uppercase tracking-[4px] text-white/60 sm:text-sm">
              Inspiron 14 Plus 2-in-1
            </p>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-2px] text-white sm:text-6xl md:text-7xl lg:text-[100px]">
              Secure and
              <br />
              reliable
            </h2>

            <div className="mt-8 h-px w-24 bg-white/40" />

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/75 sm:text-base md:text-lg">
              Designed to keep your data protected while delivering reliable
              performance for work, creativity and everyday productivity.
            </p>

            {showMore && (
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base md:text-lg">
                Experience a premium 2-in-1 design with intelligent features,
                powerful performance and the flexibility to work from anywhere.
              </p>
            )}

            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="group mt-9 flex items-center gap-4 rounded-full border border-white/50 px-7 py-3.5 text-sm text-white transition-all duration-500 hover:bg-white hover:text-black"
            >
              <span>{showMore ? "SHOW LESS" : "KNOW MORE"}</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 z-20 text-xs uppercase tracking-[4px] text-white/50 sm:left-8 md:left-12 lg:left-20">
        Dell Inspiron
      </div>
    </section>
  );
}

export default SecureReliable;