import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-black/20 px-6 py-4 text-white backdrop-blur-md md:px-10 lg:px-16">
      <div className="flex items-center justify-between">
        <a href="#top" className="text-2xl font-bold leading-none">
          DELL
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#ai"
            className="text-sm transition-opacity duration-300 hover:opacity-50"
          >
            AI Experiences
          </a>

          <a
            href="#sustainability"
            className="text-sm transition-opacity duration-300 hover:opacity-50"
          >
            Sustainability
          </a>

          <a
            href="#modes"
            className="text-sm transition-opacity duration-300 hover:opacity-50"
          >
            Four Modes
          </a>

          <a
            href="#accessories"
            className="text-sm transition-opacity duration-300 hover:opacity-50"
          >
            Accessories
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/50 px-5 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black sm:block">
            Explore
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 border-t border-white/10 pt-6">
          <a
            href="#ai"
            onClick={closeMenu}
            className="text-sm transition-opacity hover:opacity-50"
          >
            AI Experiences
          </a>

          <a
            href="#sustainability"
            onClick={closeMenu}
            className="text-sm transition-opacity hover:opacity-50"
          >
            Sustainability
          </a>

          <a
            href="#modes"
            onClick={closeMenu}
            className="text-sm transition-opacity hover:opacity-50"
          >
            Four Modes
          </a>

          <a
            href="#accessories"
            onClick={closeMenu}
            className="text-sm transition-opacity hover:opacity-50"
          >
            Accessories
          </a>

          <button
            onClick={closeMenu}
            className="w-fit rounded-full border border-white/50 px-5 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black"
          >
            Explore
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;