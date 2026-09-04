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
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main id='top'>
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
    </>
  );
}

export default App;