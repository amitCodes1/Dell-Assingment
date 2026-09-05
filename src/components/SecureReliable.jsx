import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";
import useScrollAnimation from "../hooks/useScrollAnimation";

function SecureReliable() {
  const [sectionRef, isVisible] = useReveal();
  const [videoRef, progress] = useScrollAnimation();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showMore, setShowMore] = useState(false);

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

  const videoScale = 1.08 - progress * 0.08;
  const scrollY = (progress - 0.5) * -30;

  return (
    <section
      id="secure"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <div
        ref={videoRef}
        className="absolute inset-0 overflow-hidden"
      >
        <video
          src="/videos/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          style={{
            transform: `
              translate3d(
                ${mouse.x * 0.35}px,
                ${scrollY + mouse.y * 0.35}px,
                0
              )
              scale(${videoScale})
            `,
            transition: "transform 0.25s ease-out",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-6 sm:px-10 lg:px-20">
          <div
            className={`max-w-3xl ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            style={{
              transform: `
                translate3d(
                  ${mouse.x}px,
                  ${mouse.y}px,
                  0
                )
              `,
              transition:
                "transform 0.3s ease-out, opacity 1.2s ease-out",
            }}
          >
            <p className="mb-5 text-xs uppercase tracking-[4px] text-white/50">
              Inspiron 14 Plus 2-in-1
            </p>

            <h2 className="premium-title text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[105px]">
              Secure and
              <br />
              reliable
            </h2>

            <div
              className={`mt-8 h-px bg-white/50 transition-all duration-1000 ${
                isVisible ? "w-24" : "w-0"
              }`}
            />

            <p
              className={`mt-8 max-w-xl text-base leading-7 text-white/70 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Designed to keep your data protected while
              delivering reliable performance for work,
              creativity and everyday productivity.
            </p>

            <div
              className={`grid transition-all duration-700 ${
                showMore
                  ? "mt-5 grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-xl text-sm leading-7 text-white/55">
                  Experience a premium 2-in-1 design with
                  intelligent features, powerful performance
                  and the flexibility to work from anywhere.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="group mt-9 flex items-center gap-4 rounded-full border border-white/40 px-7 py-3.5 text-sm transition-all duration-500 hover:bg-white hover:text-black"
            >
              {showMore ? "SHOW LESS" : "KNOW MORE"}

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-6 z-10 text-xs uppercase tracking-[4px] text-white/40 sm:left-10 lg:left-20"
        style={{
          transform: `translate3d(${mouse.x * 0.5}px, ${mouse.y * 0.5}px, 0)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        Dell Inspiron
      </div>
    </section>
  );
}

export default SecureReliable;