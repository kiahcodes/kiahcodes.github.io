import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'C Programming', level: 85, color: '#00D4FF' },
    { name: 'HTML/CSS', level: 90, color: '#8B5CF6' },
    { name: 'JavaScript', level: 80, color: '#00FF94' },
    { name: 'React.js', level: 85, color: '#F97316' },
    { name: 'Python', level: 75, color: '#EF4444' },
    { name: 'Machine Learning', level: 70, color: '#10B981' },
    { name: 'Git/GitHub', level: 85, color: '#3B82F6' },
    { name: 'Node.js', level: 65, color: '#8B5CF6' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={skillsRef} className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Technical Arsenal
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills Radar */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Radar Background */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-700 opacity-30" />
              <div className="absolute inset-4 rounded-full border border-gray-700 opacity-20" />
              <div className="absolute inset-8 rounded-full border border-gray-700 opacity-10" />
              
              {/* Radar Sweep */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                  className="absolute top-1/2 left-1/2 w-1 h-1/2 bg-gradient-to-t from-cyan-400 to-transparent origin-bottom radar-sweep"
                  style={{ transform: 'translate(-50%, -100%)' }}
                />
              </div>
              
              {/* Center Dot */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 pulse-glow" />
            </div>
          </div>

          {/* Skills List */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center hover-lift border border-gray-700 hover:border-cyan-400 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-xl font-bold"
                style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
              >
                {skill.name.charAt(0)}
              </div>
              <h4 className="text-sm font-medium text-white">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;