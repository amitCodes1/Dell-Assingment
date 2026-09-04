import { useState } from "react";
import useReveal from "./hooks/useReveal";

function FourModes() {
  const [sectionRef, isVisible] = useReveal();
  const [activeMode, setActiveMode] = useState(null);

  const modes = [
    {
      number: "01",
      title: "Laptop",
      image: "/src/assets/images/laptopformodes.jpg",
      description:
        "Use the classic laptop mode for everyday work, browsing, productivity and multitasking.",
    },
    {
      number: "02",
      title: "Tablet",
      image: "/src/assets/images/tablet.jpg",
      description:
        "Fold the display back into tablet mode for a more natural way to browse, read, create and enjoy content.",
    },
    {
      number: "03",
      title: "Tent",
      image: "/src/assets/images/tent2.png",
      description:
        "Tent mode is ideal for watching videos, presentations and hands-free entertainment.",
    },
    {
      number: "04",
      title: "Stand",
      image: "/src/assets/images/stand.jpg",
      description:
        "Stand mode keeps the display elevated and gives you a comfortable viewing experience for content and presentations.",
    },
  ];

  const handleModeClick = (title) => {
    setActiveMode(activeMode === title ? null : title);
  };

  return (
    <section
      ref={sectionRef}
      id="modes"
      className="min-h-screen bg-black px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-16 transition-all duration-[1200ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <p className="mb-5 text-sm uppercase tracking-[4px] text-white/50">
            Designed to adapt
          </p>

          <h2 className="text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl lg:text-[110px]">
            Powered by
            <br />
            four modes
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {modes.map((mode, index) => {
            const isActive = activeMode === mode.title;

            return (
              <div
                key={mode.title}
                className={`group relative overflow-hidden rounded-[32px] transition-all duration-[1200ms] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <img
                  src={mode.image}
                  alt={`Dell 2-in-1 ${mode.title} mode`}
                  className={`h-[500px] w-full object-cover transition-transform duration-[1500ms] ease-out ${
                    isActive
                      ? "scale-110"
                      : "scale-100 group-hover:scale-110"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div
                  className={`absolute inset-x-0 bottom-0 p-8 transition-all duration-700 ${
                    isActive ? "pb-8" : "group-hover:pb-10"
                  }`}
                >
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <span className="text-sm text-white/50">
                        {mode.number}
                      </span>

                      <h3 className="mt-2 text-5xl font-medium tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
                        {mode.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleModeClick(mode.title)}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black"
                    >
                      <span
                        className={`text-2xl transition-transform duration-500 ${
                          isActive ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                  </div>

                  <div
                    className={`grid transition-all duration-700 ${
                      isActive
                        ? "mt-6 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/20 pt-5">
                        <p className="max-w-xl text-base leading-7 text-white/65">
                          {mode.description}
                        </p>

                        <p className="mt-4 text-xs uppercase tracking-[3px] text-white/40">
                          Dell 2-in-1 Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute inset-0 border border-white/0 transition-all duration-700 ${
                    isActive
                      ? "border-white/30"
                      : "group-hover:border-white/20"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FourModes;