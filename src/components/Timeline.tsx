import { useRef, useState } from "react";
import {
  GraduationCap,
  Building,
  Brain,
  Award,
  ChevronLeft,
  ChevronRight,
  MousePointerClick,
} from "lucide-react";

const timelineData = [
  {
    icon: GraduationCap,
    tag: "Education",
    title: "SSC",
    date: "2022",
    description: "Graduated with 96.4%.",
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: GraduationCap,
    tag: "Education",
    title: "HSC",
    date: "2024",
    description: "Completed with 93% and 97.6 percentile in JEE Mains.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    tag: "Education",
    title: "B.Tech CSE",
    date: "2024",
    description: "Started B.Tech in CSE at Nirma Institute of Technology.",
    gradient: "from-blue-500 to-sky-500",
  },
  {
    icon: Brain,
    tag: "Learning",
    title: "Machine Learning Course",
    date: "2025",
    description:
      "Neural networks, deep learning frameworks and AI deployment.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Building,
    tag: "Internship",
    title: "Full Stack Intern · Scaletech",
    date: "2025",
    description:
      "Built scalable systems and routing algorithms with React.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Building,
    tag: "Internship",
    title: "AI/ML Intern · Bonrix Software Systems",
    date: "Jun 2026",
    description:
      "Orchestrated multitenant, long-context LLM fine-tuning for an enterprise chatbot.",
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: Award,
    tag: "Funding",
    title: "SSIP 2.0 Funding · LabelLens",
    date: "Sep 2026",
    description:
      "LabelLens, my product-label scanning app, received SSIP 2.0 funding.",
    gradient: "from-orange-500 to-yellow-500",
    highlight: true,
  },
];

const THRESHOLD = 90;
const VISIBLE = 4;
const SPRING = "cubic-bezier(0.34, 1.4, 0.64, 1)";

const Timeline = () => {
  const n = timelineData.length;
  // order[0] is the card on top of the deck. Start with the latest milestone.
  const [order, setOrder] = useState(() =>
    Array.from({ length: n }, (_, k) => (n - 1 + k) % n),
  );
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [exitDir, setExitDir] = useState<0 | 1 | -1>(0);
  const startX = useRef(0);
  const moved = useRef(false);
  const busy = useRef(false);

  const rotate = (dir: 1 | -1) => {
    // dir 1: top card goes to the back. dir -1: back card returns to the top.
    setOrder((o) =>
      dir === 1 ? [...o.slice(1), o[0]] : [o[o.length - 1], ...o.slice(0, -1)],
    );
  };

  // Top card flies off in the swipe direction, then drops to the back.
  const sendToBack = (dir: 1 | -1) => {
    if (busy.current) return;
    busy.current = true;
    setExitDir(dir);
    setTimeout(() => {
      rotate(1);
      setExitDir(0);
      setDragX(0);
      busy.current = false;
    }, 260);
  };
  const prev = () => {
    if (busy.current) return;
    rotate(-1);
  };
  const jumpTo = (idx: number) =>
    setOrder((o) => {
      const at = o.indexOf(idx);
      return [...o.slice(at), ...o.slice(0, at)];
    });

  const onPointerDown = (e: React.PointerEvent) => {
    if (busy.current) return;
    startX.current = e.clientX;
    moved.current = false;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) moved.current = true;
    setDragX(dx);
  };
  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (!moved.current || Math.abs(dragX) > THRESHOLD) {
      sendToBack(dragX < 0 ? -1 : 1);
    } else {
      setDragX(0); // springs back
    }
  };

  const topIdx = order[0];

  return (
    <div
      className="w-full max-w-4xl mx-auto px-4 z-10 outline-none"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") sendToBack(1);
        if (e.key === "ArrowLeft") prev();
      }}
    >
      {/* Draggable card deck. Right padding leaves room for the peeking cards. */}
      <div className="relative w-[calc(100%-56px)] md:w-full max-w-[420px] mx-auto md:-translate-x-6 h-[300px] md:h-[320px] select-none">
        {order.map((idx, pos) => {
          const item = timelineData[idx];
          const Icon = item.icon;
          const isTop = pos === 0;
          const year = item.date.split(" ").pop();

          let transform: string;
          if (isTop) {
            const x = exitDir ? exitDir * 520 : dragX;
            transform = `translateX(${x}px) rotate(${x / 16}deg)`;
          } else {
            // Fan the cards behind out to the right so each one is visible.
            transform = `translate(${pos * 26}px, ${pos * -6}px) scale(${1 - pos * 0.06}) rotate(${pos * 2}deg)`;
          }

          return (
            <div
              key={item.title}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerUp : undefined}
              onPointerCancel={isTop ? onPointerUp : undefined}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
              className={`group absolute inset-0 overflow-hidden rounded-3xl border bg-gray-900 p-6 md:p-7 touch-pan-y ${
                isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
              } ${
                item.highlight
                  ? "border-orange-400/60 shadow-[0_0_40px_rgba(251,146,60,0.25)]"
                  : "border-gray-700 shadow-xl shadow-black/40"
              }`}
              style={{
                transform,
                zIndex: n - pos,
                opacity: exitDir && isTop ? 0 : pos < VISIBLE ? 1 : 0,
                transition:
                  dragging && isTop
                    ? "none"
                    : `transform ${exitDir && isTop ? "0.26s ease-in" : `0.6s ${SPRING}`}, opacity 0.26s`,
              }}
            >
              {/* Cursor spotlight */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.10), transparent 70%)",
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-15`} />

              {/* Year, always fully visible */}
              <span className="absolute top-3 right-5 text-5xl md:text-7xl font-black text-white/10 leading-none pointer-events-none">
                {year}
              </span>

              <div className="relative h-full flex flex-col">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gray-300 border border-white/15 rounded-full px-3 py-1">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-auto">
                  <span className="font-mono text-sm text-gray-400">
                    {item.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-14 flex items-center justify-center gap-3">
        <button
          aria-label="Previous"
          onClick={prev}
          className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 text-white flex items-center justify-center hover:bg-gray-700"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex items-center gap-2">
          {timelineData.map((item, i) => (
            <button
              key={item.title}
              aria-label={`${item.date}: ${item.title}`}
              onClick={() => jumpTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === topIdx
                  ? `w-8 bg-gradient-to-r ${item.gradient}`
                  : "w-2.5 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={() => sendToBack(1)}
          className="w-9 h-9 rounded-full bg-gray-800 border border-gray-700 text-white flex items-center justify-center hover:bg-gray-700"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
        <MousePointerClick className="w-4 h-4" /> Drag the card or use the arrows
      </p>
    </div>
  );
};

export default Timeline;
