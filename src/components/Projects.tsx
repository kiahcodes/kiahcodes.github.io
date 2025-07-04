import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, Dumbbell, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);

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

    if (projectsRef.current) {
      const items = projectsRef.current.querySelectorAll('.project-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Fitness Tracker Pro',
      description: 'A comprehensive fitness tracking application with real-time data visualization, workout planning, and progress analytics.',
      image: 'https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Dumbbell,
      techStack: ['React', 'Firebase', 'Chart.js', 'Tailwind CSS'],
      learnings: ['Real-time data handling', 'User authentication', 'Data visualization', 'Responsive design'],
      color: 'cyan',
      github: '#',
      live: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping website with user authentication, payment integration, and comprehensive inventory management.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      icon: ShoppingCart,
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      learnings: ['Full-stack development', 'Payment integration', 'Database design', 'API development'],
      color: 'purple',
      github: '#',
      live: '#',
    },
  ];

  return (
    <section ref={projectsRef} className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-item fade-up grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden rounded-2xl ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <project.icon className="w-5 h-5" />
                    <span className="font-semibold">{project.title}</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${
                index % 2 === 1 ? 'md:col-start-1' : ''
              }`}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm border ${
                          project.color === 'cyan' 
                            ? 'border-cyan-400 text-cyan-400' 
                            : 'border-purple-400 text-purple-400'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">What I Learned</h4>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, learningIndex) => (
                      <li key={learningIndex} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="glow-button flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className={`glow-button flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      project.color === 'cyan'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400'
                    } text-white`}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;