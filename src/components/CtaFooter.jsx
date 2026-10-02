import { Link } from "react-router-dom";
import { SOCIAL_LINKS, PROFILE } from "../data";

export function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-8 border-t border-border">
      <div className="max-w-content mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-[15px] font-semibold text-ink">
            Jecinta Wangui
          </div>
          <p className="text-ink-soft text-[13.5px] mt-1">
            Software Developer, {PROFILE.location}
          </p>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] text-ink-soft">
              Connect
            </span>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-accent transition-colors text-[13.5px]"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-accent transition-colors text-[13.5px]"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="text-ink-soft hover:text-accent transition-colors text-[13.5px]"
            >
              Email
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[11px] text-ink-soft">
              General
            </span>
            <a
              href={SOCIAL_LINKS.resume}
              download
              className="text-ink-soft hover:text-accent transition-colors text-[13.5px]"
            >
              Resume
            </a>
            <Link
              to="/#projects"
              className="text-ink-soft hover:text-accent transition-colors text-[13.5px]"
            >
              Projects
            </Link>
            <Link
              to="/#experience"
              className="text-ink-soft hover:text-accent transition-colors text-[13.5px]"
            >
              Experience
            </Link>
          </div>
        </div>
        <p className="text-ink-soft text-[13.5px]">
          © {new Date().getFullYear()} Jecinta Wangui.
        </p>
      </div>
    </footer>
  );
}
