import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="max-w-4xl"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-5 text-xs uppercase tracking-[5px] text-white/50"
          >
            Built for movement
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="premium-title text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[110px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x"
          >
            Your hub.
            <br />
            Anywhere.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 max-w-xl text-base leading-7 text-white/65"
          >
            A compact travel solution designed to keep your devices connected wherever your work takes you.
          </motion.p>

          <AnimatePresence>
            {showMore && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-5 max-w-xl text-sm leading-7 text-white/50"
              >
                Connect multiple devices through a single convenient USB-C hub and keep your workspace simple while travelling.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group mt-8 flex items-center gap-4 rounded-full border border-white/40 px-7 py-3.5 text-sm"
          >
            {showMore ? "SHOW LESS" : "KNOW MORE"}
            <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default TravelHub;
