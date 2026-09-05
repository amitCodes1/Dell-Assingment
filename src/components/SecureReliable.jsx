import { useState } from "react";
import useReveal from "./hooks/useReveal";
import useScrollAnimation from "./hooks/useScrollAnimation";

function SecureReliable() {
  const [sectionRef, isVisible] = useReveal();
  const [videoRef, progress] = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);

  const videoScale = 1.08 - progress * 0.08;
  const videoY = (progress - 0.5) * -30;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <div
        ref={videoRef}
        className="absolute inset-0 overflow-hidden"
      >
        <video
          src="/videos/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            transform: `translate3d(0, ${videoY}px, 0) scale(${videoScale})`,
          }}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-20">
          <div
            className={`max-w-3xl text-white transition-all duration-[1200ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <p className="mb-5 text-xs uppercase tracking-[4px] text-white/60 sm:text-sm">
              Inspiron 14 Plus 2-in-1
            </p>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-2px] sm:text-6xl md:text-7xl lg:text-[100px]">
              Secure and
              <br />
              reliable
            </h2>

            <div
              className={`mt-8 h-px w-24 bg-white/50 transition-all duration-1000 ${
                isVisible ? "scale-x-100" : "scale-x-0"
              }`}
            />

            <p
              className={`mt-8 max-w-xl text-sm leading-7 text-white/75 transition-all delay-300 duration-1000 sm:text-base md:text-lg ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
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

      <div className="absolute bottom-8 right-6 z-20 hidden text-xs text-white/40 sm:right-8 md:right-12 lg:right-20 sm:block">
        Scroll to explore
      </div>
    </section>
  );
}

export default SecureReliable;