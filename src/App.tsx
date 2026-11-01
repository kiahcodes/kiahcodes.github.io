import { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Research from "./components/Research";
import Contact from "./components/Contact";
import LiquidEther from "./components/LiquidEther";
import SideStaggerNav from "./components/SideStaggerNav";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./theme";

import "./App.css";

const ETHER_COLORS = {
  dark: ['#5227FF', '#FF9FFC', '#B497CF'],
  light: ['#9FB0F0', '#D9A6CB', '#F6F0E8'],
};

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const theme = useTheme();
  return (
    <Router>
      <ScrollToSection />
      <SideStaggerNav />
      <ThemeToggle />

      <div className="min-h-screen bg-gray-900 text-ink overflow-x-hidden relative">
        <div className={`fixed inset-0 z-0 pointer-events-none ${theme === "light" ? "opacity-30" : ""}`}>
          <LiquidEther
            key={theme}
            colors={ETHER_COLORS[theme]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>

        <div className="relative z-10">
          <section id="home"><Hero /></section>
          <section id="projects"><Projects /></section>
          <section id="hackathons"><Hackathons /></section>
          <section id="skills"><Skills /></section>
          <section id="internship"><Internship /></section>
          <section id="research"><Research /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>
    </Router>
  );
}

export default App;
