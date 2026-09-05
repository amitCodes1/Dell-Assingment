import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function Sustainability() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const { isLight } = useTheme();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 35;
      const y = (event.clientY / window.innerHeight - 0.5) * 25;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const imageY = (progress - 0.5) * -40;

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden px-6 py-24 sm:px-10 lg:px-20 ${
        isLight ? "bg-white text-gray-900" : "bg-black text-white"
      }`}
    >
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gray-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          style={{
            transform: `translate3d(${mouse.x * 0.35}px, ${mouse.y * 0.35}px, 0)`,
          }}
          className="mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`mb-5 text-xs uppercase tracking-[5px] ${
              isLight ? "text-gray-500" : "text-white/40"
            }`}
          >
            Designed Responsibly
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="premium-title text-5xl font-light leading-[0.88] sm:text-7xl md:text-8xl lg:text-[105px] bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
          >
            Built-in
            <br />
            sustainability.
          </motion.h2>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            style={{
              transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)`,
            }}
          >
            <div className={`mb-8 h-px w-24 ${isLight ? "bg-gray-900/30" : "bg-white/30"}`} />
            <p className={`max-w-xl text-base leading-8 sm:text-lg ${isLight ? "text-gray-600" : "text-white/65"}`}>
              Designed with sustainability in mind, the Inspiron combines thoughtful materials with energy-efficient technology to create a more responsible computing experience.
            </p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 1 }}
              className={`mt-6 max-w-xl text-sm leading-7 sm:text-base ${isLight ? "text-gray-500" : "text-white/40"}`}
            >
              Every detail is carefully considered to deliver performance while reducing environmental impact.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-10 inline-block rounded-full border px-6 py-3 text-xs uppercase tracking-[3px]"
            >
              Better choices. Better future.
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 1 }}
            style={{
              transform: `translate3d(${mouse.x * 0.5}px, ${mouse.y * 0.5}px, 0)`,
            }}
          >
            <div ref={imageRef} className="group relative overflow-hidden rounded-[30px]">
              <motion.img
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1600&auto=format&fit=crop&q=90"
                alt="Sustainable laptop design"
                className="h-[420px] w-full object-cover sm:h-[520px]"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                style={{
                  transform: `translate3d(${mouse.x * 0.3}px, ${imageY + mouse.y * 0.3}px, 0) scale(1.08)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <motion.div
                whileHover={{ y: 2 }}
                className="absolute left-6 top-6 sm:left-8 sm:top-8"
              >
                <span className="rounded-full border border-white/30 bg-black/30 px-5 py-2 text-[10px] uppercase tracking-[3px] text-white backdrop-blur-md">
                  Sustainability
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-7 left-6 sm:left-8"
              >
                <p className="text-xs uppercase tracking-[4px] text-white/50">Thoughtful by design</p>
                <h3 className="mt-2 text-3xl font-light text-white sm:text-5xl">
                  Better choices.
                  <br />
                  Better future.
                </h3>
              </motion.div>
              <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-white transition-transform duration-1000 group-hover:scale-x-100" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Sustainability;
