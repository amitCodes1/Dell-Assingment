import { useState } from "react";
import useReveal from "../hooks/useReveal";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function FourModes() {
  const [sectionRef, isVisible] = useReveal();
  const [scrollRef, progress] = useScrollAnimation();
  const [activeMode, setActiveMode] = useState(null);
  const { isLight } = useTheme();

  const modes = [
    {
      number: "01",
      title: "Laptop",
      description:
        "Traditional laptop mode for everyday work, browsing and productivity.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "02",
      title: "Tent",
      description:
        "Position your device in tent mode for presentations, entertainment and hands-free viewing.",
      image:
        "https://images.unsplash.com/photo-1763162139130-240507e9fad5?w=1200&auto=format&fit=crop&q=85",
    },
    {
      number: "03",
      title: "Stand",
      description:
        "Stand mode gives you a comfortable angle for watching content and video calls.",
      image:
        "https://images.unsplash.com/photo-1709536777126-238639005f7a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      number: "04",
      title: "Tablet",
      description:
        "Fold it all the way back and enjoy a flexible touchscreen tablet experience.",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const sectionOffset = (progress - 0.5) * -35;

  return (
    <section
      id="modes"
      ref={sectionRef}
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-700 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32 ${
        isLight
          ? "bg-gray-100 text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-12 transition-all duration-1000 sm:mb-16 md:mb-20 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <p
            className={`mb-4 text-[10px] uppercase tracking-[3px] transition-colors duration-700 sm:text-xs sm:tracking-[5px] ${
              isLight
                ? "text-gray-500"
                : "text-white/50"
            }`}
          >
            One device. Four possibilities.
          </p>

          <h2 className="max-w-4xl text-4xl font-light leading-[0.95] tracking-[-1.5px] sm:text-6xl sm:tracking-[-2px] md:text-7xl lg:text-[92px]">
            Powered by
            <br />
            four modes.
          </h2>
        </div>

        <div
          ref={scrollRef}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {modes.map((mode, index) => {
            const isActive = activeMode === index;

            return (
              <div
                key={mode.number}
                onClick={() =>
                  setActiveMode(isActive ? null : index)
                }
                className={`group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-700 sm:rounded-3xl ${
                  isLight
                    ? "border-gray-900/10 bg-white"
                    : "border-white/10 bg-white/[0.02]"
                } ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-20 scale-95 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 130}ms`,
                  transform: isVisible
                    ? `translate3d(0, ${
                        sectionOffset * (index % 2 === 0 ? 0.35 : 0.2)
                      }px, 0) scale(1)`
                    : undefined,
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={mode.image}
                    alt={mode.title}
                    className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 group-hover:opacity-80" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] tracking-[2px] text-white/70 backdrop-blur-md transition-all duration-500 group-hover:translate-y-1 group-hover:bg-white group-hover:text-black sm:left-5 sm:top-5">
                    {mode.number}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-70 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-5 sm:left-5 sm:right-5">
                    <span className="text-[9px] uppercase tracking-[3px] text-white/60">
                      360° Flexibility
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-light transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl">
                      {mode.title}
                    </h3>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-500 ${
                        isLight
                          ? "border-gray-900/20"
                          : "border-white/20"
                      } ${
                        isActive
                          ? "rotate-45"
                          : "group-hover:rotate-90"
                      }`}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className={`grid transition-all duration-500 ${
                      isActive
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`text-sm leading-6 transition-colors duration-700 ${
                          isLight
                            ? "text-gray-500"
                            : "text-white/50"
                        }`}
                      >
                        {mode.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-12 flex items-center gap-4 transition-all delay-500 duration-1000 sm:mt-16 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span
            className={`h-px w-12 transition-all duration-1000 sm:w-20 ${
              isLight
                ? "bg-gray-900/30"
                : "bg-white/30"
            } ${
              isVisible
                ? "scale-x-100"
                : "scale-x-0"
            }`}
          />

          <p
            className={`text-[9px] uppercase tracking-[3px] transition-colors duration-700 sm:text-xs sm:tracking-[4px] ${
              isLight
                ? "text-gray-400"
                : "text-white/40"
            }`}
          >
            Flexibility without compromise
          </p>
        </div>
      </div>
    </section>
  );
}

export default FourModes;