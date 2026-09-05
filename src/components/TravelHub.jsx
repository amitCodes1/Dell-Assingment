import { useState } from "react";
import useReveal from "../hooks/useReveal";

function TravelHub() {
  const [sectionRef, isVisible] = useReveal();
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <video
        src="/videos/travelHub.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

      <div className="relative z-10 flex min-h-screen items-end px-6 pb-20 sm:px-10 lg:px-20 lg:pb-24">
        <div
          className={`max-w-4xl transition-all duration-[1300ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <p className="mb-5 text-xs uppercase tracking-[5px] text-white/50">
            Built for movement
          </p>

          <h2 className="premium-title text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[110px]">
            Your hub.
            <br />
            Anywhere.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/65">
            A compact travel solution designed to keep
            your devices connected wherever your work
            takes you.
          </p>

          {showMore && (
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              Connect multiple devices through a single
              convenient USB-C hub and keep your workspace
              simple while travelling.
            </p>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="group mt-8 flex items-center gap-4 rounded-full border border-white/40 px-7 py-3.5 text-sm transition-all duration-500 hover:bg-white hover:text-black"
          >
            {showMore ? "SHOW LESS" : "KNOW MORE"}

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TravelHub;