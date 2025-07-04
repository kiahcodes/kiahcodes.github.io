import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Play, Code, Users, Zap } from 'lucide-react';

const Internship = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const internshipRef = useRef<HTMLElement>(null);

  const commands = [
    '$ cd /career/internships',
    '$ ls -la',
    'ScaleTech-2024/',
    '$ cd ScaleTech-2024',
    '$ cat experience.txt',
    'Software Development Intern',
    'Technologies: React, Node.js, MongoDB',
    'Duration: 3 months',
    'Impact: Improved application performance by 40%',
    '$ git log --oneline',
    'a1b2c3d Feature: User authentication system',
    'e4f5g6h Fix: Database optimization',
    'i7j8k9l Feature: Real-time notifications',
    '$ exit',
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

  return (
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
                  <p className="text-gray-300 text-sm">React, Node.js, MongoDB</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <Users className="w-6 h-6 text-purple-400 mb-2" />
                  <p className="text-white font-semibold">Team Size</p>
                  <p className="text-gray-300 text-sm">5 developers</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Improved application performance by 40% through code optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Implemented user authentication system with JWT tokens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Developed real-time notification system using WebSockets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Collaborated with cross-functional teams using Agile methodology</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold">
                <Play className="w-5 h-5" />
                3 Months of Real-World Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;