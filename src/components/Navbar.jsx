import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiHome, FiCpu, FiMonitor, FiBox, FiTag } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";

function Navbar() {
  const { isLight, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", id: "top", icon: <FiHome /> },
    { name: "AI", id: "ai", icon: <FiCpu /> },
    { name: "XPS", id: "xps", icon: <FiMonitor /> },
    { name: "Accessories", id: "accessories", icon: <FiBox /> },
    { name: "Offers", id: "offers", icon: <FiTag /> },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
        {/* Logo */}
        <button
          onClick={() => scrollToSection("top")}
          className="text-2xl font-bold tracking-[-1px] flex items-center gap-1"
        >
          DELL<span className="font-light">.</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="relative flex items-center gap-2 text-sm opacity-70 transition-all duration-300 hover:opacity-100 group"
            >
              {link.icon}
              {link.name}
              <span className="absolute bottom-[-6px] left-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Theme + Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 text-lg transition-transform duration-500 hover:rotate-180"
            aria-label="Toggle theme"
          >
            {isLight ? <BsMoon /> : <BsSun />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center md:hidden text-2xl"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
              className="flex items-center gap-3 text-left text-sm opacity-70 hover:opacity-100"
            >
              {link.icon}
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
