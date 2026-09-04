import { useState } from "react";
import useReveal from "./hooks/useReveal";

function Accessories() {
  const [sectionRef, isVisible] = useReveal();
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="accessories"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-5 py-20 text-white sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <p className="mb-4 text-[10px] uppercase tracking-[3px] text-white/50 sm:text-xs sm:tracking-[5px]">
              Accessories
            </p>

            <h2 className="max-w-xl text-4xl font-light leading-[0.95] tracking-[-1.5px] sm:text-6xl sm:tracking-[-2px] md:text-7xl lg:text-[88px]">
              Complete
              <br />
              your setup.
            </h2>

            <div className="mt-7 h-px w-16 bg-white/40 sm:mt-9 sm:w-24" />

            <p className="mt-7 max-w-lg text-sm leading-6 text-white/60 sm:mt-9 sm:text-base sm:leading-7 md:text-lg">
              Enhance your productivity with versatile accessories designed
              to keep your workspace connected, organized and ready for
              anything.
            </p>

            <div className="mt-7 sm:mt-9">
              <p className="text-2xl font-light sm:text-3xl md:text-4xl">
                Dell 6-in-1 USB-C
              </p>

              <p className="mt-2 text-sm text-white/40 sm:text-base">
                Multiport Adapter · DA305
              </p>

              <p className="mt-4 text-xl font-light sm:text-2xl">
                ₹1,999/-*
              </p>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="group mt-7 flex items-center gap-4 rounded-full border border-white/50 px-6 py-3 text-xs transition-all duration-500 hover:bg-white hover:text-black sm:mt-9 sm:px-7 sm:py-3.5 sm:text-sm"
            >
              <span>{showMore ? "SHOW LESS" : "KNOW MORE"}</span>

              <span
                className={`text-lg transition-transform duration-500 ${
                  showMore
                    ? "rotate-45"
                    : "group-hover:translate-x-1"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-all duration-500 ${
                showMore
                  ? "mt-6 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-lg text-sm leading-6 text-white/40">
                  Connect multiple devices through a single compact USB-C
                  adapter. Perfect for creating a flexible workstation
                  wherever you work.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1600&q=85"
                alt="USB-C laptop accessories"
                className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out md:group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] uppercase tracking-[3px] text-white/60 sm:text-xs sm:tracking-[4px]">
                  DA305
                </p>

                <p className="mt-2 text-lg font-light sm:text-2xl">
                  One hub. More possibilities.
                </p>
              </div>

              <div className="absolute right-5 top-5 hidden rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black sm:block sm:right-7 sm:top-7">
                ACCESSORIES
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-14 h-px bg-white/10 transition-all duration-1000 sm:mt-20 ${
            isVisible
              ? "w-full opacity-100"
              : "w-0 opacity-100"
          }`}
        />
      </div>
    </section>
  );
}

export default Accessories;