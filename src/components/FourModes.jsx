import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useReveal from "../hooks/useReveal";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function FourModes() {
  const [sectionRef, isVisible] = useReveal();
  const [scrollRef, progress] = useScrollAnimation();
  const [activeMode, setActiveMode] = useState(null);
  const { isLight } = useTheme();

  const modes = [
    {
      number: "01",
      title: "Laptop",
      description:
        "Classic laptop mode for deep focus, productivity, and everyday tasks with comfort.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "02",
      title: "Tent",
      description:
        "Flip into tent mode for immersive movies, binge sessions, or effortless presentations.",
      image:
        "https://images.unsplash.com/photo-1763162139130-240507e9fad5?w=1200&auto=format&fit=crop&q=85",
    },
    {
      number: "03",
      title: "Stand",
      description:
        "Stand mode gives you the perfect angle for video calls, streaming, and hands‑free viewing.",
      image:
        "https://images.unsplash.com/photo-1709536777126-238639005f7a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      number: "04",
      title: "Tablet",
      description:
        "Fold it flat into tablet mode and enjoy touch, sketching, and browsing with total freedom.",
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const sectionOffset = (progress - 0.5) * -35;

  return (
    <section
      id="modes"
      ref={sectionRef}
      className={`relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32 ${
        isLight ? "bg-gray-100 text-gray-900" : "bg-black text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`mb-4 text-[10px] uppercase tracking-[3px] sm:text-xs sm:tracking-[5px] ${
              isLight ? "text-gray-500" : "text-white/50"
            }`}
          >
            One device. Endless possibilities.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-4xl text-4xl font-light leading-[0.95] tracking-[-1.5px] sm:text-6xl md:text-7xl lg:text-[92px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x"
          >
            Powered by
            <br />
            four modes.
          </motion.h2>
        </motion.div>

        <motion.div
          ref={scrollRef}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {modes.map((mode, index) => {
            const isActive = activeMode === index;
            return (
              <motion.div
                key={mode.number}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                onClick={() => setActiveMode(isActive ? null : index)}
                className={`group cursor-pointer overflow-hidden rounded-2xl border sm:rounded-3xl ${
                  isLight
                    ? "border-gray-900/10 bg-white"
                    : "border-white/10 bg-white/[0.02]"
                }`}
                style={{
                  transform: isVisible
                    ? `translate3d(0, ${
                        sectionOffset * (index % 2 === 0 ? 0.35 : 0.2)
                      }px, 0)`
                    : undefined,
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={mode.image}
                    alt={mode.title}
                    className="h-full w-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <motion.div
                    whileHover={{ y: 2 }}
                    className="absolute left-4 top-4 sm:left-5 sm:top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] tracking-[2px] text-white/70 backdrop-blur-md"
                  >
                    {mode.number}
                  </motion.div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-light sm:text-2xl">
                      {mode.title}
                    </h3>
                    <motion.span
                      animate={isActive ? { rotate: 45 } : { rotate: 0 }}
                      transition={{ duration: 0.5 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg ${
                        isLight ? "border-gray-900/20" : "border-white/20"
                      }`}
                    >
                      +
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-4"
                      >
                        <p
                          className={`text-sm leading-6 ${
                            isLight ? "text-gray-500" : "text-white/50"
                          }`}
                        >
                          {mode.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default FourModes;
