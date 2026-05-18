import React from 'react';
import SkillSphere from './SkillSphere';

const Skills = () => {
  const skills = [
    { name: 'C/C++ Programming', color: '#00D4FF' },
    { name: 'HTML/CSS', color: '#8B5CF6' },
    { name: 'JavaScript', color: '#00FF94' },
    { name: 'React.js', color: '#F97316' },
    { name: 'Python', color: '#EF4444' },
    { name: 'Machine Learning', color: '#10B981' },
    { name: 'Git/GitHub', color: '#3B82F6' },
    { name: 'Node.js', color: '#8B5CF6' },
    { name: 'SQL', color: '#00D4FF' },
    { name: 'MongoDB', color: '#00FF94' },
    { name: 'FastAPI', color: '#F97316' },
    { name: 'Java', color: '#EF4444' },
    { name: 'DSA', color: '#10B981' },
    { name: 'Flutter', color: '#3B82F6' },
    { name: 'n8n', color: '#8B5CF6' },

  ];

  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Technical Arsenal
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 3D Skills Sphere */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[450px]">
            <SkillSphere />
          </div>

          {/* Technologies Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center hover-lift border border-gray-700 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center justify-center h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 mb-3 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                >
                  {skill.name.charAt(0)}
                </div>
                <h4 className="text-sm font-medium text-white break-words w-full">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;