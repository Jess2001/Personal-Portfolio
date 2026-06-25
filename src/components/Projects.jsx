import { useState } from "react";
import { useInView } from "../hooks";
import { Tag, Icon } from "./ui";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "../data";

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div ref={ref} className={`group flex flex-col transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 150}ms` }}>
        <div className="aspect-video rounded-xl bg-slate-800 overflow-hidden mb-7 border border-white/10 relative">
          <img src={project.screenshot} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-transparent opacity-60" />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">{project.subtitle}</p>
          <h3 className="text-xl font-bold font-['Poppins',sans-serif] text-white mb-3">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-4">{project.description}</p>
          <p className="text-violet-300 text-sm font-medium mb-5">→ {project.result}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-all hover:scale-[1.02]">
              <Icon name="open_in_new" className="!text-base" /> Live Link
            </a>
            <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-violet-300 border border-violet-500/30 hover:border-violet-400 rounded-lg bg-transparent transition-colors">
              <Icon name="visibility" className="!text-base" /> Case Study
            </button>
            {project.gitFrontend && (
              <a href={project.gitFrontend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-300 border border-white/10 hover:border-white/30 rounded-lg bg-transparent transition-colors" title="Frontend Repository">
                <Icon name="code" className="!text-base" />
              </a>
            )}
          </div>
        </div>
      </div>
      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <div className="flex justify-between items-end mb-14">
        <div>
          <h2 className="text-3xl font-extrabold font-['Poppins',sans-serif] text-white mb-3">Featured Projects</h2>
          <p className="text-slate-400 max-w-lg text-sm">Selected works that showcase full-stack proficiency and user-centred design thinking.</p>
        </div>
        <button className="text-violet-400 font-bold text-sm hidden md:flex items-center gap-1 hover:translate-x-1 transition-transform">
          View All Projects <Icon name="arrow_forward" className="!text-base" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {PROJECTS.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
      </div>
    </section>
  );
}
