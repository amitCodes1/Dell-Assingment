import useReveal from "../hooks/useReveal";

function SpecialOffers() {
  const [sectionRef, isVisible] = useReveal();

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="offers"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <video
        src="/videos/headphone.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-28 text-center">
        <div
          className={`max-w-4xl transition-all duration-[1400ms] ${
            isVisible
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0"
          }`}
        >
          <p className="text-xs uppercase tracking-[5px] text-white/50">
            Special offers
          </p>

          <h2 className="premium-title mt-6 text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[110px]">
            Something
            <br />
            special.
          </h2>

          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15">
            <p className="text-sm uppercase tracking-[3px] text-white/50">
              JBL Tune 770NC
            </p>

            <p className="mt-6 text-4xl font-light">
              ₹1,999/-
            </p>

            <p className="mt-2 text-sm text-white/45">
              Worth ₹9,999/-*
            </p>

            <button className="mt-8 rounded-full bg-white px-8 py-3 text-sm text-black transition-all duration-300 hover:scale-105">
              Shop Offer
            </button>
          </div>

          <button
            onClick={backToTop}
            className="group mt-12 flex mx-auto items-center gap-4 text-xs uppercase tracking-[3px] text-white/50 transition-colors hover:text-white"
          >
            Back to top

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </button>
        </div>
      </div>

      <footer className="absolute bottom-6 left-0 z-10 w-full px-6 text-center text-xs text-white/30">
        © 2025 Dell Inc. All Rights Reserved. T&Cs apply.
      </footer>
    </section>
  );
}

export default SpecialOffers;