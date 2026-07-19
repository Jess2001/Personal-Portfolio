import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProjectCard from "../components/Projects";
import Navbar from "../components/Navbar";
import { Footer } from "../components/CtaFooter";
import { Icon, Eyebrow } from "../components/ui";
import { PROJECTS } from "../data";

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-grain"
      style={{
        backgroundColor: "#07080b",
        color: "#fbfbffff",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        className="fixed inset-x-0 top-0 h-[560px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.10), transparent 70%)",
        }}
      />
      <Navbar />
      <main className="relative z-10 w-full overflow-x-hidden pt-36 pb-20">
        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors mb-8"
          >
            <Icon name="arrow_back" className="!text-base" /> Back to home
          </Link>
          <Eyebrow>Everything I've Built</Eyebrow>
          <h1 className="text-3xl md:text-4xl font-extrabold font-['Poppins',sans-serif] text-white mb-3">
            All Projects
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
            Production work, self-directed builds, and technical assessments —{" "}
            {PROJECTS.length} projects across the full stack.
          </p>
        </div>

        <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
