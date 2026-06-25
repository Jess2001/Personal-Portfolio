import { useInView } from "../hooks";
import { GlowOrb, Icon } from "./ui";

export function CTA() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <div className={`relative bg-gradient-to-br from-violet-600/10 to-purple-600/5 border border-violet-500/20 rounded-2xl p-14 text-center overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <GlowOrb className="top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-500/15" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-['Poppins',sans-serif] text-white mb-6">Let's build something impactful.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">Whether you're looking to scale an existing platform or build a new vision from scratch, I bring the technical depth and design focus to make it happen.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="mailto:hello@jesswangui.dev" className="bg-violet-600 hover:bg-violet-500 text-white px-9 py-4 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2 transition-all hover:scale-105">
              <Icon name="send" className="!text-base" /> Send a Message
            </a>
            <a href="#" className="bg-white/5 hover:bg-white/10 text-white px-9 py-4 rounded-xl font-bold text-base border border-white/10 inline-flex items-center justify-center gap-2 transition-all">
              <Icon name="calendar_today" className="!text-base" /> Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-14 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-3">
          <div className="text-lg font-bold text-white font-['Poppins',sans-serif]">Jess<span className="text-violet-400">.</span></div>
          <p className="text-slate-600 text-sm max-w-xs">Full-Stack Engineer turning complex problems into elegant digital experiences.</p>
        </div>
        <div className="flex gap-12">
          {[{ title: "Connect", links: ["GitHub", "LinkedIn", "Twitter"] }, { title: "General", links: ["Resume", "Process", "Contact"] }].map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-slate-700 text-[10px] uppercase font-bold tracking-widest">{col.title}</span>
              {col.links.map((l) => <a key={l} href="#" className="text-slate-600 hover:text-violet-400 transition-colors text-sm">{l}</a>)}
            </div>
          ))}
        </div>
        <p className="text-slate-700 text-sm">© 2025 Jess Wangui.</p>
      </div>
    </footer>
  );
}
