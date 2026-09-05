import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { isLight, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "top" },
    { name: "AI", id: "ai" },
    { name: "XPS", id: "xps" },
    { name: "Accessories", id: "accessories" },
    { name: "Offers", id: "offers" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-500 ${
        isLight
          ? "border-black/10 bg-white/75 text-black"
          : "border-white/10 bg-black/60 text-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:px-12">
        <button
          onClick={() => scrollToSection("top")}
          className="text-2xl font-bold tracking-[-1px]"
        >
          DELL<span className="font-light">.</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative text-sm opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-sm transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {isLight ? "☾" : "☀"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 pb-7 pt-3">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-sm opacity-70"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;