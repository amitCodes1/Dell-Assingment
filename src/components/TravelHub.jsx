import { useState } from "react";
import useReveal from "./hooks/useReveal";

function TravelHub() {
  const [sectionRef, isVisible] = useReveal();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-16 transition-all duration-[1200ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <p className="text-sm uppercase tracking-[4px] text-white/40">
            Accessories
          </p>

          <h2 className="mt-5 max-w-4xl text-6xl font-medium leading-[0.9] tracking-tight md:text-8xl lg:text-[100px]">
            Power your
            <br />
            everyday setup.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-neutral-900">
          <div className="grid min-h-[650px] lg:grid-cols-2">
            <div
              className={`relative flex items-end p-8 transition-all duration-[1200ms] md:p-12 lg:p-16 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <div>
                <p className="text-sm uppercase tracking-[3px] text-white/40">
                  Dell Pro DA326
                </p>

                <h3 className="mt-5 max-w-xl text-5xl font-medium leading-[0.95] tracking-tight md:text-6xl">
                  Dell Pro
                  <br />
                  7-in-1 USB-C
                  <br />
                  Travel Hub
                </h3>

                <div className="mt-8">
                  <p className="text-lg text-white/40 line-through">
                    ₹9,999/-*
                  </p>

                  <p className="mt-1 text-4xl font-medium">
                    ₹1,999/-*
                  </p>
                </div>

                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="group mt-8 flex items-center gap-4 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-200"
                >
                  <span>{showInfo ? "CLOSE" : "KNOW MORE"}</span>

                  <span
                    className={`text-lg transition-transform duration-500 ${
                      showInfo
                        ? "rotate-45"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-700 ${
                    showInfo
                      ? "mt-8 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="max-w-xl border-l border-white/20 pl-6">
                      <p className="text-lg leading-8 text-white/60">
                        The Dell Pro 7-in-1 USB-C Travel Hub helps expand
                        your laptop connectivity through a compact and
                        portable design.
                      </p>

                      <p className="mt-5 text-sm uppercase tracking-[3px] text-white/40">
                        Dell Pro DA326
                      </p>

                      <p className="mt-3 text-base leading-7 text-white/50">
                        A practical accessory for connecting your everyday
                        devices while working at home, in the office or
                        while travelling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`relative min-h-[450px] overflow-hidden transition-all duration-[1400ms] ${
                isVisible
                  ? "translate-x-0 scale-100 opacity-100"
                  : "translate-x-20 scale-90 opacity-0"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <img
                src="/src/assets/images/travels.avif"
                alt="Dell Pro 7-in-1 USB-C Travel Hub"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/50" />

              <div className="absolute bottom-7 right-7 translate-y-5 opacity-0 transition-all duration-700 hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[4px] text-white">
                  Dell Pro DA326
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-10 right-6 h-px bg-white/20 transition-all duration-[1200ms] md:right-12 lg:right-20 ${
          isVisible
            ? "w-24 opacity-100"
            : "w-0 opacity-0"
        }`}
      />
    </section>
  );
}

export default TravelHub;