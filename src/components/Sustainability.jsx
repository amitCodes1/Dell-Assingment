import useReveal from "./hooks/useReveal";

function Sustainability() {
  const [sectionRef, isVisible] = useReveal();

  return (
    <section
      ref={sectionRef}
      id="sustainability"
      className="relative min-h-screen overflow-hidden bg-neutral-100 px-6 py-24 text-black md:px-12 lg:px-20"
    >
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <div
            className={`order-2 transition-all duration-[1400ms] lg:order-1 ${
              isVisible
                ? "translate-x-0 scale-100 opacity-100"
                : "-translate-x-24 scale-90 opacity-0"
            }`}
          >
            <div className="group relative aspect-square overflow-hidden rounded-[32px]">
              <img
                src="/src/assets/images/laptop1.avif"
                alt="Dell Inspiron Laptop"
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="absolute bottom-7 left-7 translate-y-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[4px] text-white">
                  Designed with purpose
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p
              className={`mb-6 text-sm uppercase tracking-[4px] text-black/50 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Designed with purpose
            </p>

            <div className="overflow-hidden">
              <h2
                className={`text-5xl font-medium leading-[0.9] tracking-tight transition-all duration-[1200ms] md:text-7xl lg:text-8xl ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-20 scale-105 opacity-0"
                }`}
              >
                Built-in
                <br />
                sustainability
              </h2>
            </div>

            <p
              className={`mt-8 max-w-xl text-lg leading-8 text-black/60 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              Thoughtfully designed with sustainability in mind, bringing
              responsible choices into the product experience.
            </p>

            <div
              className={`mt-10 flex items-center gap-4 transition-all duration-[1200ms] ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "550ms" }}
            >
              <span className="h-px w-24 bg-black/30" />
              <span className="text-xs uppercase tracking-[3px] text-black/40">
                Responsible design
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-black/[0.03] blur-3xl transition-all duration-[2000ms] ${
          isVisible
            ? "scale-100 opacity-100"
            : "scale-50 opacity-0"
        }`}
      />
    </section>
  );
}

export default Sustainability;