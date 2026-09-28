import { useEffect } from "react";
import { Icon } from "./ui";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-surface border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-surface border-b border-border px-7 py-5 flex justify-between items-center z-10">
          <div>
            <h4 className="text-[19px] font-semibold text-ink">
              {project.title}
            </h4>
            <p className="font-mono text-[12.5px] text-ink-soft mt-0.5">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-ink-soft hover:text-ink hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="p-7 space-y-9">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h5 className="font-mono text-[12.5px] text-ink-soft mb-2.5">
                  Overview
                </h5>
                <p className="text-ink-soft leading-relaxed text-[14.5px]">
                  {project.description}
                </p>
              </div>
              <div>
                <h5 className="font-mono text-[12.5px] text-ink-soft mb-2.5">
                  Result
                </h5>
                <p className="text-ink text-[14.5px] leading-relaxed border-l-2 border-accent pl-4">
                  {project.result}
                </p>
              </div>
              {project.keyFeatures && (
                <div>
                  <h5 className="font-mono text-[12.5px] text-ink-soft mb-2.5">
                    Key features
                  </h5>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((f, i) => (
                      <li
                        key={i}
                        className="text-ink-soft text-[14.5px] flex gap-2.5 items-start leading-relaxed"
                      >
                        <span className="text-accent mt-1 shrink-0">·</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-muted rounded-lg p-5 border border-border space-y-5 h-fit">
              <h5 className="font-mono text-[12.5px] text-ink-soft">
                Architecture
              </h5>
              {Object.entries(project.architecture).map(([k, v]) => (
                <div key={k}>
                  <span className="text-[11.5px] text-ink-soft block mb-1">
                    {k}
                  </span>
                  <p className="text-[13.5px] text-ink leading-relaxed">{v}</p>
                </div>
              ))}
              <div className="pt-5 border-t border-border space-y-2.5">
                <h5 className="font-mono text-[12.5px] text-ink-soft mb-2">
                  Code
                </h5>
                {project.gitFrontend && (
                  <a
                    href={project.gitFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13.5px] text-ink-soft hover:text-accent transition-colors"
                  >
                    <Icon name="github" size={14} /> Frontend repo
                  </a>
                )}
                {project.gitBackend && (
                  <a
                    href={project.gitBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[13.5px] text-ink-soft hover:text-accent transition-colors"
                  >
                    <Icon name="github" size={14} /> Backend repo
                  </a>
                )}
              </div>
            </div>
          </div>

          {project.gallery?.length > 0 && (
            <div>
              <h5 className="font-mono text-[12.5px] text-ink-soft mb-5">
                Interface gallery
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div key={i} className="space-y-2">
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <p className="text-[12.5px] text-ink-soft px-1">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
