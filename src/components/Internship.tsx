import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Play, Code, Zap, X } from 'lucide-react';

const Internship = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const internshipRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const commands = [
    '$ cd /career/internships',
    '$ ls -la',
    'ScaleTech-2025/',
    '$ cd ScaleTech-2025',
    '$ cat experience.txt',
    'Software Development Intern',
    'Technologies: React, FastAPI, PostgreSQL',
    'Duration: 1 month',
    'Achievements: Built a logistics route optimization system solving real-world delivery inefficiencies',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTypingAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (internshipRef.current) {
      observer.observe(internshipRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startTypingAnimation = () => {
    let commandIndex = 0;
    let charIndex = 0;

    const typeCommand = () => {
      if (commandIndex < commands.length) {
        const command = commands[commandIndex];

        if (charIndex < command.length) {
          setTypingText(command.slice(0, charIndex + 1));
          charIndex++;
          setTimeout(typeCommand, 50);
        } else {
          setTimeout(() => {
            commandIndex++;
            charIndex = 0;
            setCurrentCommand(commandIndex);
            if (commandIndex < commands.length) {
              typeCommand();
            }
          }, 1000);
        }
      }
    };

    typeCommand();
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = '';
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <section ref={internshipRef} className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Professional Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Terminal Window */}
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
                <span className="text-gray-400 text-sm ml-4">kiah@scaletech:~</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2 min-h-96">
                {commands.slice(0, currentCommand).map((cmd, index) => (
                  <div key={index} className="flex items-center">
                    {cmd.startsWith('$') ? (
                      <span className="text-green-400">{cmd}</span>
                    ) : (
                      <span className="text-gray-300 pl-2">{cmd}</span>
                    )}
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="text-green-400">
                    {typingText}
                    {showCursor && <span className="text-cyan-400">|</span>}
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Details */}
            <div className="space-y-8">
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Terminal className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">ScaleTech</h3>
                    <p className="text-cyan-400 font-semibold">Software Development Intern</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <Code className="w-6 h-6 text-cyan-400 mb-2" />
                    <p className="text-white font-semibold">Technologies</p>
                    <p className="text-gray-300 text-sm">React, FastAPI, PostgreSQL</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Built a logistics route optimization system solving real-world delivery inefficiencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Integrated OSRM for accurate real-world road distance calculations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Developed dynamic React dashboard for customer management and route visualization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Enabled CSV upload and real-time data processing for scalability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Improved delivery planning efficiency for multi-truck operations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <button
                  id="project-demo-btn"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <Play className="w-5 h-5" />
                  Project Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
            style={{ backgroundColor: '#0d1117' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700">
              <span className="text-white font-semibold text-sm">Truck Route Planner</span>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-700"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video */}
            <video
              ref={videoRef}
              src="/demo.mp4"
              controls
              autoPlay
              className="w-full"
              style={{ maxHeight: '70vh', background: '#000' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default Internship;