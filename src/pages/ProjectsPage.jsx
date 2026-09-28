import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProjectCard from "../components/Projects";
import Navbar from "../components/Navbar";
import { Footer } from "../components/CtaFooter";
import { Icon } from "../components/ui";
import { PROJECTS } from "../data";

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-bg text-ink">
      <Navbar />
      <main className="w-full overflow-x-hidden pt-32 pb-24">
        <div className="w-full max-w-content mx-auto px-6 md:px-8 mb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[14px] text-ink-soft hover:text-ink transition-colors mb-8"
          >
            <Icon name="arrow-left" size={15} /> Back to home
          </Link>
          <h1 className="text-[28px] md:text-[34px] font-semibold text-ink mb-3 tracking-[-0.01em]">
            All projects
          </h1>
          <p className="text-ink-soft text-[15px] leading-relaxed max-w-xl">
            Production work, self-directed builds, and one platform
            migration — {PROJECTS.length} projects across the stack.
          </p>
        </div>

        <div className="w-full max-w-content mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
