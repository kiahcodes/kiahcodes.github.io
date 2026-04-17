import React, { useEffect, useRef } from 'react';

const skills = [
    { label: "Flutter", color: "#378ADD" },
    { label: "FastAPI", color: "#1D9E75" },
    { label: "Python", color: "#EF9F27" },
    { label: "Supabase", color: "#1D9E75" },
    { label: "Gemini AI", color: "#7F77DD" },
    { label: "React", color: "#378ADD" },
    { label: "Java", color: "#D85A30" },
    { label: "Spring Boot", color: "#639922" },
    { label: "PostgreSQL", color: "#185FA5" },
    { label: "Git", color: "#D85A30" },
    { label: "REST APIs", color: "#7F77DD" },
    { label: "Riverpod", color: "#378ADD" },
    { label: "SQL", color: "#185FA5" },
    { label: "ML Kit", color: "#BA7517" },
    { label: "BeautifulSoup", color: "#3B6D11" },
    { label: "GoRouter", color: "#378ADD" },
    { label: "RAG", color: "#7F77DD" },
    { label: "Linux", color: "#888780" },
    { label: "Dart", color: "#378ADD" },
    { label: "C++", color: "#993C1D" },
];

const SkillSphere: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const W = canvas.width;
        const H = canvas.height;
        const cx = W / 2;
        const cy = H / 2;
        const R = 180;

        let angleX = 0.3;
        let angleY = 0;
        let velX = 0;
        let velY = 0.004;
        let isDragging = false;
        let lastX = 0;
        let lastY = 0;
        let animationFrameId: number;

        const points = skills.map((s, i) => {
            const phi = Math.acos(-1 + (2 * i) / skills.length);
            const theta = Math.sqrt(skills.length * Math.PI) * phi;
            return { ...s, phi, theta };
        });

        const project = (x: number, y: number, z: number) => {
            const cosX = Math.cos(angleX);
            const sinX = Math.sin(angleX);
            const cosY = Math.cos(angleY);
            const sinY = Math.sin(angleY);

            const y1 = y * cosX - z * sinX;
            const z1 = y * sinX + z * cosX;

            const x2 = x * cosY + z1 * sinY;
            const z2 = -x * sinY + z1 * cosY;

            return { sx: cx + x2, sy: cy + y1, depth: z2 };
        };

        const draw = () => {
            ctx.clearRect(0, 0, W, H);

            const rendered = points.map(p => {
                const x = R * Math.sin(p.phi) * Math.cos(p.theta);
                const y = R * Math.sin(p.phi) * Math.sin(p.theta);
                const z = R * Math.cos(p.phi);
                const proj = project(x, y, z);
                const scale = (proj.depth + R) / (2 * R);
                const alpha = 0.25 + 0.75 * scale;
                const fs = Math.round(10 + 8 * scale);
                return { ...p, ...proj, scale, alpha, fs };
            });

            rendered.sort((a, b) => a.depth - b.depth);

            rendered.forEach(p => {
                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.font = `${p.scale > 0.6 ? 500 : 400} ${p.fs}px sans-serif`;
                ctx.fillStyle = p.color;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(p.label, p.sx, p.sy);
                ctx.restore();
            });
        };

        const animate = () => {
            if (!isDragging) {
                angleY += velY;
                angleX += velX;
                velX *= 0.97;
            }
            draw();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleMouseDown = (e: MouseEvent) => {
            isDragging = true;
            lastX = e.clientX;
            lastY = e.clientY;
            canvas.style.cursor = "grabbing";
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return;
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            angleY += dx * 0.008;
            angleX += dy * 0.008;
            velY = dx * 0.008;
            velX = dy * 0.008;
            lastX = e.clientX;
            lastY = e.clientY;
        };

        const handleMouseUp = () => {
            isDragging = false;
            canvas.style.cursor = "grab";
        };

        const handleTouchStart = (e: TouchEvent) => {
            isDragging = true;
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            // e.preventDefault(); // Commenting this out to avoid passive listener issues in React
            const dx = e.touches[0].clientX - lastX;
            const dy = e.touches[0].clientY - lastY;
            angleY += dx * 0.008;
            angleX += dy * 0.008;
            velY = dx * 0.008;
            velX = dy * 0.008;
            lastX = e.touches[0].clientX;
            lastY = e.touches[0].clientY;
        };

        const handleTouchEnd = () => {
            isDragging = false;
        };

        canvas.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        // Add non-passive event listener for touchstart and touchmove
        canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    return (
        <div style={{ padding: '1rem 0', textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <canvas
                ref={canvasRef}
                width={520}
                height={420}
                style={{ cursor: 'grab', maxWidth: '100%', display: 'block', margin: '0 auto' }}
            />
        </div>
    );
};

export default SkillSphere;
