import { useState } from "react";
import { useInView } from "../hooks";
import { Tag, Icon } from "./ui";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <div
        ref={ref}
        className={`group flex flex-col transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Screenshot */}
        <div className="aspect-video rounded-xl bg-slate-800 overflow-hidden mb-7 border border-white/10 relative">
          {!imageError && project?.screenshot ? (
            <img
              src={project?.screenshot}
              alt={project.title}
              onError={handleImageError}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800">
              <Icon name="image_not_supported" className="!text-5xl text-slate-500 mb-2" />
              <p className="text-slate-500 text-xs font-medium">No screenshot available</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-transparent opacity-60" />
          {!project?.featured && (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur rounded-full text-xs font-bold text-slate-300 border border-white/10">
              Side Project
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
            {project?.subtitle}
          </p>
          <h3 className="text-xl font-bold font-['Poppins',sans-serif] text-white mb-3">
            {project?.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-4">
            {project?.description}
          </p>
          <p className="text-blue-300 text-sm font-medium mb-5">
            → {project?.result}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project?.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            {project?.liveUrl && (
              <a
                href={project?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all hover:scale-[1.02] active:scale-95"
              >
                <Icon name="open_in_new" className="!text-base" />
                Live Link
              </a>
            )}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-blue-300 border border-blue-500/30 hover:border-blue-400 rounded-lg bg-transparent transition-colors"
            >
              <Icon name="visibility" className="!text-base" />
              Case Study
            </button>
            {project?.gitFrontend && (
              <a
                href={project?.gitFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-300 border border-white/10 hover:border-white/30 rounded-lg bg-transparent transition-colors"
                title="Frontend Repository"
              >
                <Icon name="code" className="!text-base" />
              </a>
            )}
            {project?.gitBackend && !project?.gitFrontend && (
              <a
                href={project?.gitBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-300 border border-white/10 hover:border-white/30 rounded-lg bg-transparent transition-colors"
                title="Backend Repository"
              >
                <Icon name="storage" className="!text-base" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}