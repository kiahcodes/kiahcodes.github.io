import React, { useState } from 'react';
import { GraduationCap, Building, Code, Brain } from 'lucide-react';

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const timelineData = [
    {
      icon: GraduationCap,
      title: 'Started B.Tech',
      date: '2024',
      description: 'Embarked on my CSE journey, diving deep into programming fundamentals and algorithmic problem solving.',
      color: 'cyan',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      activeGradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Code,
      title: 'Fitness Tracker',
      date: '2025',
      description: 'Developed a comprehensive fitness tracking application with React and Firebase, featuring real-time data visualization.',
      color: 'green',
      gradient: 'from-green-500/20 to-emerald-500/20',
      activeGradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'ML Course',
      date: '2025',
      description: 'Mastered machine learning concepts including neural networks, deep learning frameworks, and AI deployment.',
      color: 'pink',
      gradient: 'from-pink-500/20 to-rose-500/20',
      activeGradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Building,
      title: 'ScaleTech Intern',
      date: '2025',
      description: 'Real-world software development with cutting-edge technologies, focusing on scalable systems and routing algorithms.',
      color: 'purple',
      gradient: 'from-purple-500/20 to-fuchsia-500/20',
      activeGradient: 'from-purple-500 to-fuchsia-500'
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 h-auto md:h-[450px] flex flex-col md:flex-row gap-4 relative z-10">
      {timelineData.map((item, index) => {
        const Icon = item.icon;
        // The first item is active by default if nothing is hovered, or the hovered item is active.
        const isActive = hoveredIndex === index || (hoveredIndex === null && index === 0);
        
        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer flex flex-col justify-end p-6 md:p-8 min-h-[160px]
              ${isActive ? 'md:flex-[3] bg-gray-800' : 'md:flex-[1] bg-gray-900/50 hover:bg-gray-800/80'}
              border border-gray-700/50 backdrop-blur-sm group`}
            style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
          >
            {/* Background Image / Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${isActive ? item.activeGradient : item.gradient} opacity-20 transition-opacity duration-700`} />
            
            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Top part: Icon and Date */}
              <div className="flex justify-between items-start mb-12 md:mb-0">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 
                  ${isActive ? `bg-gradient-to-br ${item.activeGradient} text-white shadow-lg` : 'bg-gray-800 text-gray-400'}
                `}>
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                
                <span className={`font-mono font-bold text-sm md:text-base px-4 py-1 rounded-full border transition-all duration-500 whitespace-nowrap
                  ${isActive ? 'border-white/30 text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'border-gray-700 text-gray-500 bg-gray-800/50'}
                `}>
                  {item.date}
                </span>
              </div>
              
              {/* Bottom part: Title and Description */}
              <div className="mt-auto relative h-[80px] md:h-[100px]">
                {/* Vertical title when collapsed (Desktop only) */}
                <div className={`hidden md:block absolute bottom-0 left-0 transition-all duration-500 transform origin-left
                  ${isActive ? 'opacity-0 scale-95 translate-y-4 pointer-events-none' : 'opacity-100 scale-100 translate-y-0 -rotate-90 origin-bottom-left whitespace-nowrap bottom-[60px] left-[10px]'}
                `}>
                  <h3 className="text-xl font-bold text-gray-400 tracking-widest uppercase">{item.title}</h3>
                </div>

                {/* Expanded content */}
                <div className={`transition-all duration-700 absolute bottom-0 left-0 right-0 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 whitespace-nowrap">{item.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md line-clamp-2 md:line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
};

export default Timeline;