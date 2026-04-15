import React, { useEffect, useState,  } from 'react';
import { ChevronDown, Code, Cpu, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [particles, setParticles] = useState<number[]>([]);
  const [currentText, setCurrentText] = useState('');
  const fullText = "Transforming ideas into intelligent solutions";
  const navigate = useNavigate();

  const goTo = (section: string): void => {
    navigate(`/#${section}`);
  };

  useEffect(() => {
    // Create particles
    const particleArray = Array.from({ length: 30 }, (_, i) => i);
    setParticles(particleArray);

    
    // Typing animation
    let index = 0;
    const typeText = () => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      }
    };
    setTimeout(typeText, 1000);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        {/* Floating Particles */}
        {particles.map((particle, index) => (
          <div
            key={particle}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyan-400 rounded-full float-animation" />
          <div className="absolute top-1/3 right-1/4 w-48 h-48 border border-purple-400 rounded-full float-animation" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-green-400 rounded-full float-animation" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            KIAH MANDALIYA
          </h3>
          <div className="h-12 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              {currentText}
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-cyan-400">
            <Code className="w-6 h-6" />
            <span className="hidden md:inline">Developer</span>
          </div>
          <div className="flex items-center gap-2 text-purple-400">
            <Cpu className="w-6 h-6" />
            <span className="hidden md:inline">Engineer</span>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <Zap className="w-6 h-6" />
            <span className="hidden md:inline">Innovator</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="glow-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/Kiah_Resume.pdf";
                      link.download = "Kiah_Resume.pdf";
                      link.click();
                    }}
          >
            Download Resume
          </button>
          <button className="glow-button border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            onClick={() => goTo("contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </div> */}
    </section>
  );
};

export default Hero;