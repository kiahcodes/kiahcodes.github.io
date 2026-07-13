import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Code, ExternalLink, Github, Play, X, Zap } from 'lucide-react';

const Internship = () => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = '';
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Professional Experience
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Bonrix Software Systems</h3>
                  <p className="text-cyan-400 font-semibold">AI/ML Intern</p>
                  <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4" />
                    June 2026 - Present
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <Code className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-white font-semibold">Technologies</p>
                  <p className="text-gray-300 text-sm">ReactJS, FastAPI, vLLM, Qwen2.5-7B-Instruct</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                  <p className="text-white font-semibold">Scale</p>
                  <p className="text-gray-300 text-sm">128K context, 300 KB shared context</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Developed ContextGPT, a multi-user enterprise LLM assistant using ReactJS, FastAPI, vLLM, and Qwen2.5-7B-Instruct.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">
                    Deployed long-context inference on Podstack cloud GPUs via SSH using FP8 inference and tested on 3+ concurrent users.
                  </span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1WS_QJ7tSBMOQ2ecngiaeXLpH4XaN0bxv/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                <a
                  href="https://github.com/kiahcodes/ContextGPT.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ScaleTech</h3>
                  <p className="text-cyan-400 font-semibold">Software Development Intern</p>
                  <p className="text-gray-400 text-sm flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4" />
                    1 month
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <Code className="w-6 h-6 text-cyan-400 mb-2" />
                  <p className="text-white font-semibold">Technologies</p>
                  <p className="text-gray-300 text-sm">React, FastAPI, PostgreSQL</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                  <p className="text-white font-semibold">Focus</p>
                  <p className="text-gray-300 text-sm">Logistics route optimization</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Built a logistics route optimization system solving real-world delivery inefficiencies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Integrated OSRM, CSV upload, customer management, and route visualization.</span>
                </li>
              </ul>

              <button
                id="project-demo-btn"
                onClick={openModal}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-5 py-2.5 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                Project Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
            style={{ backgroundColor: '#0d1117' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-700">
              <span className="text-white font-semibold text-sm">Truck Route Planner</span>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-700"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <video
              ref={videoRef}
              src="/demo.mp4"
              controls
              autoPlay
              className="w-full"
              style={{ maxHeight: '70vh', background: '#000' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
};

export default Internship;
