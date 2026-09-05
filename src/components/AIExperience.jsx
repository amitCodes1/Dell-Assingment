import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useReveal from "../hooks/useReveal";

function AIExperience() {
  const [sectionRef, isVisible] = useReveal();
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const features = [
    {
      title: "On-device AI",
      text: "Harness intelligence that runs directly on your device — fast, private, and always ready.",
    },
    {
      title: "Copilot+",
      text: "Smarter assistance that adapts to you, boosting creativity, focus, and everyday productivity.",
    },
    {
      title: "Intel Core Ultra",
      text: "Responsive power built for demanding tasks, unlocking the newest AI experiences seamlessly.",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 30;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-neutral-950 text-white"
    >
      <video
        src="/videos/video2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          transform: `translate3d(${mouse.x * 0.25}px, ${mouse.y * 0.25}px, 0) scale(1.08)`,
          transition: "transform 0.35s ease-out",
        }}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-28 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          style={{
            transform: `translate3d(${mouse.x * 0.8}px, ${mouse.y * 0.8}px, 0)`,
          }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-5 text-xs uppercase tracking-[5px] text-white/50"
          >
            Intelligence built in
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
            className="premium-title text-6xl font-light leading-[0.9] sm:text-7xl md:text-8xl lg:text-[110px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x"
          >
            New AI
            <br />
            experiences.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 max-w-2xl text-base leading-7 text-white/70 md:text-lg"
          >
            Sleek 14-inch 2-in-1 with Copilot+ powered by Intel® Core™ Ultra processors — delivering stunning performance and unlocking the future of AI, right at your fingertips.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.25 } },
          }}
          className="mt-16 grid max-w-5xl gap-4 md:grid-cols-3"
          style={{
            transform: `translate3d(${mouse.x * 0.45}px, ${mouse.y * 0.45}px, 0)`,
          }}
        >
          {features.map((feature, index) => {
            const isActive = active === index;
            return (
              <motion.button
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                onClick={() => setActive(index)}
                className={`group relative overflow-hidden rounded-3xl border p-6 text-left backdrop-blur-xl transition-all duration-700 ${
                  isActive
                    ? "border-white/50 bg-white/15 shadow-2xl"
                    : "border-white/10 bg-black/20 hover:-translate-y-3 hover:border-white/30 hover:bg-white/10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-700 ${
                    isActive
                      ? "scale-150 opacity-100"
                      : "scale-75 opacity-0 group-hover:scale-125 group-hover:opacity-100"
                  }`}
                />
                <div className="relative z-10">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-xs tracking-[3px] text-white/40">
                      0{index + 1}
                    </span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-lg transition-all duration-500 ${
                        isActive
                          ? "rotate-45 bg-white text-black"
                          : "group-hover:rotate-90 group-hover:bg-white group-hover:text-black"
                      }`}
                    >
                      +
                    </span>
                  </div>
                  <h3 className="text-xl font-medium transition-transform duration-500 group-hover:translate-x-2">
                    {feature.title}
                  </h3>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-4"
                      >
                        <p className="text-sm leading-6 text-white/60">
                          {feature.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div
                    className={`mt-6 h-px bg-white/20 transition-all duration-700 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 text-xs uppercase tracking-[4px] text-white/30 sm:right-10 lg:right-20"
        style={{
          transform: `translate3d(${mouse.x * 0.6}px, ${mouse.y * 0.6}px, 0)`,
        }}
      >
        AI Experience
      </motion.div>
    </section>
  );
}

export default AIExperience;
