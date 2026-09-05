import { useState } from "react";
import useReveal from "./hooks/useReveal";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function AIExperience() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const [showAI, setShowAI] = useState(false);
  const { isLight } = useTheme();

  const imageScale = 1.12 - progress * 0.12;
  const imageY = (progress - 0.5) * -40;

  const aiFeatures = [
    {
      number: "01",
      title: "On-device AI",
      text: "Experience intelligent features powered directly on your device.",
    },
    {
      number: "02",
      title: "Copilot+ PC",
      text: "Get next-generation AI experiences designed for everyday productivity.",
    },
    {
      number: "03",
      title: "Smart Performance",
      text: "Powerful processing adapts to your workflow for a smoother experience.",
    },
  ];

  return (
    <section
      id="ai"
      ref={sectionRef}
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-700 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32 ${
        isLight
          ? "bg-gray-100 text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <p
              className={`mb-4 text-[10px] uppercase tracking-[3px] transition-colors duration-700 sm:text-xs sm:tracking-[5px] ${
                isLight
                  ? "text-gray-500"
                  : "text-white/50"
              }`}
            >
              Intelligent by design
            </p>

            <div className="overflow-hidden">
              <h2
                className={`max-w-xl text-4xl font-light leading-[0.95] tracking-[-1.5px] transition-all duration-[1200ms] sm:text-6xl sm:tracking-[-2px] md:text-7xl lg:text-[88px] ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-20 scale-105 opacity-0"
                }`}
              >
                New AI
                <br />
                experiences.
              </h2>
            </div>

            <div
              className={`mt-7 h-px w-16 transition-all duration-1000 sm:mt-9 sm:w-24 ${
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
              Sleek 14-inch 2-in-1 with on-device Copilot+ powered by Intel
              Core Ultra processors, with stunning performance that powers
              the newest AI experiences.
            </p>

            <button
              onClick={() => setShowAI(!showAI)}
              className={`group mt-7 flex items-center gap-4 rounded-full border px-6 py-3 text-xs transition-all duration-500 sm:mt-9 sm:px-7 sm:py-3.5 sm:text-sm ${
                isLight
                  ? "border-gray-900/40 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-white/50 text-white hover:bg-white hover:text-black"
              }`}
            >
              <span>{showAI ? "SHOW LESS" : "EXPLORE AI"}</span>

              <span
                className={`text-lg transition-transform duration-500 ${
                  showAI
                    ? "rotate-45"
                    : "group-hover:translate-x-1"
                }`}
              >
                +
              </span>
            </button>
          </div>

          <div
            ref={imageRef}
            className={`relative transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=85"
                alt="Laptop AI experience"
                style={{
                  transform: `translate3d(0, ${imageY}px, 0) scale(${imageScale})`,
                }}
                className="h-full w-full object-cover object-center will-change-transform transition-transform duration-100 ease-out group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] uppercase tracking-[3px] text-white/60 sm:text-xs sm:tracking-[4px]">
                  AI POWERED
                </p>

                <p className="mt-2 text-lg font-light text-white sm:text-2xl">
                  Intelligence that works with you.
                </p>
              </div>

              <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2 text-[9px] text-white backdrop-blur-md sm:right-7 sm:top-7 sm:text-xs">
                COPILOT+
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid transition-all duration-700 ${
            showAI
              ? "mt-12 grid-rows-[1fr] opacity-100 sm:mt-16"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid gap-4 md:grid-cols-3">
              {aiFeatures.map((feature, index) => (
                <div
                  key={feature.number}
                  className={`group rounded-2xl border p-5 transition-all duration-700 sm:rounded-3xl sm:p-6 ${
                    isLight
                      ? "border-gray-900/10 bg-white hover:border-gray-900/20"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  } ${
                    showAI
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs transition-colors duration-700 ${
                        isLight
                          ? "text-gray-400"
                          : "text-white/30"
                      }`}
                    >
                      {feature.number}
                    </span>

                    <span className="text-xl transition-transform duration-500 group-hover:rotate-90">
                      +
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-light sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-6 transition-colors duration-700 ${
                      isLight
                        ? "text-gray-500"
                        : "text-white/40"
                    }`}
                  >
                    {feature.text}
                  </p>

                  <div
                    className={`mt-6 h-px w-full origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100 ${
                      isLight
                        ? "bg-gray-900/30"
                        : "bg-white/30"
                    }`}
                  />
                </div>
              ))}
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

export default AIExperience;