import { useState } from "react";
import useReveal from "./hooks/useReveal";

function SpecialOffers() {
  const [sectionRef, isVisible] = useReveal();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white px-6 py-24 text-black md:px-12 lg:px-20"
    >
      <div className="mx-auto flex min-h-[80vh] max-w-7xl items-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">
          <div
            className={`transition-all duration-[1200ms] ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <p className="text-sm uppercase tracking-[4px] text-black/40">
              Special Offers
            </p>

            <div className="mt-6 overflow-hidden">
              <h2
                className={`text-6xl font-medium leading-[0.9] tracking-tight transition-all duration-[1200ms] md:text-8xl lg:text-[105px] ${
                  isVisible
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-20 scale-105 opacity-0"
                }`}
              >
                JBL
                <br />
                Tune 770NC
              </h2>
            </div>

            <p
              className={`mt-6 max-w-lg text-lg leading-8 text-black/60 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Enjoy premium sound with the JBL Tune 770NC headphones.
            </p>

            <div
              className={`mt-8 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="text-lg text-black/40 line-through">
                ₹9,999/-*
              </p>

              <p className="mt-1 text-4xl font-medium">
                ₹1,999/-*
              </p>
            </div>

            <button
              onClick={() => setShowInfo(!showInfo)}
              className={`group mt-8 flex items-center gap-4 rounded-full bg-black px-7 py-3 text-sm text-white transition-all duration-500 hover:-translate-y-1 hover:bg-neutral-800 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <span>{showInfo ? "CLOSE" : "KNOW MORE"}</span>

              <span
                className={`text-lg transition-transform duration-500 ${
                  showInfo
                    ? "rotate-45"
                    : "group-hover:translate-x-1"
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-all duration-700 ${
                showInfo
                  ? "mt-8 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-lg border-l border-black/20 pl-6">
                  <p className="text-lg leading-8 text-black/60">
                    The JBL Tune 770NC headphones are included as a special
                    offer, providing a premium audio experience for your
                    everyday entertainment.
                  </p>

                  <p className="mt-5 text-sm uppercase tracking-[3px] text-black/40">
                    Special Offer
                  </p>

                  <p className="mt-3 text-base leading-7 text-black/50">
                    Headphones worth ₹9,999/-* available at ₹1,999/-* as
                    shown in the offer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`group relative overflow-hidden rounded-[32px] bg-neutral-100 transition-all duration-[1400ms] ${
              isVisible
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-20 scale-90 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <img
              src="/src/assets/images/jbl.jpg"
              alt="JBL Tune 770NC Headphones"
              className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="absolute bottom-7 left-7 translate-y-5 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs uppercase tracking-[4px] text-white">
                Special Offer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-10 left-6 h-px bg-black/20 transition-all duration-[1200ms] md:left-12 lg:left-20 ${
          isVisible
            ? "w-24 opacity-100"
            : "w-0 opacity-0"
        }`}
      />
    </section>
  );
}

export default SpecialOffers;