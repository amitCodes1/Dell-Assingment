import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function Sustainability() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const { isLight } = useTheme();

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 35;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 25;

      setMouse({
        x,
        y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const imageY = (progress - 0.5) * -40;

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden px-6 py-24 sm:px-10 lg:px-20 ${
        isLight
          ? "bg-white text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gray-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        <div
          className={`mb-16 opacity-0 ${
            isVisible ? "opacity-100" : ""
          }`}
          style={{
            transform: `translate3d(
              ${mouse.x * 0.35}px,
              ${mouse.y * 0.35}px,
              0
            )`,
            transition:
              "transform 0.3s ease-out, opacity 1s ease-out",
          }}
        >
          <p
            className={`mb-5 text-xs uppercase tracking-[5px] ${
              isLight ? "text-gray-500" : "text-white/40"
            }`}
          >
            Designed Responsibly
          </p>

          <h2 className="premium-title text-5xl font-light leading-[0.88] sm:text-7xl md:text-8xl lg:text-[105px]">
            Built-in
            <br />
            sustainability.
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          <div
            className={`opacity-0 ${
              isVisible ? "opacity-100" : ""
            }`}
            style={{
              transform: `translate3d(
                ${mouse.x}px,
                ${mouse.y}px,
                0
              )`,
              transition:
                "transform 0.35s ease-out, opacity 1.2s ease-out",
            }}
          >
            <div
              className={`mb-8 h-px w-24 ${
                isLight
                  ? "bg-gray-900/30"
                  : "bg-white/30"
              }`}
            />

            <p
              className={`max-w-xl text-base leading-8 sm:text-lg ${
                isLight
                  ? "text-gray-600"
                  : "text-white/65"
              }`}
            >
              Designed with sustainability in mind, the
              Inspiron combines thoughtful materials with
              energy-efficient technology to create a more
              responsible computing experience.
            </p>

            <p
              className={`mt-6 max-w-xl text-sm leading-7 sm:text-base ${
                isLight
                  ? "text-gray-500"
                  : "text-white/40"
              }`}
            >
              Every detail is carefully considered to deliver
              performance while reducing environmental impact.
            </p>

            <div className="mt-10">
              <span
                className={`inline-block rounded-full border px-6 py-3 text-xs uppercase tracking-[3px] ${
                  isLight
                    ? "border-gray-900/20"
                    : "border-white/20"
                }`}
              >
                Better choices. Better future.
              </span>
            </div>
          </div>

          <div
            className={`opacity-0 ${
              isVisible ? "opacity-100" : ""
            }`}
            style={{
              transform: `translate3d(
                ${mouse.x * 0.5}px,
                ${mouse.y * 0.5}px,
                0
              )`,
              transition:
                "transform 0.4s ease-out, opacity 1.3s ease-out",
            }}
          >
            <div
              ref={imageRef}
              className="group relative overflow-hidden rounded-[30px]"
            >
              <img
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1600&auto=format&fit=crop&q=90"
                alt="Sustainable laptop design"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[520px]"
                style={{
                  transform: `translate3d(
                    ${mouse.x * 0.3}px,
                    ${imageY + mouse.y * 0.3}px,
                    0
                  ) scale(1.08)`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div
                className="absolute left-6 top-6 sm:left-8 sm:top-8"
                style={{
                  transform: `translate3d(
                    ${mouse.x * 0.8}px,
                    ${mouse.y * 0.8}px,
                    0
                  )`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <span className="rounded-full border border-white/30 bg-black/30 px-5 py-2 text-[10px] uppercase tracking-[3px] text-white backdrop-blur-md">
                  Sustainability
                </span>
              </div>

              <div
                className="absolute bottom-7 left-6 sm:left-8"
                style={{
                  transform: `translate3d(
                    ${mouse.x * 0.7}px,
                    ${mouse.y * 0.7}px,
                    0
                  )`,
                  transition: "transform 0.35s ease-out",
                }}
              >
                <p className="text-xs uppercase tracking-[4px] text-white/50">
                  Thoughtful by design
                </p>

                <h3 className="mt-2 text-3xl font-light text-white sm:text-5xl">
                  Better choices.
                  <br />
                  Better future.
                </h3>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-white transition-transform duration-1000 group-hover:scale-x-100" />
            </div>
          </div>

        </div>

        <div
          className={`mt-20 h-px ${
            isLight
              ? "bg-gray-900/10"
              : "bg-white/10"
          }`}
          style={{
            transform: `scaleX(${isVisible ? 1 : 0})`,
            transformOrigin: "left",
            transition:
              "transform 1.5s ease-out",
          }}
        />

        <div
          className={`mt-6 flex justify-between text-[10px] uppercase tracking-[3px] ${
            isLight
              ? "text-gray-400"
              : "text-white/25"
          }`}
        >
          <span>Inspiron 14 Plus 2-in-1</span>

          <span>Designed responsibly</span>
        </div>

      </div>
    </section>
  );
}

export default Sustainability;