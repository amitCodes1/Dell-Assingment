import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecureReliable from "./components/SecureReliable";
import AIExperience from "./components/AIExperience";
import Sustainability from "./components/Sustainability";
import FourModes from "./components/FourModes";
import XpsSection from "./components/XpsSection";
import Accessories from "./components/Accessories";
import TravelHub from "./components/TravelHub";
import SpecialOffers from "./components/SpecialOffers";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isLight } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isLight
          ? "bg-[#f5f7f9] text-gray-900"
          : "bg-black text-white"
      }`}
    >
      <Navbar />

      <main id="top">
        <Hero />
        <SecureReliable />
        <AIExperience />
        <Sustainability />
        <FourModes />
        <XpsSection />
        <Accessories />
        <TravelHub />
        <SpecialOffers />
      </main>
    </div>
  );
}

export default App;