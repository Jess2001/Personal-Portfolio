import { useState } from "react";
import { Tag, Icon } from "./ui";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="group flex flex-col">
        <div className="aspect-video rounded-lg bg-muted overflow-hidden mb-6 border border-border relative">
          {!imageError && project?.screenshot ? (
            <img
              src={project?.screenshot}
              alt={project.title}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-ink-soft text-[13px]">No screenshot available</p>
            </div>
          )}
          {!project?.featured && (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-bg/90 border border-border rounded-md text-[11.5px] font-mono text-ink-soft">
              Side project
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-mono text-[12.5px] text-ink-soft mb-2">
            {project?.subtitle}
          </p>
          <h3 className="text-[19px] font-semibold text-ink mb-3">
            {project?.title}
          </h3>
          <p className="text-ink-soft text-[14.5px] leading-relaxed mb-3 line-clamp-4">
            {project?.description}
          </p>
          <p className="text-ink text-[14.5px] mb-5">{project?.result}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project?.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-auto">
            {project?.liveUrl && (
              <a
                href={project?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                <Icon name="external" size={14} />
                Live link
              </a>
            )}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-medium text-ink border border-border hover:border-accent rounded-lg bg-transparent transition-colors"
            >
              Case study
            </button>
            {project?.gitFrontend && (
              <a
                href={project?.gitFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-ink-soft hover:text-ink border border-border hover:border-accent rounded-lg bg-transparent transition-colors"
                title="Frontend repository"
              >
                <Icon name="github" size={15} />
              </a>
            )}
            {project?.gitBackend && !project?.gitFrontend && (
              <a
                href={project?.gitBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-ink-soft hover:text-ink border border-border hover:border-accent rounded-lg bg-transparent transition-colors"
                title="Backend repository"
              >
                <Icon name="github" size={15} />
              </a>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
