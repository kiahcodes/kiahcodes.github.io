import React, { useEffect, useRef } from 'react';
import { GraduationCap, Building, Code, Brain, Star } from 'lucide-react';

const Timeline = () => {
  const timelineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      icon: GraduationCap,
      title: 'Started B.Tech in CSE',
      date: '2024',
      description: 'Embarked on my Computer Science and Engineering journey, diving deep into programming fundamentals and algorithmic thinking.',
      color: 'cyan',
    },
    {
      icon: Building,
      title: 'Internship at ScaleTech',
      date: '2024',
      description: 'Gained real-world experience in software development, working with cutting-edge technologies and agile methodologies.',
      color: 'purple',
    },
    {
      icon: Code,
      title: 'Built Fitness Tracker',
      date: '2024',
      description: 'Developed a comprehensive fitness tracking application with React and Firebase, featuring real-time data visualization.',
      color: 'green',
    },
    {
      icon: Code,
      title: 'E-commerce Platform',
      date: '2024',
      description: 'Created a full-stack shopping website with user authentication, payment integration, and inventory management.',
      color: 'orange',
    },
    {
      icon: Brain,
      title: 'Completed ML Course',
      date: '2024',
      description: 'Mastered machine learning concepts including supervised learning, neural networks, and deep learning frameworks.',
      color: 'pink',
    },
  ];

  return (
    <section ref={timelineRef} className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          My Journey
        </h2>
        
        <div className="relative timeline-line">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item fade-up flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift">
                  <div className={`flex items-center mb-4 ${
                    item.color === 'cyan' ? 'text-cyan-400' :
                    item.color === 'purple' ? 'text-purple-400' :
                    item.color === 'green' ? 'text-green-400' :
                    item.color === 'orange' ? 'text-orange-400' :
                    'text-pink-400'
                  }`}>
                    <item.icon className="w-6 h-6 mr-3" />
                    <span className="text-sm font-semibold">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
              
              <div className="hidden md:flex w-2/12 justify-center">
                <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center ${
                  item.color === 'cyan' ? 'bg-cyan-500 border-cyan-400' :
                  item.color === 'purple' ? 'bg-purple-500 border-purple-400' :
                  item.color === 'green' ? 'bg-green-500 border-green-400' :
                  item.color === 'orange' ? 'bg-orange-500 border-orange-400' :
                  'bg-pink-500 border-pink-400'
                }`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;