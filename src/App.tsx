import { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Skills from "./components/Skills";
import CurrentExploration from "./components/CurrentExploration";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import LiquidEther from "./components/LiquidEther";
import SideStaggerNav from "./components/SideStaggerNav";

import "./App.css";

const ETHER_COLORS = ['#5227FF', '#FF9FFC', '#B497CF'];

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
  return (
    <Router>
      <ScrollToSection />
      <SideStaggerNav />

      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <LiquidEther
            colors={ETHER_COLORS}
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
          <section id="exploration"><CurrentExploration /></section>
          <section id="internship"><Internship /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>
    </Router>
  );
}

export default App;
