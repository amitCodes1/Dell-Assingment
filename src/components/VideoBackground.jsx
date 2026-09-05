import { useEffect, useRef, useState } from "react";

function VideoSection({
  video,
  children,
  className = "",
  overlay = "dark",
}) {
  const videoRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (event) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouse, {
      passive: true,
    });

    return () =>
      window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      className={`relative min-h-screen overflow-hidden bg-black text-white ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            transform: `
              translate3d(
                ${mouse.x * 8}px,
                ${mouse.y * 8}px,
                0
              )
              scale(1.08)
            `,
          }}
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out"
        />
      </div>

      <div
        className={`absolute inset-0 ${
          overlay === "heavy"
            ? "bg-black/70"
            : overlay === "soft"
            ? "bg-black/35"
            : "bg-black/50"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {children}
    </section>
  );
}

export default VideoSection;