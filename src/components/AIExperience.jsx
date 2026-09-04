import { useState } from "react";
import useReveal from "./hooks/useReveal";
import { useTheme } from "../context/ThemeContext";

function AIExperience() {
  const [sectionRef, isVisible] = useReveal();
  const [showAI, setShowAI] = useState(false);
  const { isLight } = useTheme();

  return (
    <section
      id="ai"
      ref={sectionRef}
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-700 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32 ${
        isLight
          ? "bg-gray-100 text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 sm:mb-16 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <p
              className={`mb-4 text-[10px] uppercase tracking-[3px] transition-colors duration-700 sm:text-xs sm:tracking-[5px] ${
                isLight
                  ? "text-gray-500"
                  : "text-white/50"
              }`}
            >
              Intelligent Performance
            </p>

            <h2 className="max-w-4xl text-4xl font-light leading-[0.95] tracking-[-1.5px] sm:text-6xl sm:tracking-[-2px] md:text-7xl lg:text-[92px]">
              Smarter
              <br />
              performance.
            </h2>
          </div>

          {/* Description */}
          <p
            className={`max-w-md text-sm leading-6 transition-all delay-200 duration-1000 sm:text-base sm:leading-7 md:pb-2 ${
              isLight
                ? "text-gray-600"
                : "text-white/60"
            } ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Experience powerful performance with intelligent technology
            designed to adapt to the way you work, create and connect.
          </p>
        </div>

        {/* Main Image */}
        <div
          className={`relative overflow-hidden rounded-2xl transition-all delay-300 duration-1000 sm:rounded-3xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <div className="group relative aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
            <img
              src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=1800&q=85"
              alt="Laptop technology"
              className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out md:group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-700 ${
                isLight
                  ? "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                  : "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              }`}
            />

            {/* Image Content */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 md:bottom-10 md:left-10">
              <p className="text-[9px] uppercase tracking-[3px] text-white/60 sm:text-xs sm:tracking-[5px]">
                On-device intelligence
              </p>

              <h3 className="mt-2 max-w-2xl text-2xl font-light text-white sm:text-3xl md:text-5xl">
                AI that works with you.
              </h3>
            </div>

            {/* Image Label */}
            <div className="absolute right-5 top-5 hidden rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black sm:block md:right-8 md:top-8">
              AI EXPERIENCE
            </div>
          </div>
        </div>

        {/* AI Details */}
        <div
          className={`mt-8 grid transition-all duration-700 ${
            showAI
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid gap-4 pb-2 sm:grid-cols-2 lg:grid-cols-3">

              {/* Card 01 */}
              <div
                className={`rounded-2xl border p-5 transition-colors duration-700 sm:p-6 ${
                  isLight
                    ? "border-gray-900/10 bg-white"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[2px] ${
                    isLight
                      ? "text-gray-400"
                      : "text-white/40"
                  }`}
                >
                  01
                </p>

                <h4 className="mt-4 text-xl font-light">
                  Intelligent workflows
                </h4>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    isLight
                      ? "text-gray-500"
                      : "text-white/50"
                  }`}
                >
                  Get more done with AI-powered experiences that simplify
                  everyday tasks.
                </p>
              </div>

              {/* Card 02 */}
              <div
                className={`rounded-2xl border p-5 transition-colors duration-700 sm:p-6 ${
                  isLight
                    ? "border-gray-900/10 bg-white"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[2px] ${
                    isLight
                      ? "text-gray-400"
                      : "text-white/40"
                  }`}
                >
                  02
                </p>

                <h4 className="mt-4 text-xl font-light">
                  Powerful performance
                </h4>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    isLight
                      ? "text-gray-500"
                      : "text-white/50"
                  }`}
                >
                  Built to handle demanding applications while keeping your
                  workflow smooth.
                </p>
              </div>

              {/* Card 03 */}
              <div
                className={`rounded-2xl border p-5 transition-colors duration-700 sm:p-6 ${
                  isLight
                    ? "border-gray-900/10 bg-white"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[2px] ${
                    isLight
                      ? "text-gray-400"
                      : "text-white/40"
                  }`}
                >
                  03
                </p>

                <h4 className="mt-4 text-xl font-light">
                  Smarter experiences
                </h4>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    isLight
                      ? "text-gray-500"
                      : "text-white/50"
                  }`}
                >
                  AI capabilities help you create, communicate and work more
                  efficiently.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-8 flex justify-start sm:mt-10">
          <button
            onClick={() => setShowAI(!showAI)}
            className={`group flex items-center gap-4 rounded-full border px-6 py-3 text-xs transition-all duration-500 sm:px-7 sm:py-3.5 sm:text-sm ${
              isLight
                ? "border-gray-900/40 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border-white/40 text-white hover:bg-white hover:text-black"
            }`}
          >
            <span>
              {showAI ? "SHOW LESS" : "EXPLORE AI"}
            </span>

            <span
              className={`text-lg transition-transform duration-500 ${
                showAI
                  ? "rotate-45"
                  : "group-hover:translate-x-1"
              }`}
            >
              +
            </span>
          </button>
        </div>

        {/* Bottom Line */}
        <div
          className={`mt-14 h-px transition-all duration-1000 sm:mt-20 ${
            isLight
              ? "bg-gray-900/10"
              : "bg-white/10"
          } ${
            isVisible
              ? "w-full opacity-100"
              : "w-0 opacity-0"
          }`}
        />
      </div>
    </section>
  );
}

export default AIExperience;