import useReveal from "./hooks/useReveal";
import { useTheme } from "../context/ThemeContext";

function SecureReliable() {
  const [sectionRef, isVisible] = useReveal();
  const { isLight } = useTheme();

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-screen overflow-hidden px-6 py-24 transition-colors duration-700 md:px-12 lg:px-20 ${
        isLight
          ? "bg-white text-gray-900"
          : "bg-black text-white"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-3xl transition-all duration-[2000ms] ${
          isLight
            ? "bg-gray-900/[0.04]"
            : "bg-white/[0.03]"
        } ${
          isVisible
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0"
        }`}
      />

      <div className="relative z-10 flex min-h-[80vh] flex-col justify-center">
        {/* Small Heading */}
        <p
          className={`mb-6 text-sm uppercase tracking-[4px] transition-all duration-1000 ${
            isLight
              ? "text-gray-500"
              : "text-white/50"
          } ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          Dell Inspiron 14 Plus
        </p>

        {/* Main Heading */}
        <div className="overflow-hidden">
          <h2
            className={`max-w-6xl text-6xl font-medium leading-[0.95] tracking-tight transition-all duration-[1200ms] md:text-8xl lg:text-[120px] ${
              isVisible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-20 scale-105 opacity-0"
            }`}
          >
            Secure
            <br />
            and reliable
          </h2>
        </div>

        {/* Description */}
        <div
          className={`mt-12 flex justify-end transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }`}
          style={{
            transitionDelay: "400ms",
          }}
        >
          <div className="max-w-md">
            <div
              className={`mb-5 h-px w-16 transition-colors duration-700 ${
                isLight
                  ? "bg-gray-900/40"
                  : "bg-white/40"
              }`}
            />

            <p
              className={`text-lg leading-8 transition-colors duration-700 ${
                isLight
                  ? "text-gray-600"
                  : "text-white/60"
              }`}
            >
              Built to deliver a dependable experience with the
              performance and features you need every day.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        className={`absolute bottom-8 left-6 right-6 h-px transition-all duration-[1500ms] md:left-12 md:right-12 lg:left-20 lg:right-20 ${
          isLight
            ? "bg-gray-900/10"
            : "bg-white/10"
        } ${
          isVisible
            ? "scale-x-100 opacity-100"
            : "scale-x-0 opacity-0"
        }`}
      />
    </section>
  );
}

export default SecureReliable;