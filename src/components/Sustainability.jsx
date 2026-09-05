import useReveal from "../hooks/useReveal";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useTheme } from "../context/ThemeContext";

function Sustainability() {
  const [sectionRef, isVisible] = useReveal();
  const [imageRef, progress] = useScrollAnimation();
  const { isLight } = useTheme();

  const imageScale = 1.12 - progress * 0.12;
  const imageY = (progress - 0.5) * -45;

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className={`relative overflow-hidden px-5 py-20 transition-colors duration-700 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32 ${
        isLight ? "bg-white text-gray-900" : "bg-black text-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          
          <div
            className={`order-2 transition-all duration-1000 md:order-1 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <p
              className={`mb-4 text-[10px] uppercase tracking-[3px] transition-colors duration-700 sm:text-xs sm:tracking-[5px] ${
                isLight ? "text-gray-500" : "text-white/50"
              }`}
            >
              Designed Responsibly
            </p>

            <h2 className="max-w-xl text-4xl font-light leading-[0.95] tracking-[-1.5px] sm:text-6xl sm:tracking-[-2px] md:text-7xl lg:text-[88px]">
              Built-in
              <br />
              sustainability.
            </h2>

            <div
              className={`mt-7 h-px w-16 transition-colors duration-700 sm:mt-9 sm:w-24 ${
                isLight ? "bg-gray-900/40" : "bg-white/40"
              }`}
            />

            <p
              className={`mt-7 max-w-lg text-sm leading-6 transition-colors duration-700 sm:mt-9 sm:text-base sm:leading-7 md:text-lg ${
                isLight ? "text-gray-600" : "text-white/60"
              }`}
            >
              Designed with sustainability in mind, the Inspiron combines
              thoughtful materials with energy-efficient technology to create
              a more responsible computing experience.
            </p>

            <p
              className={`mt-5 max-w-lg text-sm leading-6 transition-colors duration-700 sm:text-base sm:leading-7 ${
                isLight ? "text-gray-500" : "text-white/40"
              }`}
            >
              Every detail is carefully considered to deliver performance
              while reducing environmental impact.
            </p>
          </div>

          <div
            className={`order-1 transition-all delay-200 duration-1000 md:order-2 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-16 opacity-0"
            }`}
          >
            <div
              ref={imageRef}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <img
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1200&auto=format&fit=crop&q=85"
                alt="Sustainable laptop design"
                style={{
                  transform: `translate3d(0, ${imageY}px, 0) scale(${imageScale})`,
                }}
                className="h-full w-full object-cover object-center will-change-transform transition-transform duration-100 ease-out md:group-hover:scale-[1.05]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-[9px] uppercase tracking-[3px] text-white/60 sm:text-xs sm:tracking-[4px]">
                  Thoughtful by design
                </p>

                <p className="mt-2 text-lg font-light text-white sm:text-2xl">
                  Better choices. Better future.
                </p>
              </div>

              <div className="absolute right-5 top-5 hidden rounded-full border border-white/30 bg-black/20 px-4 py-2 text-xs text-white backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black sm:block sm:right-7 sm:top-7">
                SUSTAINABILITY
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-14 flex justify-end transition-all delay-500 duration-1000 sm:mt-20 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p
            className={`max-w-md text-right text-xs leading-5 transition-colors duration-700 sm:text-sm sm:leading-6 ${
              isLight ? "text-gray-400" : "text-white/35"
            }`}
          >
            Performance and responsibility can move forward together.
          </p>
        </div>

        <div
          className={`mt-8 h-px transition-all duration-1000 sm:mt-12 ${
            isLight ? "bg-gray-900/10" : "bg-white/10"
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

export default Sustainability;