import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"
      />

      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-5 text-xs uppercase tracking-[5px] text-white/50"
          >
            Premium performance
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="premium-title text-[100px] font-light leading-[0.7] tracking-[-8px] sm:text-[150px] md:text-[200px] lg:text-[280px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x"
          >
            XPS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-10 max-w-xl text-base leading-7 text-white/65"
          >
            A premium experience created for people who
            expect powerful performance wrapped in an
            elegant design.
          </motion.p>

          <AnimatePresence>
            {showMore && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-4 max-w-xl text-sm leading-7 text-white/50"
              >
                The XPS lineup combines refined materials,
                modern performance and an immersive display
                experience.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group mt-8 flex items-center gap-4 rounded-full border border-white/40 px-7 py-3.5 text-sm transition-all duration-500"
          >
            {showMore ? "SHOW LESS" : "KNOW MORE"}
            <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              →
            </motion.span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex flex-col gap-2 text-sm text-white/50"
          >
            <span>Starting from ₹53,364*</span>
            <span>EMI starting at ₹2,224*</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default XpsSection;
