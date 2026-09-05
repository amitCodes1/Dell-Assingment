import useReveal from "./hooks/useReveal";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function XpsSection() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const { isLight } = useTheme();

  const imageScale = 1.15 - progress * 0.15;
  const imageY = (progress - 0.5) * -50;

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-700 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32 ${
        isLight
          ? "bg-white text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          <div
            className={`transition-all duration-[1200ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <p
              className={`mb-4 text-[10px] uppercase tracking-[3px] transition-colors duration-700 sm:text-xs sm:tracking-[5px] ${
                isLight
                  ? "text-gray-500"
                  : "text-white/50"
              }`}
            >
              Premium Performance
            </p>

            <div className="overflow-hidden">
              <h2
                className={`max-w-xl text-4xl font-light leading-[0.95] tracking-[-1.5px] transition-all duration-[1200ms] sm:text-6xl sm:tracking-[-2px] md:text-7xl lg:text-[88px] ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-20 scale-105 opacity-0"
                }`}
              >
                Meet the
                <br />
                Dell XPS 13.
              </h2>
            </div>

            <div
              className={`mt-7 h-px w-16 origin-left transition-all duration-1000 sm:mt-9 sm:w-24 ${
                isLight
                  ? "bg-gray-900/40"
                  : "bg-white/40"
              } ${
                isVisible
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            />

            <p
              className={`mt-7 max-w-lg text-sm leading-6 transition-all delay-300 duration-1000 sm:mt-9 sm:text-base sm:leading-7 md:text-lg ${
                isLight
                  ? "text-gray-600"
                  : "text-white/60"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Experience premium design and powerful performance in an
              incredibly compact form factor.
            </p>

            <div
              className={`mt-7 transition-all delay-500 duration-1000 sm:mt-9 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-2xl font-light sm:text-3xl md:text-4xl">
                Starting from ₹53,364
              </p>

              <p
                className={`mt-2 text-xs transition-colors duration-700 sm:text-sm ${
                  isLight
                    ? "text-gray-500"
                    : "text-white/40"
                }`}
              >
                EMI starting at ₹2,224
              </p>
            </div>

            <button
              className={`group mt-7 flex items-center gap-4 rounded-full border px-6 py-3 text-xs transition-all duration-500 sm:mt-9 sm:px-7 sm:py-3.5 sm:text-sm ${
                isLight
                  ? "border-gray-900/40 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-white/50 text-white hover:bg-white hover:text-black"
              }`}
            >
              <span>KNOW MORE</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>

          <div
            ref={imageRef}
            className={`transition-all delay-200 duration-[1200ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }`}
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1720556405438-d67f0f9ecd44?w=1200&auto=format&fit=crop&q=85"
                alt="Dell XPS 13 laptop"
                style={{
                  transform: `translate3d(0, ${imageY}px, 0) scale(${imageScale})`,
                }}
                className="h-full w-full object-cover object-center will-change-transform transition-transform duration-100 ease-out group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] uppercase tracking-[3px] text-white/60 sm:text-xs sm:tracking-[4px]">
                  XPS 13
                </p>

                <p className="mt-2 text-lg font-light text-white sm:text-2xl">
                  Small form. Big ambition.
                </p>
              </div>

              <div className="absolute right-5 top-5 hidden rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black sm:block sm:right-7 sm:top-7">
                XPS 13
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-14 h-px transition-all duration-1000 sm:mt-20 ${
            isLight
              ? "bg-gray-900/10"
              : "bg-white/10"
          } ${
            isVisible
              ? "w-full opacity-100"
              : "w-0 opacity-0"
          }`}
        />
      </div>
    </section>
  );
}

export default XpsSection;