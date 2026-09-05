import { useState } from "react";
import useReveal from "./hooks/useReveal";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function Accessories() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);
  const { isLight } = useTheme();

  const imageScale = 1.12 - progress * 0.12;
  const imageY = (progress - 0.5) * -35;

  const accessories = [
    {
      number: "01",
      name: "Dell 6-in-1 USB-C",
      model: "Multiport Adapter · DA305",
      price: "₹1,999/-*",
      oldPrice: "₹9,999/-*",
      image:
        "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "02",
      name: "Dell Pro 7-in-1",
      model: "USB-C Travel Hub · DA326",
      price: "₹1,999/-*",
      oldPrice: "₹9,999/-*",
      image:
        "https://m.media-amazon.com/images/I/61zqs8jO86L._AC_UF350,350_QL80_.jpg",
    },
  ];

  return (
    <section
      id="accessories"
      ref={sectionRef}
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-700 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32 ${
        isLight
          ? "bg-gray-100 text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-12 transition-all duration-1000 sm:mb-16 md:mb-20 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
        >
          <p
            className={`mb-4 text-[10px] uppercase tracking-[3px] transition-colors duration-700 sm:text-xs sm:tracking-[5px] ${
              isLight
                ? "text-gray-500"
                : "text-white/50"
            }`}
          >
            Accessories
          </p>

          <div className="overflow-hidden">
            <h2
              className={`max-w-5xl text-4xl font-light leading-[0.95] tracking-[-1.5px] transition-all duration-[1200ms] sm:text-6xl sm:tracking-[-2px] md:text-7xl lg:text-[92px] ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-20 scale-105 opacity-0"
              }`}
            >
              Complete
              <br />
              the experience.
            </h2>
          </div>

          <div
            className={`mt-7 h-px w-16 origin-left transition-all duration-1000 sm:mt-9 sm:w-24 ${
              isLight
                ? "bg-gray-900/40"
                : "bg-white/40"
            } ${
              isVisible
                ? "scale-x-100"
                : "scale-x-0"
            }`}
          />

          <p
            className={`mt-7 max-w-xl text-sm leading-6 transition-all delay-300 duration-1000 sm:mt-9 sm:text-base sm:leading-7 md:text-lg ${
              isLight
                ? "text-gray-600"
                : "text-white/60"
            } ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            Designed to extend your productivity, connectivity and
            entertainment wherever you go.
          </p>
        </div>

        <div
          ref={imageRef}
          className="grid gap-5 md:grid-cols-2"
        >
          {accessories.map((item, index) => (
            <div
              key={item.number}
              className={`group overflow-hidden rounded-2xl border transition-all duration-1000 sm:rounded-3xl ${
                isLight
                  ? "border-gray-900/10 bg-white"
                  : "border-white/10 bg-white/[0.02]"
              } ${
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-20 scale-95 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 180}ms`,
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    transform: `translate3d(0, ${
                      imageY * (index % 2 === 0 ? 0.5 : 0.3)
                    }px, 0) scale(${imageScale})`,
                  }}
                  className="h-full w-full object-cover object-center will-change-transform transition-transform duration-100 ease-out group-hover:scale-[1.07]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] tracking-[2px] text-white/70 backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black">
                  {item.number}
                </div>

                <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                  <p className="text-[9px] uppercase tracking-[3px] text-white/60 sm:text-xs sm:tracking-[4px]">
                    DELL ACCESSORY
                  </p>

                  <p className="mt-2 text-xl font-light text-white sm:text-2xl">
                    {item.name}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-light sm:text-xl">
                      {item.name}
                    </h3>

                    <p
                      className={`mt-2 text-sm transition-colors duration-700 ${
                        isLight
                          ? "text-gray-500"
                          : "text-white/40"
                      }`}
                    >
                      {item.model}
                    </p>
                  </div>

                  <div className="text-right">
                    <p
                      className={`text-xs line-through transition-colors duration-700 ${
                        isLight
                          ? "text-gray-400"
                          : "text-white/30"
                      }`}
                    >
                      {item.oldPrice}
                    </p>

                    <p className="mt-1 text-lg font-light">
                      {item.price}
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-5 h-px origin-left transition-all duration-700 ${
                    isLight
                      ? "bg-gray-900/10"
                      : "bg-white/10"
                  } group-hover:scale-x-100`}
                />

                <div className="mt-5 flex items-center justify-between">
                  <span
                    className={`text-[9px] uppercase tracking-[2px] transition-colors duration-700 ${
                      isLight
                        ? "text-gray-400"
                        : "text-white/30"
                    }`}
                  >
                    Designed for mobility
                  </span>

                  <span className="text-lg transition-transform duration-500 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-8 grid transition-all duration-700 ${
            showMore
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`rounded-2xl border p-6 sm:rounded-3xl sm:p-8 ${
                isLight
                  ? "border-gray-900/10 bg-white"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <p
                className={`max-w-2xl text-sm leading-6 sm:text-base ${
                  isLight
                    ? "text-gray-500"
                    : "text-white/40"
                }`}
              >
                Expand your setup with compact accessories designed to keep
                your devices connected, organized and ready wherever your
                work takes you.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className={`mt-8 flex items-center gap-4 rounded-full border px-6 py-3 text-xs transition-all duration-500 sm:px-7 sm:py-3.5 sm:text-sm ${
            isLight
              ? "border-gray-900/40 text-gray-900 hover:bg-gray-900 hover:text-white"
              : "border-white/50 text-white hover:bg-white hover:text-black"
          }`}
        >
          <span>{showMore ? "SHOW LESS" : "KNOW MORE"}</span>

          <span
            className={`text-lg transition-transform duration-500 ${
              showMore
                ? "rotate-45"
                : "group-hover:translate-x-1"
            }`}
          >
            +
          </span>
        </button>

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

export default Accessories;