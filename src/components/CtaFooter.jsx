import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../data";

export function Footer() {
  return (
    <footer className="w-full py-14 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-3">
          <div className="text-lg font-bold text-white font-['Poppins',sans-serif]">
            Jess<span className="text-blue-400">.</span>
          </div>
          <p className="text-slate-600 text-sm max-w-xs">
            Full-Stack Engineer turning complex problems into elegant digital
            experiences.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-slate-700 text-[10px] uppercase font-bold tracking-widest">
              Connect
            </span>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-400 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-400 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-slate-600 hover:text-blue-400 transition-colors text-sm"
            >
              Email
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-slate-700 text-[10px] uppercase font-bold tracking-widest">
              General
            </span>
            <a
              href={SOCIAL_LINKS.resume}
              download
              className="text-slate-600 hover:text-blue-400 transition-colors text-sm"
            >
              Resume
            </a>
            <Link
              to="/#projects"
              className="text-slate-600 hover:text-blue-400 transition-colors text-sm"
            >
              Projects
            </Link>
            <Link
              to="/#experience"
              className="text-slate-600 hover:text-blue-400 transition-colors text-sm"
            >
              Experience
            </Link>
          </div>
        </div>
        <p className="text-slate-700 text-sm">
          © {new Date().getFullYear()} Jecinta Wangui.
        </p>
      </div>
    </footer>
  );
}
