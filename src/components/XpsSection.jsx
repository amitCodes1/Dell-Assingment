import { useState } from "react";
import useReveal from "./hooks/useReveal";

function Accessories() {
  const [sectionRef, isVisible] = useReveal();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      ref={sectionRef}
      id="accessories"
      className="relative min-h-screen overflow-hidden bg-neutral-100 px-6 py-24 text-black md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-16 transition-all duration-[1200ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <p className="mb-5 text-sm uppercase tracking-[4px] text-black/40">
            Accessories
          </p>

          <h2 className="text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl lg:text-[100px]">
            Designed
            <br />
            to connect.
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`group relative overflow-hidden rounded-[32px] bg-white transition-all duration-[1400ms] ${
              isVisible
                ? "translate-x-0 scale-100 opacity-100"
                : "-translate-x-20 scale-90 opacity-0"
            }`}
          >
            <img
              src="/src/assets/images/7lineapdaptor.avif"
              alt="Dell 6-in-1 USB-C Multiport Adapter"
              className="aspect-square h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="absolute bottom-7 left-7 translate-y-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs uppercase tracking-[4px] text-white">
                Dell DA305
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-[1200ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <p className="text-sm uppercase tracking-[3px] text-black/40">
              Dell DA305
            </p>

            <h3 className="mt-5 text-5xl font-medium leading-tight tracking-tight md:text-6xl">
              Dell 6-in-1
              <br />
              USB-C Multiport
              <br />
              Adapter
            </h3>

            <div className="mt-8">
              <p className="text-lg text-black/40 line-through">
                ₹9,999/-*
              </p>

              <p className="mt-1 text-4xl font-medium">
                ₹1,999/-*
              </p>
            </div>

            <button
              onClick={() => setShowInfo(!showInfo)}
              className="group mt-8 flex items-center gap-4 rounded-full bg-black px-7 py-3 text-sm text-white transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-800"
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
                <div className="max-w-xl border-l border-black/20 pl-6">
                  <p className="text-lg leading-8 text-black/60">
                    Connect your laptop with multiple devices through a
                    compact USB-C multiport solution.
                  </p>

                  <p className="mt-5 text-sm uppercase tracking-[3px] text-black/40">
                    Dell DA305
                  </p>

                  <p className="mt-3 text-base leading-7 text-black/50">
                    Designed to make your everyday workspace more flexible
                    and connected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-6 h-px bg-black/20 transition-all duration-[1200ms] md:left-12 lg:left-20 ${
          isVisible
            ? "w-24 opacity-100"
            : "w-0 opacity-0"
        }`}
      />
    </section>
  );
}

export default Accessories;