import { useInView } from "../hooks";
import { GlowOrb } from "./ui";

export default function Hero() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-36 pb-28 relative">
      <GlowOrb className="top-0 right-1/4 w-96 h-96 bg-violet-600/20" />
      <GlowOrb className="bottom-0 left-1/4 w-64 h-64 bg-purple-500/15" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        <div className={`space-y-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-violet-300 uppercase">Available for new opportunities</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Poppins',sans-serif] leading-[1.08] tracking-tight text-white">
            Full-Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">Developer</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Building scalable, high-performance web applications with Angular, React, and Django. Focused on clean code and measurable user impact.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="bg-violet-600 hover:bg-violet-500 text-white px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]">View Projects</a>
            <a href="#" className="bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-base border border-white/10 transition-all">Download Resume</a>
          </div>
        </div>
        <div className={`relative w-full transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-white/10 relative z-10">
            <img src="/assets/Jess.jpeg" alt="Jess Wangui — Full-Stack Developer" className="w-full h-full object-cover grayscale contrast-125 opacity-80" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(139,92,246,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.6) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>
          <GlowOrb className="-top-10 -right-10 w-64 h-64 bg-violet-500/25" />
          <GlowOrb className="-bottom-10 -left-10 w-48 h-48 bg-purple-500/20" />
        </div>
      </div>
    </section>
  );
}
