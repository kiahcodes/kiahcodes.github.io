import { useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Dumbbell,
  ShoppingCart,
  Navigation,
  Calculator,
  ScanLine,
} from "lucide-react";

const Projects = () => {
  const projectsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (projectsRef.current) {
      const items = projectsRef.current.querySelectorAll(".project-item");
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Truck Routing Optimization Web App",
      description:
        "A full-stack web application designed to solve the Vehicle Routing Problem using machine learning and routing algorithms.",
      image: "/routing.png",
      icon: Navigation,
      techStack: [
        "ReactJS",
        "Python (FastAPI)",
        "PostgreSQL",
        "OR-Tools",
        "KMeans",
        "OSRM",
      ],
      features: [
        "Uses KMeans clustering to strategically group destinations",
        "Integrates OSRM for accurate real-world distances",
        "Solves the complex Vehicle Routing Problem utilizing OR-Tools",
      ],
      color: "cyan",
      github: "https://github.com/kiahcodes/VehicleRoutingReactFastAPI.git",
      live: "/demo.mp4",
    },
    {
      id: 2,
      title: "LabelLens",
      description:
        "A mobile app to extract ingredients from product labels to identify potentially harmful substances, verify marketing claims and recommend safer alternatives.",
      image: "./labellens.png",
      icon: ScanLine,
      techStack: [
        "Flutter",
        "FastAPI",
        "Supabase",
        "Google ML Kit",
        "Groq API",
        "TTS/STT",
      ],
      features: [
        "Extracts ingredients from product labels using Google ML Kit OCR",
        "Identifies potentially harmful substances via Groq-powered LLM analysis",
        "Verifies marketing claims and recommends safer alternatives",
        "Supports voice-based chatbot interaction with TTS/STT",
      ],
      color: "pink",
      github: "https://github.com/kiahcodes/LabelLens_app.git",
      live: "https://drive.google.com/file/d/19U8qgtSPdYmUVBlrJwgZuO9B0OJhTTLj/view?usp=sharing",
    },
    {
      id: 3,
      title: "Fitness Tracking Website",
      description:
        "A workout planning platform enabling users to track metrics and plan their fitness journeys seamlessly.",
      image:
        "https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Dumbbell,
      techStack: ["HTML", "CSS", "JavaScript"],
      features: [
        "Comprehensive workout planning and tracking platform",
        "Integrated BMI calculator for personalized metric monitoring",
        "Secure user authentication feature",
      ],
      color: "orange",
      github: "https://github.com/kiahcodes/FitTrack.git",
      live: "https://kiahcodes.github.io/FitTrack/",
    },
    {
      id: 4,
      title: "Shopping Website",
      description:
        "A responsive clothing e-commerce website with a strong focus on navigation and highly interactive UI/UX elements.",
      image:
        "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      icon: ShoppingCart,
      techStack: ["HTML", "CSS", "JavaScript"],
      features: [
        "Fully responsive clothing showcase layout",
        "Interactive sign-in and sign-up toggle system",
        "Optimized UI/UX tailored for smooth intuitive navigation",
      ],
      color: "green",
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "Numerology Calculator",
      description:
        "A logic-based calculator that computes various numerological numbers based on Chaldean numerology principles.",
      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Calculator,
      techStack: ["C"],
      features: [
        "Calculates Birth Number securely and instantly",
        "Generates Life Path Number based on exact date inputs",
        "Computes Personality Number adhering to Chaldean numerology",
      ],
      color: "purple",
      github: "#",
      live: "#",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return {
          border: "border-cyan-400",
          text: "text-cyan-400",
          check: "bg-cyan-400",
          btn: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400",
        };
      case "purple":
        return {
          border: "border-purple-400",
          text: "text-purple-400",
          check: "bg-purple-400",
          btn: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400",
        };
      case "green":
        return {
          border: "border-green-400",
          text: "text-green-400",
          check: "bg-green-400",
          btn: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400",
        };
      case "orange":
        return {
          border: "border-orange-400",
          text: "text-orange-400",
          check: "bg-orange-400",
          btn: "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400",
        };
      case "pink":
        return {
          border: "border-pink-400",
          text: "text-pink-400",
          check: "bg-pink-400",
          btn: "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400",
        };
      default:
        return {
          border: "border-cyan-400",
          text: "text-cyan-400",
          check: "bg-cyan-400",
          btn: "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400",
        };
    }
  };

  return (
    <section ref={projectsRef} className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div
                key={project.id}
                className={`project-item fade-up grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    index % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
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
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "md:col-start-1" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className={`text-lg font-semibold ${colors.text} mb-3`}>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm border ${colors.border} ${colors.text}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-gray-300 flex items-start"
                        >
                          <span
                            className={`w-2 h-2 ${colors.check} rounded-full mr-3 mt-2 flex-shrink-0`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-button inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`glow-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 ${colors.btn} text-white`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
