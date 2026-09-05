import { motion } from "framer-motion";
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
      {/* Background video */}
      <video
        src="/videos/adaptor.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Animated overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-xs uppercase tracking-[5px] text-white/50">
            Accessories
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="premium-title mt-5 text-5xl font-light leading-none sm:text-6xl md:text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
          >
            Complete
            <br />
            your setup.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-6 max-w-lg text-sm leading-6 text-white/60"
          >
            Designed to keep your workspace connected, organized and ready
            for whatever comes next.
          </motion.p>
        </motion.div>

        {/* Product cards */}
        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.model}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="group relative overflow-hidden rounded-3xl bg-white text-black shadow-lg"
            >
              <div className="relative h-[420px] sm:h-[500px]">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-6 top-6"
                >
                  <span className="rounded-full bg-black/70 px-4 py-2 text-xs text-white backdrop-blur-md">
                    {product.model}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8"
                >
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

                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                    className="mt-6 rounded-full border border-white/40 px-6 py-3 text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    Know More
                  </motion.button>
                </motion.div>

                <motion.div
                  whileHover={{ rotate: 90 }}
                  className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black"
                >
                  ↗
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Accessories;
