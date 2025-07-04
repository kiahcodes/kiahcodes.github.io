import React, { useEffect, useRef } from 'react';
import { Smartphone, Server, Database, Cloud, Zap, Code } from 'lucide-react';

const CurrentExploration = () => {
  const exploreRef = useRef<HTMLElement>(null);

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

    if (exploreRef.current) {
      const items = exploreRef.current.querySelectorAll('.explore-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const explorations = [
    {
      icon: Smartphone,
      title: 'React Native',
      description: 'Building cross-platform mobile applications with native performance',
      status: 'Learning',
      color: 'cyan',
      progress: 60,
    },
    {
      icon: Server,
      title: 'Backend APIs',
      description: 'Developing robust REST APIs with Node.js and Express',
      status: 'Practicing',
      color: 'purple',
      progress: 70,
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Mastering SQL and NoSQL database optimization',
      status: 'Exploring',
      color: 'green',
      progress: 50,
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Learning AWS services and cloud architecture patterns',
      status: 'Starting',
      color: 'orange',
      progress: 30,
    },
    {
      icon: Zap,
      title: 'GraphQL',
      description: 'Modern API query language for efficient data fetching',
      status: 'Interested',
      color: 'pink',
      progress: 20,
    },
    {
      icon: Code,
      title: 'TypeScript',
      description: 'Adding type safety to JavaScript applications',
      status: 'Practicing',
      color: 'blue',
      progress: 75,
    },
  ];

  return (
    <section ref={exploreRef} className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Current Explorations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The journey never stops. Here's what I'm diving into next to expand my technical horizons.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {explorations.map((item, index) => (
            <div
              key={index}
              className="explore-item fade-up bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                  item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                  item.color === 'green' ? 'bg-green-500/20 text-green-400' :
                  item.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                  item.color === 'pink' ? 'bg-pink-500/20 text-pink-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  item.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                  item.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                  item.color === 'green' ? 'bg-green-500/20 text-green-400' :
                  item.color === 'orange' ? 'bg-orange-500/20 text-orange-400' :
                  item.color === 'pink' ? 'bg-pink-500/20 text-pink-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {item.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Progress</span>
                  <span className="text-xs text-gray-400">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      item.color === 'cyan' ? 'bg-gradient-to-r from-cyan-500 to-cyan-400' :
                      item.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-400' :
                      item.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-400' :
                      item.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-orange-400' :
                      item.color === 'pink' ? 'bg-gradient-to-r from-pink-500 to-pink-400' :
                      'bg-gradient-to-r from-blue-500 to-blue-400'
                    }`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-800/60 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-300">Currently learning React Native & Backend APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentExploration;