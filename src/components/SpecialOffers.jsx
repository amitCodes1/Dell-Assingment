import { motion } from "framer-motion";
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
      {/* Background video */}
      <video
        src="/videos/headphone.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-black/50 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

      {/* Animated content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs uppercase tracking-[5px] text-white/50"
          >
            Special offers
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="premium-title mt-6 text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[110px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
          >
            Something
            <br />
            special.
          </motion.h2>

          {/* Offer card */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto mt-10 max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl shadow-lg"
          >
            <p className="text-sm uppercase tracking-[3px] text-white/50">
              JBL Tune 770NC
            </p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-6 text-4xl font-light"
            >
              ₹1,999/-
            </motion.p>

            <p className="mt-2 text-sm text-white/45">Worth ₹9,999/-*</p>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#fff" }}
              className="mt-8 rounded-full bg-white px-8 py-3 text-sm text-black transition-all duration-300"
            >
              Shop Offer
            </motion.button>
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={backToTop}
            whileHover={{ y: -5, color: "#fff" }}
            className="group mt-12 flex mx-auto items-center gap-4 text-xs uppercase tracking-[3px] text-white/50"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-0 z-10 w-full px-6 text-center text-xs text-white/30">
        © 2025 Dell Inc. All Rights Reserved. T&Cs apply.
      </footer>
    </section>
  );
}

export default SpecialOffers;
