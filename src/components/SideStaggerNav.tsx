import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const SECTIONS = [
    { id: 'home', label: 'Home', index: 4 },
    { id: 'projects', label: 'Projects', index: 9 },
    { id: 'hackathons', label: 'Hackathons', index: 14 },
    { id: 'skills', label: 'Skills', index: 19 },
    { id: 'exploration', label: 'Exploration', index: 24 },
    { id: 'internship', label: 'Internship', index: 29 },
    { id: 'research', label: 'Research', index: 34 },
    { id: 'contact', label: 'Contact', index: 39 },
];

const TOTAL_LINES = 44;

const MOBILE_BREAKPOINT = 768;

const SideStaggerNav = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Add offset to recognize sections slightly before reaching completely the top
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            let current = 'home';
            for (const section of SECTIONS) {
                const el = document.getElementById(section.id);
                if (el && el.offsetTop <= scrollPosition) {
                    current = section.id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Init
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= MOBILE_BREAKPOINT) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="fixed right-0 top-0 h-screen flex flex-col justify-center items-end z-50 pointer-events-none">
            <button
                type="button"
                className="md:hidden pointer-events-auto fixed top-4 right-4 z-[60] p-2.5 rounded-lg bg-gray-900/90 backdrop-blur-sm border border-[#3afeda]/30 text-[#3afeda] shadow-lg"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
            >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {isMobileMenuOpen && (
                <button
                    type="button"
                    className="md:hidden pointer-events-auto fixed inset-0 z-[55] bg-gray-900/60 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close navigation menu"
                />
            )}

            <div
                className={`pointer-events-auto flex flex-col justify-center items-end group px-6 py-8 z-[56]
                    ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}`}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {Array.from({ length: TOTAL_LINES }).map((_, i) => {
                    const section = SECTIONS.find(s => s.index === i);
                    const isActive = section && section.id === activeSection;

                    let w = 8;
                    let o = 0.3;

                    if (hoveredIndex !== null) {
                        const dist = Math.abs(hoveredIndex - i);
                        const maxDist = 8;
                        if (dist < maxDist) {
                            // smooth sinusoidal curve based on distance
                            const factor = (Math.cos((dist / maxDist) * Math.PI) + 1) / 2;
                            w = 8 + factor * (section ? 32 : 20);
                            o = 0.3 + factor * 0.7;
                        }
                        if (section && dist === 0) {
                            w = 45;
                        }
                    } else if (isActive) {
                        w = 26;
                        o = 1;
                    }

                    const isMainNode = !!section;

                    if (isMainNode) {
                        return (
                            <div
                                key={i}
                                className="flex items-center justify-end cursor-pointer py-[3px] w-full group/item"
                                onMouseEnter={() => setHoveredIndex(i)}
                                onClick={() => handleClick(section.id)}
                            >
                                <span
                                    className={`text-[10px] sm:text-xs font-bold tracking-widest text-[#3afeda] mr-4 transition-all duration-300 ease-out whitespace-nowrap translate-x-0 pointer-events-auto
                    ${hoveredIndex !== null || isActive ? 'opacity-100' : 'opacity-50'}
                    ${isActive ? 'drop-shadow-[0_0_8px_rgba(58,254,218,0.8)]' : ''}
                  `}
                                >
                                    {section.label.toUpperCase()}
                                </span>
                                <div
                                    className="bg-[#3afeda] rounded-full transition-all duration-300 ease-out origin-right"
                                    style={{
                                        width: `${w}px`,
                                        height: isActive ? '3px' : '2px',
                                        opacity: o,
                                        boxShadow: isActive && hoveredIndex === null ? '0 0 8px rgba(58,254,218,0.8)' : 'none'
                                    }}
                                />
                            </div>
                        );
                    }

                    return (
                        <div
                            key={i}
                            className="flex items-center justify-end py-[3px] w-full"
                            onMouseEnter={() => setHoveredIndex(i)}
                        >
                            <div
                                className="bg-cyan-200 rounded-full transition-all duration-300 ease-out origin-right"
                                style={{ width: `${w}px`, height: '1px', opacity: o }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SideStaggerNav;
