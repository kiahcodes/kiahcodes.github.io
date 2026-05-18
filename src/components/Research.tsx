import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Shield, Brain, ChevronRight, Activity, Terminal } from 'lucide-react';

const Research = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const researchData = [
    {
      id: 'tinyml',
      icon: Cpu,
      title: 'TinyML',
      subtitle: 'Edge AI Deployment',
      description: 'Exploring the deployment of machine learning models on resource-constrained edge devices for low-latency, offline inference. Focusing on model quantization, pruning, and optimization for microcontrollers.',
      tags: ['TensorFlow Lite', 'Edge Computing', 'IoT', 'C++'],
      bgGradientRight: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      bgGradientBR: 'bg-gradient-to-br from-cyan-400 to-blue-500',
      textGradient: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      glow: 'shadow-cyan-500/50',
      accent: 'bg-cyan-500'
    },
    {
      id: 'iomt',
      icon: Shield,
      title: 'IoMT Attack Detection',
      subtitle: 'Intrusion Detection',
      description: 'Developed 1D CNN models to detect and mitigate cyber attacks on Internet of Medical Things (IoMT) devices. .',
      tags: ['CNNs', 'Cybersecurity', 'Network Analysis', 'Python'],
      bgGradientRight: 'bg-gradient-to-r from-purple-400 to-pink-500',
      bgGradientBR: 'bg-gradient-to-br from-purple-400 to-pink-500',
      textGradient: 'bg-gradient-to-r from-purple-400 to-pink-500',
      glow: 'shadow-purple-500/50',
      accent: 'bg-purple-500'
    },
    {
      id: 'eeg',
      icon: Brain,
      title: 'EEG Analysis',
      subtitle: 'Sleep Apnea Detection',
      description: 'Studying and analyzing EEG (Electroencephalogram) signals to detect and classify sleep apnea patterns using deep learning techniques.',
      tags: ['Signal Processing', 'Deep Learning', 'PyTorch', 'Biomedical Data'],
      bgGradientRight: 'bg-gradient-to-r from-blue-400 to-indigo-500',
      bgGradientBR: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      textGradient: 'bg-gradient-to-r from-blue-400 to-indigo-500',
      glow: 'shadow-blue-500/50',
      accent: 'bg-blue-500'
    }
  ];

  // Intersection Observer for fade-in when scrolling to section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Auto-play functionality showcasing useEffect and timer cleanup
  useEffect(() => {
    if (!isHovered && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % researchData.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isHovered, isVisible, researchData.length]);

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-gray-950 relative overflow-hidden">
      {/* Dynamic Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-1000 ${researchData[activeIndex].bgGradientBR}`}
        />
      </div>

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-flex items-center gap-3">
            <Activity className="w-8 h-8 text-cyan-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
              Research & Development
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interactive exploration of my current academic and technical research focus areas.
          </p>
        </div>

        <div
          className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Edge Highlight */}
          <div className={`absolute top-0 left-0 w-full h-1 ${researchData[activeIndex].bgGradientRight} transition-all duration-700`} />

          {/* Interactive Navigation Pane */}
          <div className="lg:w-1/3 bg-gray-900/80 border-b lg:border-b-0 lg:border-r border-gray-800 p-6 flex flex-col gap-4 relative z-10">
            <div className="flex items-center gap-2 mb-2 px-2 text-gray-500 text-sm font-mono uppercase tracking-widest">
              <Terminal className="w-4 h-4" />
              <span>Select Topic</span>
            </div>

            {researchData.map((item, index) => {
              const isActive = index === activeIndex;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-5 rounded-2xl transition-all duration-300 group overflow-hidden ${isActive
                      ? 'bg-gray-800 border-gray-700 shadow-lg'
                      : 'hover:bg-gray-800/50 border-transparent hover:border-gray-700/50'
                    } border`}
                >
                  {/* Progress bar background for active item */}
                  {isActive && !isHovered && (
                    <div className={`absolute bottom-0 left-0 h-1 ${item.bgGradientRight} w-full origin-left animate-[progress_5s_linear]`} />
                  )}

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${isActive ? `${item.bgGradientBR} text-white shadow-lg ${item.glow} scale-110` : 'bg-gray-800 text-gray-400 group-hover:text-gray-200'
                        }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-white translate-x-0 opacity-100' : 'text-gray-600 -translate-x-4 opacity-0'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Pane */}
          <div className="lg:w-2/3 p-8 lg:p-12 min-h-[420px] flex items-center relative overflow-hidden bg-gray-950/50">
            {/* Background Icon Watermark */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none transform -rotate-12 transition-all duration-1000 scale-150">
              {React.createElement(researchData[activeIndex].icon, { size: 400 })}
            </div>

            {/* We use key to force re-render and trigger CSS animations on mount */}
            <div
              key={activeIndex}
              className="w-full relative z-10 animate-[fadeIn_0.5s_ease-out_forwards]"
            >
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 shadow-inner">
                <span className={`text-sm font-bold bg-clip-text text-transparent ${researchData[activeIndex].textGradient}`}>
                  {researchData[activeIndex].subtitle}
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {researchData[activeIndex].title}
              </h3>

              <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
                {researchData[activeIndex].description}
              </p>

              <div>
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                  Key Technologies & Concepts
                </h4>
                <div className="flex flex-wrap gap-3">
                  {researchData[activeIndex].tags.map((tag, i) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-900 border border-gray-700/80 rounded-xl text-gray-300 text-sm font-medium flex items-center gap-2 hover:border-gray-500 transition-colors cursor-default"
                      style={{ animation: `fadeInUp 0.4s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
                    >
                      <div className={`w-2 h-2 rounded-full ${researchData[activeIndex].accent} shadow-[0_0_8px_rgba(255,255,255,0.4)]`} />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Styles for Custom Keyframes */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes progress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
      </div>
    </section>
  );
};

export default Research;
