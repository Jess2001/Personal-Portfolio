import { Link } from "react-router-dom";
import ProjectCard from "./Projects";
import { Icon } from "./ui";
import { PROJECTS } from "../data";

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="w-full max-w-content mx-auto px-6 md:px-8 py-20 md:py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div className="max-w-xl">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-ink mb-3 tracking-[-0.01em]">
            Featured projects
          </h2>
          <p className="text-ink-soft text-[15px] leading-relaxed">
            Two projects that best show full-stack range. Open a case study
            for the problem, architecture, and result — or see everything
            I've built.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-[14.5px] font-medium text-ink border border-border hover:border-accent rounded-lg px-4 py-2.5 shrink-0 transition-colors whitespace-nowrap"
        >
          View all projects
          <Icon name="arrow-right" size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
