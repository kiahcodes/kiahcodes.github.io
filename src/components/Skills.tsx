import { Smartphone, Server, Cloud, Zap, Code } from "lucide-react";
import SkillSphere from "./SkillSphere";

const Skills = () => {
  const skills = [
    { name: "C/C++ Programming", color: "#00D4FF" },
    { name: "HTML/CSS", color: "#8B5CF6" },
    { name: "JavaScript", color: "#00FF94" },
    { name: "React.js", color: "#F97316" },
    { name: "Python", color: "#EF4444" },
    { name: "Machine Learning", color: "#10B981" },
    { name: "Git/GitHub", color: "#3B82F6" },
    { name: "Node.js", color: "#8B5CF6" },
    { name: "SQL", color: "#00D4FF" },
    { name: "MongoDB", color: "#00FF94" },
    { name: "FastAPI", color: "#F97316" },
    { name: "Java", color: "#EF4444" },
    { name: "DSA", color: "#10B981" },
    { name: "Flutter", color: "#3B82F6" },
    { name: "n8n", color: "#8B5CF6" },
  ];

  const explorations = [
    {
      icon: Smartphone,
      title: "Competitive Programming",
      status: "Practicing",
      color: "cyan",
    },
    {
      icon: Server,
      title: "Agentic AI",
      status: "Practicing",
      color: "purple",
    },
    {
      icon: Code,
      title: "RAG",
      status: "Practicing",
      color: "blue",
    },
    {
      icon: Code,
      title: "MCP",
      status: "Exploring",
      color: "green",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      status: "Interested",
      color: "orange",
    },
    {
      icon: Zap,
      title: "LangChain",
      status: "Interested",
      color: "pink",
    },
  ];

  const colorClasses: Record<string, { badge: string; bar: string }> = {
    cyan: {
      badge: "bg-cyan-500/20 text-cyan-400",
      bar: "from-cyan-500 to-cyan-400",
    },
    purple: {
      badge: "bg-purple-500/20 text-purple-400",
      bar: "from-purple-500 to-purple-400",
    },
    green: {
      badge: "bg-green-500/20 text-green-400",
      bar: "from-green-500 to-green-400",
    },
    orange: {
      badge: "bg-orange-500/20 text-orange-400",
      bar: "from-orange-500 to-orange-400",
    },
    pink: {
      badge: "bg-pink-500/20 text-pink-400",
      bar: "from-pink-500 to-pink-400",
    },
    blue: {
      badge: "bg-blue-500/20 text-blue-400",
      bar: "from-blue-500 to-blue-400",
    },
  };

  return (
    <section className="py-16 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Technical Arsenal
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
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
                  style={{
                    backgroundColor: `${skill.color}20`,
                    color: skill.color,
                  }}
                >
                  {skill.name.charAt(0)}
                </div>
                <h4 className="text-sm font-medium text-white break-words w-full">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Current Explorations */}
        <div>
          <h3 className="text-xl font-bold text-white mb-1">
            Currently Exploring
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {explorations.map((item, index) => {
              const colors = colorClasses[item.color];
              return (
                <div
                  key={index}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.badge}`}
                    >
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ml-auto ${colors.badge}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-white mb-2 leading-tight">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
