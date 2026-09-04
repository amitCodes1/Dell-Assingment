import { useState } from "react";
import useReveal from "./hooks/useReveal";

function AIExperience() {
  const [sectionRef, isVisible] = useReveal();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      ref={sectionRef}
      id="ai"
      className="relative min-h-screen overflow-hidden bg-white px-6 py-24 text-black md:px-12 lg:px-20"
    >
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <div>
            <div
              className={`overflow-hidden transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-sm uppercase tracking-[4px] text-black/50">
                New AI experiences
              </p>
            </div>

            <div className="mt-6 overflow-hidden">
            <h2
  className={`text-5xl font-light leading-[0.95] tracking-[-2px] transition-all duration-1000 sm:text-6xl md:text-8xl ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-16 opacity-0"
  }`}
>
  Smarter
  <br />
  performance.
</h2>
            </div>

            <p
              className={`mt-8 max-w-xl text-lg leading-8 text-black/60 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Experience powerful performance designed for the newest
              generation of AI experiences.
            </p>

           <div
  className={`mt-8 transition-all delay-400 duration-1000 ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  }`}
>
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="group mt-10 flex items-center gap-4 rounded-full bg-black px-7 py-3.5 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
              >
                <span>{showInfo ? "CLOSE" : "EXPLORE AI"}</span>

                <span
                  className={`text-lg transition-transform duration-500 ${
                    showInfo
                      ? "rotate-45"
                      : "group-hover:translate-x-2"
                  }`}
                >
                  +
                </span>
              </button>
            </div>

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
                    Sleek 14-inch 2-in-1 with on-device Copilot+ powered by
                    Intel® Core™ Ultra processors, with stunning performance
                    that powers the newest AI experiences.
                  </p>

                  <p className="mt-5 text-sm uppercase tracking-[3px] text-black/40">
                    On-device AI
                  </p>

                  <p className="mt-3 text-base leading-7 text-black/50">
                    Experience smarter performance designed to support the
                    newest AI experiences while keeping everyday tasks fast
                    and responsive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-[1400ms] ${
              isVisible
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-20 scale-90 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="group relative aspect-square overflow-hidden rounded-[32px] bg-neutral-100">
              <img
                src="/src/assets/images/this2.webp"
                alt="Dell Inspiron Laptop"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="absolute bottom-6 left-6 translate-y-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[3px] text-white">
                  On-device AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-6 h-px bg-black/20 transition-all duration-[1500ms] md:left-12 lg:left-20 ${
          isVisible ? "w-24 opacity-100" : "w-0 opacity-0"
        }`}
      />
    </section>
  );
}

export default AIExperience;