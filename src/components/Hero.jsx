import { Link } from "react-router-dom";
import { useInView } from "../hooks";
import { GlowOrb, Icon } from "./ui";
import { SOCIAL_LINKS } from "../data";

export default function Hero() {
  const [ref, inView] = useInView();
  return (
    <section
      ref={ref}
      className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-36 pb-28 relative"
    >
      <GlowOrb className="top-0 right-1/4 w-96 h-96 bg-blue-600/20" />
      <GlowOrb className="bottom-0 left-1/4 w-64 h-64 bg-indigo-500/15" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        {/* Text */}
        <div
          className={`space-y-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
              Building production software • Open to new opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Poppins',sans-serif] leading-[1.08] tracking-tight text-white">
            Full-Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
              Software Engineer
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
            I build full-stack applications from frontend to backend with a
            focus on clean architecture, intuitive user experiences, and
            scalable APIs. My experience spans healthcare and financial systems
            where reliability, performance, and maintainability matter.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Icon name="work" className="!text-base text-blue-400" />
              Shipping production software @ Izola Life
            </span>

            <span className="flex items-center gap-1.5">
              <Icon name="location_on" className="!text-base text-blue-400" />
              Nairobi, Kenya
            </span>

            <span className="flex items-center gap-1.5">
              <Icon name="schedule" className="!text-base text-blue-400" />
              2+ years building production applications
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              "Angular",
              "React",
              "TypeScript",
              "Spring Boot",
              "Django REST",
              "PostgreSQL",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 hover:border-blue-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
              Recent Engineering Work
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Multitenant XAIDI Admin Dashboard",
                "Core Banking SACCO Platform",
                "Authentication & RBAC",
                "Reporting & Analytics",
                "Payment Integrations",
              ].map((project) => (
                <span
                  key={project}
                  className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-200"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore My Work
            </Link>
            <a
              href={SOCIAL_LINKS.resume}
              download
              className="bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-base border border-white/10 transition-all inline-flex items-center gap-2 hover:border-blue-400/40"
            >
              <Icon name="download" className="!text-base" />
              Download Resume
            </a>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-5 pt-2">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              <Icon name="code" className="!text-lg" /> GitHub
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              <Icon name="person" className="!text-lg" /> LinkedIn
            </a>
            <span className="w-px h-4 bg-white/10" />
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              <Icon name="mail" className="!text-lg" /> Email
            </a>
          </div>
        </div>

        {/* Photo */}
        <div
          className={`relative w-full transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-white/10 relative z-10">
            <img
              src="/assets/Jess.jpeg"
              alt="Jecinta Wangui — Full-Stack Developer"
              className="w-full h-full object-cover "
            />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.5) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
          <GlowOrb className="-top-10 -right-10 w-64 h-64 bg-blue-500/25" />
          <GlowOrb className="-bottom-10 -left-10 w-48 h-48 bg-indigo-500/20" />
        </div>
      </div>
    </section>
  );
}
