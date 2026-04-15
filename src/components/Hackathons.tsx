import { useEffect, useRef } from 'react';
import { Trophy, Medal, Code2, Sparkles } from 'lucide-react';

const Hackathons = () => {
    const hackathonsRef = useRef<HTMLElement>(null);

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

        if (hackathonsRef.current) {
            const items = hackathonsRef.current.querySelectorAll('.hackathon-card');
            items.forEach((item) => observer.observe(item));
        }

        return () => observer.disconnect();
    }, []);

    const achievements = [
        {
            id: 1,
            title: 'Innovate Bharat Hackathon',
            year: '2026',
            result: 'Finalist',
            description: 'Built an AI-powered mobile app to deeply analyze product labels for ingredient safety and insights.',
            icon: Trophy,
            contributions: [
                'Implemented robust ingredient extraction and safety insights generation',
                'Enabled personalized analysis targeting explicit allergies and sensitivities',
                'Developed harmful ingredient detection, claim verifications, and safer alternatives',
                'Integrated a responsive conversational chatbot with TTS/STT capabilities'
            ],
            technologies: ['Flutter', 'FastAPI', 'AI', 'TTS/STT'],
            color: 'cyan'
        },
        {
            id: 2,
            title: 'HackaMined',
            year: '2026',
            result: 'Participant',
            description: 'Pioneered a smart job market analytics platform leveraging live scraping and actionable insights.',
            icon: Code2,
            contributions: [
                'Scraped rich live data from LinkedIn and Naukri utilizing BeautifulSoup',
                'Generated crucial insights including market trends, skills gaps, and AI risks',
                'Built a sophisticated RAG-based intelligent chatbot powered by the Ollama API'
            ],
            technologies: ['Python', 'FastAPI', 'PostgreSQL', 'BeautifulSoup', 'RAG'],
            color: 'purple'
        },
        {
            id: 3,
            title: 'Smart India Hackathon',
            year: '2025',
            result: 'Internal Finalist',
            description: 'Developed an accessible conversational RASA chatbot crafted specifically to empower rural communities.',
            icon: Medal,
            contributions: [
                'Designed custom RASA conversational models tailored for regional context',
                'Successfully integrated the bot with Twilio for widespread SMS and WhatsApp access'
            ],
            technologies: ['Python', 'FastAPI', 'RASA', 'Twilio'],
            color: 'green'
        }
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'cyan': return { border: 'border-cyan-400', text: 'text-cyan-400', bg: 'bg-cyan-500/20 text-cyan-400', iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500' };
            case 'purple': return { border: 'border-purple-400', text: 'text-purple-400', bg: 'bg-purple-500/20 text-purple-400', iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500' };
            case 'green': return { border: 'border-green-400', text: 'text-green-400', bg: 'bg-green-500/20 text-green-400', iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500' };
            default: return { border: 'border-cyan-400', text: 'text-cyan-400', bg: 'bg-cyan-500/20 text-cyan-400', iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500' };
        }
    };

    return (
        <section ref={hackathonsRef} className="py-20 px-4 bg-gray-800/50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
                    Hackathons & Achievements
                </h2>

                <div className="space-y-8">
                    {achievements.map((item, index) => {
                        const colors = getColorClasses(item.color);
                        return (
                            <div
                                key={item.id}
                                className="hackathon-card fade-up bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift group"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Icon section */}
                                    <div className="flex-shrink-0">
                                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colors.iconBg} shadow-lg`}>
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content section */}
                                    <div className="flex-grow space-y-4">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                                    {item.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-3 mt-2">
                                                    <span className="text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full text-sm font-semibold">
                                                        {item.year}
                                                    </span>
                                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${colors.border} ${colors.text}`}>
                                                        {item.result}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {item.description}
                                        </p>

                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Contributions</h4>
                                            <ul className="space-y-2">
                                                {item.contributions.map((contribution, idx) => (
                                                    <li key={idx} className="text-gray-300 flex items-start text-sm md:text-base">
                                                        <Sparkles className={`w-4 h-4 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                                                        <span>{contribution}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-2 border-t border-gray-700 border-dashed">
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {item.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg}`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

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

export default Hackathons;
