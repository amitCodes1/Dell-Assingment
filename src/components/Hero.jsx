import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

function Hero() {
  const videoRef = useRef(null);
  const [sectionRef, isVisible] = useReveal();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame;
    const handleMouseMove = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 12;
        const y = (event.clientY / window.innerHeight - 0.5) * 8;
        setMouse({ x, y });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    let frame;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const explore = () => {
    document.getElementById("secure")?.scrollIntoView({ behavior: "smooth" });
  };

  const videoMove = Math.min(scrollY * 0.35, 220);
  const textMove = Math.min(scrollY * 0.18, 120);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-end overflow-hidden bg-black"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          transform: `scale(1.08) translate3d(${mouse.x}px, ${mouse.y - videoMove}px, 0)`,
          transition: "transform 0.25s ease-out",
        }}
      >
        <video
          ref={videoRef}
          src="/videos/dell.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover will-change-transform"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-10 w-full px-6 pb-16 text-white sm:px-10 sm:pb-20 lg:px-20 lg:pb-24"
        style={{
          transform: `translate3d(${mouse.x * 0.35}px, ${mouse.y * 0.35 - textMove}px, 0)`,
          transition: "transform 0.25s ease-out, opacity 1.4s ease-out",
        }}
      >
        <p className="mb-5 text-xs uppercase tracking-[5px] text-white/60">
          Dell Inspiron 14 Plus 2-in-1
        </p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="premium-title max-w-5xl text-6xl font-light leading-[0.88] sm:text-7xl md:text-8xl lg:text-[125px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x"
        >
          Designed
          <br />
          for more.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-white/70">Starting from ₹56,000*</p>
          <motion.button
            onClick={explore}
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group flex w-fit items-center gap-5 rounded-full border border-white/40 px-6 py-3 text-sm"
          >
            Explore
            <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-6 z-10 hidden text-xs uppercase tracking-[4px] text-white/40 sm:block lg:right-20"
        style={{
          transform: `translateY(${-scrollY * 0.15}px)`,
          transition: "transform 0.15s linear",
        }}
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}

export default Hero;
