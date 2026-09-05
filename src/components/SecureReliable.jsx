import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useReveal from "../hooks/useReveal";
import useScrollAnimation from "../hooks/useScrollAnimation";

function SecureReliable() {
  const [sectionRef, isVisible] = useReveal();
  const [videoRef, progress] = useScrollAnimation();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 30;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const videoScale = 1.08 - progress * 0.08;
  const scrollY = (progress - 0.5) * -30;

  return (
    <section
      id="secure"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <div ref={videoRef} className="absolute inset-0 overflow-hidden">
        <motion.video
          src="/videos/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          style={{
            transform: `translate3d(${mouse.x * 0.35}px, ${scrollY + mouse.y * 0.35}px, 0) scale(${videoScale})`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-transparent" />

      <div className="relative z-10 flex min-h-screen items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          style={{
            transform: `translate3d(${mouse.x}px, ${mouse.y}px, 0)`,
          }}
          className="w-full px-6 sm:px-10 lg:px-20 max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-5 text-xs uppercase tracking-[4px] text-white/50"
          >
            Inspiron 14 Plus 2-in-1
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="premium-title text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[105px] bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x"
          >
            Secure and
            <br />
            reliable
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: "6rem" } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 h-px bg-white/50"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-8 max-w-xl text-base leading-7 text-white/70"
          >
            Built to protect your data and deliver consistent performance — whether you’re working, creating, or simply staying connected.
          </motion.p>

          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-5"
              >
                <p className="max-w-xl text-sm leading-7 text-white/55">
                  Experience a premium 2‑in‑1 design with intelligent security, powerful performance, and the flexibility to adapt to your lifestyle.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group mt-9 flex items-center gap-4 rounded-full border border-white/40 px-7 py-3.5 text-sm"
          >
            {showMore ? "SHOW LESS" : "KNOW MORE"}
            <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-6 z-10 text-xs uppercase tracking-[4px] text-white/40 sm:left-10 lg:left-20"
        style={{
          transform: `translate3d(${mouse.x * 0.5}px, ${mouse.y * 0.5}px, 0)`,
        }}
      >
        Dell Inspiron
      </motion.div>
    </section>
  );
}

export default SecureReliable;
