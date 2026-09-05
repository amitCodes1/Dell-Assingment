import useReveal from "./hooks/useReveal";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function SecureReliable() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const { isLight } = useTheme();

  const videoScale = 1.08 - progress * 0.08;
  const videoY = (progress - 0.5) * -30;

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[80svh] overflow-hidden transition-colors duration-700 ${
        isLight
          ? "bg-white text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <div
        ref={imageRef}
        className="absolute inset-0 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            transform: `translate3d(0, ${videoY}px, 0) scale(${videoScale})`,
          }}
          className={`h-full w-full object-cover object-center will-change-transform transition-all duration-[1200ms] ease-out ${
            isVisible
              ? "opacity-100"
              : "scale-105 opacity-0"
          }`}
        >
          <source
            src="public/videos/video.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className={`absolute inset-0 transition-all duration-700 ${
            isLight
              ? "bg-white/65 md:bg-gradient-to-r md:from-white/90 md:via-white/55 md:to-white/20"
              : "bg-black/65 md:bg-gradient-to-r md:from-black/85 md:via-black/50 md:to-black/20"
          }`}
        />
      </div>

      <div className="relative z-10 flex min-h-[80svh] items-center px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p
              className={`mb-5 text-[10px] uppercase tracking-[3px] transition-all duration-1000 sm:mb-7 sm:text-xs sm:tracking-[5px] ${
                isLight
                  ? "text-gray-600"
                  : "text-white/60"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Designed for confidence
            </p>

            <div className="overflow-hidden">
              <h2
                className={`text-5xl font-light leading-[0.92] tracking-[-2px] transition-all duration-[1200ms] sm:text-7xl sm:tracking-[-3px] md:text-8xl lg:text-[100px] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                Secure
                <br />
                and reliable.
              </h2>
            </div>

            <div
              className={`mt-7 h-px w-16 origin-left transition-all duration-1000 sm:mt-9 sm:w-24 ${
                isLight
                  ? "bg-gray-900/40"
                  : "bg-white/50"
              } ${
                isVisible
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            />

            <p
              className={`mt-7 max-w-xl text-sm leading-6 transition-all delay-300 duration-1000 sm:mt-9 sm:text-base sm:leading-7 md:text-lg ${
                isLight
                  ? "text-gray-700"
                  : "text-white/70"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Built to keep your everyday work, creativity and entertainment
              moving with dependable performance and thoughtful design.
            </p>

            <div
              className={`mt-8 flex items-center gap-5 transition-all delay-500 duration-1000 sm:mt-10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md sm:h-12 sm:w-12 ${
                  isLight
                    ? "border-gray-900/20 bg-white/40"
                    : "border-white/30 bg-black/20"
                }`}
              >
                <span className="text-lg">✓</span>
              </div>

              <div>
                <p className="text-sm font-medium sm:text-base">
                  Built for everyday reliability
                </p>

                <p
                  className={`mt-1 text-xs sm:text-sm ${
                    isLight
                      ? "text-gray-500"
                      : "text-white/50"
                  }`}
                >
                  Performance you can count on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-6 right-5 z-20 rounded-full border px-4 py-2 text-[9px] uppercase tracking-[2px] backdrop-blur-md transition-all duration-700 sm:bottom-8 sm:right-8 sm:text-xs ${
          isLight
            ? "border-gray-900/20 bg-white/40 text-gray-700"
            : "border-white/20 bg-black/20 text-white/60"
        } ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        DELL INSPIRON
      </div>
    </section>
  );
}

export default SecureReliable;