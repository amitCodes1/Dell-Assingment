import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLight, toggleTheme } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b px-5 py-4 backdrop-blur-xl transition-all duration-700 md:px-10 lg:px-16 ${
        isLight
          ? "border-gray-900/10 bg-white/80 text-gray-900"
          : "border-white/10 bg-black/70 text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <a
          href="#top"
          className="text-2xl font-bold tracking-tight"
        >
          DELL
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#ai"
            className="text-sm transition-opacity hover:opacity-50"
          >
            AI Experiences
          </a>

          <a
            href="#sustainability"
            className="text-sm transition-opacity hover:opacity-50"
          >
            Sustainability
          </a>

          <a
            href="#modes"
            className="text-sm transition-opacity hover:opacity-50"
          >
            Four Modes
          </a>

          <a
            href="#accessories"
            className="text-sm transition-opacity hover:opacity-50"
          >
            Accessories
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`rounded-full border px-5 py-2 text-sm transition-all duration-500 ${
              isLight
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-white bg-white text-black"
            }`}
          >
            {isLight ? "☾ Dark" : "☀ Light"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              isLight
                ? "border-gray-900/20"
                : "border-white/30"
            }`}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full transition-all ${
                  isLight ? "bg-gray-900" : "bg-white"
                } ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full transition-all ${
                  isLight ? "bg-gray-900" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />

              <span
                className={`h-px w-full transition-all ${
                  isLight ? "bg-gray-900" : "bg-white"
                } ${
                  menuOpen
                    ? "-translate-y-1.5 -rotate-45"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`mt-5 flex flex-col gap-5 border-t pt-6 ${
            isLight
              ? "border-gray-900/10"
              : "border-white/10"
          }`}
        >
          <a href="#ai" onClick={closeMenu}>
            AI Experiences
          </a>

          <a
            href="#sustainability"
            onClick={closeMenu}
          >
            Sustainability
          </a>

          <a href="#modes" onClick={closeMenu}>
            Four Modes
          </a>

          <a
            href="#accessories"
            onClick={closeMenu}
          >
            Accessories
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;