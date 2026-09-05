import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

function AIExperience() {
  const [sectionRef, isVisible] = useReveal();
  const [active, setActive] = useState(0);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

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

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 30;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: `
            translate3d(
              ${mouse.x * 0.25}px,
              ${mouse.y * 0.25}px,
              0
            )
            scale(1.08)
          `,
          transition: "transform 0.35s ease-out",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-28 sm:px-10 lg:px-20">

        <div
          className={`max-w-5xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          style={{
            transform: `
              translate3d(
                ${mouse.x * 0.8}px,
                ${mouse.y * 0.8}px,
                0
              )
            `,
            transition:
              "transform 0.35s ease-out, opacity 1.3s ease-out",
          }}
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
          className={`mt-16 grid max-w-5xl gap-4 md:grid-cols-3 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
          style={{
            transform: `
              translate3d(
                ${mouse.x * 0.45}px,
                ${mouse.y * 0.45}px,
                0
              )
            `,
            transition:
              "transform 0.45s ease-out, opacity 1s ease-out",
          }}
        >
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setActive(index)}
              className={`group relative overflow-hidden rounded-3xl border p-6 text-left backdrop-blur-xl transition-all duration-700 ${
                active === index
                  ? "border-white/50 bg-white/15 shadow-2xl"
                  : "border-white/10 bg-black/20 hover:-translate-y-3 hover:border-white/30 hover:bg-white/10"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div
                className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-700 ${
                  active === index
                    ? "scale-150 opacity-100"
                    : "scale-75 opacity-0 group-hover:scale-125 group-hover:opacity-100"
                }`}
              />

              <div className="relative z-10">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-xs tracking-[3px] text-white/40">
                    0{index + 1}
                  </span>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-lg transition-all duration-500 ${
                      active === index
                        ? "rotate-45 bg-white text-black"
                        : "group-hover:rotate-90 group-hover:bg-white group-hover:text-black"
                    }`}
                  >
                    +
                  </span>
                </div>

                <h3 className="text-xl font-medium transition-transform duration-500 group-hover:translate-x-2">
                  {feature.title}
                </h3>

                <div
                  className={`grid transition-all duration-700 ${
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

                <div
                  className={`mt-6 h-px bg-white/20 transition-all duration-700 ${
                    active === index
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-8 right-6 z-10 text-xs uppercase tracking-[4px] text-white/30 sm:right-10 lg:right-20"
        style={{
          transform: `
            translate3d(
              ${mouse.x * 0.6}px,
              ${mouse.y * 0.6}px,
              0
            )
          `,
          transition: "transform 0.35s ease-out",
        }}
      >
        AI Experience
      </div>
    </section>
  );
}

export default AIExperience;