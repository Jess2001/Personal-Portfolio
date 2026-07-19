import { useEffect, useState } from "react";
import { useInView } from "../hooks";

const LINES = [
  { prompt: "$", text: "whoami" },
  {
    prompt: ">",
    text: "Jecinta Wangui — Full Stack Software Developer",
    isOutput: true,
  },

  { prompt: "$", text: "current-role" },
  {
    prompt: ">",
    text: "Software Developer @ Izola Life",
    isOutput: true,
  },

  { prompt: "$", text: "tech-stack" },
  {
    prompt: ">",
    text: "Angular • React • TypeScript • Spring Boot • Django REST",
    isOutput: true,
  },

  { prompt: "$", text: "focus" },
  {
    prompt: ">",
    text: "Healthcare Software • Internal Platforms • REST APIs",
    isOutput: true,
  },

  { prompt: "$", text: "currently-learning" },
  {
    prompt: ">",
    text: "System Design • Spring Security • Distributed Systems",
    isOutput: true,
  },

  { prompt: "$", text: "availability" },
  {
    prompt: ">",
    text: "Open for Full-Stack Software Engineering roles",
    isOutput: true,
  },
];

export default function Terminal() {
  const [ref, inView] = useInView();
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (lineIndex >= LINES.length) return;
    const current = LINES[lineIndex];
    if (charIndex < current.text.length) {
      const t = setTimeout(
        () => setCharIndex((c) => c + 1),
        current.isOutput ? 14 : 34,
      );
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 380);
    return () => clearTimeout(t);
  }, [inView, lineIndex, charIndex]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-[11px] text-slate-500 font-mono">
          ~/portfolio • developer-profile.sh
        </span>
      </div>
      <div className="p-6 font-mono text-[13px] leading-7 min-h-[320px]">
        {LINES.slice(0, lineIndex).map((l, i) => (
          <div
            key={i}
            className={l.isOutput ? "text-blue-300" : "text-slate-200"}
          >
            <span className="text-slate-500 mr-2">{l.prompt}</span>
            {l.text}
          </div>
        ))}
        {inView && lineIndex < LINES.length && (
          <div
            className={
              LINES[lineIndex].isOutput ? "text-blue-300" : "text-slate-200"
            }
          >
            <span className="text-slate-500 mr-2">
              {LINES[lineIndex].prompt}
            </span>
            {LINES[lineIndex].text.slice(0, charIndex)}
            <span className="inline-block w-2 h-4 bg-emerald-400 align-middle animate-pulse ml-0.5" />
          </div>
        )}
      </div>
    </div>
  );
}
