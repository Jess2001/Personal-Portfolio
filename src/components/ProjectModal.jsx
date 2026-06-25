import { useEffect } from "react";
import { Icon } from "./ui";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-[#0b1325] border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-[#0b1325]/95 backdrop-blur border-b border-white/10 px-8 py-5 flex justify-between items-center z-10">
          <div>
            <h4 className="text-xl font-bold font-['Poppins',sans-serif] text-white">{project.title}</h4>
            <p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mt-0.5">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white" aria-label="Close modal">
            <Icon name="close" />
          </button>
        </div>
        <div className="p-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Project Overview</h5>
                <p className="text-slate-400 leading-relaxed text-sm">{project.description}</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Key Result</h5>
                <p className="text-violet-200 font-medium text-sm bg-violet-500/10 border border-violet-500/20 rounded-xl px-5 py-4">{project.result}</p>
              </div>
              {project.keyFeatures && (
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Key Features</h5>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="text-slate-400 text-sm flex gap-2 items-start">
                        <span className="text-violet-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="bg-white/[0.03] rounded-xl p-6 border border-white/10 space-y-5 h-fit">
              <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400">Architecture</h5>
              {Object.entries(project.architecture).map(([k, v]) => (
                <div key={k}>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">{k}</span>
                  <p className="text-sm font-medium text-white">{v}</p>
                </div>
              ))}
              <div className="pt-6 border-t border-white/10 space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Code</h5>
                {project.gitFrontend && (
                  <a href={project.gitFrontend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-violet-400 transition-colors">
                    <Icon name="code" className="!text-base" /> Frontend Repo
                  </a>
                )}
                {project.gitBackend && (
                  <a href={project.gitBackend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-violet-400 transition-colors">
                    <Icon name="storage" className="!text-base" /> Backend Repo
                  </a>
                )}
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-6">Interface Gallery</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="bg-black/30 border border-white/10 rounded-xl p-2 space-y-2">
                  <div className="rounded-lg overflow-hidden">
                    <img src={img.src} alt={img.caption} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p className="text-xs text-center text-slate-500 font-medium px-2 pb-1">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
