import { useState } from "react";
import useReveal from "../hooks/useReveal";

function XpsSection() {
  const [sectionRef, isVisible] = useReveal();
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="xps"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <video
        src="/videos/laptop.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:px-20">
        <div
          className={`max-w-5xl transition-all duration-[1400ms] ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          <p className="mb-5 text-xs uppercase tracking-[5px] text-white/50">
            Premium performance
          </p>

          <h2 className="premium-title text-[100px] font-light leading-[0.7] tracking-[-8px] sm:text-[150px] md:text-[200px] lg:text-[280px]">
            XPS
          </h2>

          <p className="mt-10 max-w-xl text-base leading-7 text-white/65">
            A premium experience created for people who
            expect powerful performance wrapped in an
            elegant design.
          </p>

          <p
            className={`grid max-w-xl overflow-hidden text-sm leading-7 text-white/50 transition-all duration-500 ${
              showMore
                ? "mt-4 max-h-40"
                : "mt-0 max-h-0"
            }`}
          >
            The XPS lineup combines refined materials,
            modern performance and an immersive display
            experience.
          </p>

          <button
            onClick={() => setShowMore(!showMore)}
            className="group mt-8 flex items-center gap-4 rounded-full border border-white/40 px-7 py-3.5 text-sm transition-all duration-500 hover:bg-white hover:text-black"
          >
            {showMore ? "SHOW LESS" : "KNOW MORE"}

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>

          <div className="mt-8 flex flex-col gap-2 text-sm text-white/50">
            <span>Starting from ₹53,364*</span>
            <span>EMI starting at ₹2,224*</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default XpsSection;