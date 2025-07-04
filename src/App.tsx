import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CurrentExploration from './components/CurrentExploration';
import Internship from './components/Internship';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <Timeline />
      <Projects />
      <Skills />
      <CurrentExploration />
      <Internship />
      <Contact />
    </div>
  );
}

export default App;