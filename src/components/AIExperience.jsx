import { useState } from "react";
import useReveal from "../hooks/useReveal";

function AIExperience() {
  const [sectionRef, isVisible] = useReveal();
  const [active, setActive] = useState(0);

  const features = [
    {
      title: "On-device AI",
      text: "Powerful AI experiences designed to work directly on your device.",
    },
    {
      title: "Copilot+",
      text: "Get smarter assistance and productivity features with Copilot+ experiences.",
    },
    {
      title: "Intel Core Ultra",
      text: "Experience responsive performance for demanding everyday tasks.",
    },
  ];

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-neutral-950 text-white"
    >
      <video
        src="/videos/video2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-28 sm:px-10 lg:px-20">
        <div
          className={`max-w-5xl transition-all duration-[1300ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <p className="mb-5 text-xs uppercase tracking-[5px] text-white/50">
            Intelligence built in
          </p>

          <h2 className="premium-title text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[110px]">
            New AI
            <br />
            experiences.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Sleek 14-inch 2-in-1 with on-device Copilot+
            powered by Intel® Core™ Ultra processors, with
            stunning performance that powers the newest AI
            experiences.
          </p>
        </div>

        <div
          className={`mt-16 grid max-w-5xl gap-3 transition-all delay-300 duration-1000 md:grid-cols-3 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setActive(index)}
              className={`group rounded-2xl border p-6 text-left backdrop-blur-md transition-all duration-500 ${
                active === index
                  ? "border-white/50 bg-white/15"
                  : "border-white/10 bg-black/20 hover:border-white/30"
              }`}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs text-white/40">
                  0{index + 1}
                </span>

                <span
                  className={`transition-transform duration-500 ${
                    active === index
                      ? "rotate-45"
                      : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>

              <h3 className="text-xl font-medium">
                {feature.title}
              </h3>

              <div
                className={`grid transition-all duration-500 ${
                  active === index
                    ? "mt-4 grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-6 text-white/60">
                    {feature.text}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIExperience;