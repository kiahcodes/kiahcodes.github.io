import { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CurrentExploration from "./components/CurrentExploration";
import Internship from "./components/Internship";
import Contact from "./components/Contact";

import "./App.css";

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

      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <section id="home"><Hero /></section>
        <section id="timeline"><Timeline /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="exploration"><CurrentExploration /></section>
        <section id="internship"><Internship /></section>
        <section id="contact"><Contact /></section>
      </div>
    </Router>
  );
}

export default App;
