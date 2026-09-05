import useReveal from "../hooks/useReveal";

function Accessories() {
  const [sectionRef, isVisible] = useReveal();

  const products = [
    {
      name: "Dell 6-in-1 USB-C Multiport Adapter",
      model: "DA305",
      price: "₹1,999/-*",
    },
    {
      name: "Dell Pro 7-in-1 USB-C Travel Hub",
      model: "DA326",
      price: "₹1,999/-*",
    },
  ];

  return (
    <section
      id="accessories"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-neutral-950 text-white"
    >
      <video
        src="/videos/adaptor.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto min-h-screen max-w-[1600px] px-6 py-28 sm:px-10 lg:px-20">
        <div
          className={`transition-all duration-[1200ms] ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <p className="text-xs uppercase tracking-[5px] text-white/50">
            Accessories
          </p>

          <h2 className="premium-title mt-5 text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[110px]">
            Complete
            <br />
            your setup.
          </h2>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={product.model}
              className={`group min-h-80 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-white/30 hover:bg-white/10 sm:p-10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs text-white/40">
                  {product.model}
                </span>

                <span className="text-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                  ↗
                </span>
              </div>

              <div className="mt-28">
                <h3 className="max-w-lg text-2xl font-light sm:text-3xl">
                  {product.name}
                </h3>

                <p className="mt-5 text-sm text-white/50">
                  Special price {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accessories;