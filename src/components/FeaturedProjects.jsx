import { Link } from "react-router-dom";
import ProjectCard from "./Projects";
import { Icon } from "./ui";
import { PROJECTS } from "../data";

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Poppins',sans-serif] text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Two projects that best show full-stack range and real production impact. Open a case
            study for problem, architecture, and results — or see everything I've built.
          </p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-300 border border-blue-500/30 hover:border-blue-400 rounded-lg px-5 py-3 shrink-0 transition-colors whitespace-nowrap"
        >
          View All Projects
          <Icon name="arrow_forward" className="!text-base" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {featured.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
