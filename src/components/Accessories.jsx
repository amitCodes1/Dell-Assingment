import useReveal from "../hooks/useReveal";

function Accessories() {
  const [sectionRef, isVisible] = useReveal();

  const products = [
    {
      model: "DA305",
      name: "Dell 6-in-1 USB-C Multiport Adapter",
      price: "₹1,999/-*",
      oldPrice: "₹9,999/-*",
      image: "/images/adaptor.jpg",
    },
    {
      model: "DA326",
      name: "Dell Pro 7-in-1 USB-C Travel Hub",
      price: "₹1,999/-*",
      oldPrice: "₹9,999/-*",
      image: "/images/7lineapdaptor.avif",
    },
  ];

  return (
    <section
      id="accessories"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <video
        src="/videos/adaptor.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-xs uppercase tracking-[5px] text-white/50">
            Accessories
          </p>

          <h2 className="premium-title mt-5 text-5xl font-light leading-none sm:text-6xl md:text-7xl">
            Complete
            <br />
            your setup.
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-6 text-white/60">
            Designed to keep your workspace connected, organized and ready
            for whatever comes next.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={product.model}
              className={`group relative overflow-hidden rounded-3xl bg-white transition-all duration-700 hover:-translate-y-2 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative h-[420px] overflow-hidden sm:h-[500px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-black/70 px-4 py-2 text-xs text-white backdrop-blur-md">
                    {product.model}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <p className="text-xs uppercase tracking-[3px] text-white/60">
                    Dell Accessories
                  </p>

                  <h3 className="mt-3 text-2xl font-light sm:text-3xl">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-lg font-medium">
                      {product.price}
                    </span>

                    <span className="text-sm text-white/50 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <button className="mt-6 rounded-full border border-white/40 px-6 py-3 text-xs uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black">
                    Know More
                  </button>
                </div>

                <div className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accessories;