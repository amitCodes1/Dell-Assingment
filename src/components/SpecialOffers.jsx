import { useState } from "react";
import useReveal from "./hooks/useReveal";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function SpecialOffers() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);
  const { isLight } = useTheme();

  const imageScale = 1.12 - progress * 0.12;
  const imageY = (progress - 0.5) * -45;

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
              Special Offers
            </p>

            <div className="overflow-hidden">
              <h2
                className={`max-w-xl text-4xl font-light leading-[0.95] tracking-[-1.5px] transition-all duration-[1200ms] sm:text-6xl sm:tracking-[-2px] md:text-7xl lg:text-[88px] ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-20 scale-105 opacity-0"
                }`}
              >
                More to
                <br />
                enjoy.
              </h2>
            </div>

            <div
              className={`mt-7 h-px w-16 origin-left transition-all duration-1000 sm:mt-9 sm:w-24 ${
                isLight
                  ? "bg-gray-900/40"
                  : "bg-white/40"
              } ${
                isVisible
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
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
              Get more from your purchase with exclusive offers on selected
              accessories and premium audio experiences.
            </p>

            <div
              className={`mt-7 transition-all delay-500 duration-1000 sm:mt-9 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-2xl font-light sm:text-3xl md:text-4xl">
                JBL Tune 770NC
              </p>

              <p
                className={`mt-2 text-sm transition-colors duration-700 sm:text-base ${
                  isLight
                    ? "text-gray-500"
                    : "text-white/40"
                }`}
              >
                Wireless Noise Cancelling Headphones
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span
                  className={`text-sm line-through transition-colors duration-700 sm:text-base ${
                    isLight
                      ? "text-gray-400"
                      : "text-white/40"
                  }`}
                >
                  ₹9,999/-*
                </span>

                <span className="text-xl font-light sm:text-2xl">
                  ₹1,999/-*
                </span>

                <span className="rounded-full border border-current px-3 py-1 text-[9px] uppercase tracking-[2px]">
                  80% OFF
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className={`group mt-7 flex items-center gap-4 rounded-full border px-6 py-3 text-xs transition-all duration-500 sm:mt-9 sm:px-7 sm:py-3.5 sm:text-sm ${
                isLight
                  ? "border-gray-900/40 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-white/50 text-white hover:bg-white hover:text-black"
              }`}
            >
              <span>
                {showMore ? "SHOW LESS" : "KNOW MORE"}
              </span>

              <span
                className={`text-lg transition-transform duration-500 ${
                  showMore
                    ? "rotate-45"
                    : "group-hover:translate-x-2"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-all duration-700 ${
                showMore
                  ? "mt-6 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`border-l pl-5 ${
                    isLight
                      ? "border-gray-900/20"
                      : "border-white/20"
                  }`}
                >
                  <p
                    className={`max-w-lg text-sm leading-6 ${
                      isLight
                        ? "text-gray-500"
                        : "text-white/40"
                    }`}
                  >
                    Enjoy immersive sound with active noise cancellation,
                    powerful audio and a comfortable design made for everyday
                    listening.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all delay-200 duration-[1200ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-16 opacity-0"
            }`}
          >
            <div
              ref={imageRef}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=85"
                alt="JBL headphones"
                style={{
                  transform: `translate3d(0, ${imageY}px, 0) scale(${imageScale})`,
                }}
                className="h-full w-full object-cover object-center will-change-transform transition-transform duration-100 ease-out md:group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[9px] tracking-[2px] text-white backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black sm:left-7 sm:top-7 sm:text-xs">
                SPECIAL OFFER
              </div>

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] uppercase tracking-[3px] text-white/60 sm:text-xs sm:tracking-[4px]">
                  JBL TUNE 770NC
                </p>

                <p className="mt-2 text-lg font-light text-white sm:text-2xl">
                  Premium sound. Exceptional offer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-14 h-px transition-all duration-[1500ms] sm:mt-20 ${
            isLight
              ? "bg-gray-900/10"
              : "bg-white/10"
          } ${
            isVisible
              ? "w-full opacity-100"
              : "w-0 opacity-0"
          }`}
        />

        <div
          className={`relative overflow-hidden pt-12 text-center transition-all delay-500 duration-[1200ms] sm:pt-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p
            className={`text-[9px] uppercase tracking-[2px] transition-colors duration-700 sm:text-xs sm:tracking-[4px] ${
              isLight
                ? "text-gray-400"
                : "text-white/30"
            }`}
          >
            *Terms and conditions apply
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("top")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`group flex items-center gap-4 rounded-full border px-6 py-3 text-xs transition-all duration-500 sm:px-8 sm:py-3.5 sm:text-sm ${
                isLight
                  ? "border-gray-900/30 hover:bg-gray-900 hover:text-white"
                  : "border-white/30 hover:bg-white hover:text-black"
              }`}
            >
              <span>BACK TO TOP</span>

              <span className="transition-transform duration-500 group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </div>

          <p
            className={`mt-8 text-[10px] tracking-[2px] transition-colors duration-700 ${
              isLight
                ? "text-gray-300"
                : "text-white/15"
            }`}
          >
            DELL · DESIGNED FOR WHAT'S NEXT
          </p>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;