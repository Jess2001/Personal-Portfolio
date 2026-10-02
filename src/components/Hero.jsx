import { Link } from "react-router-dom";
import { Icon } from "./ui";
import { SOCIAL_LINKS, PROFILE } from "../data";

const STACK = [
  "Angular",
  "React",
  "TypeScript",
  "Django REST",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
];

export default function Hero() {
  return (
    <section className="w-full max-w-content mx-auto px-6 md:px-8 pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.65fr] gap-14 lg:gap-16 items-start">
        <div>
          <p className="text-[14.5px] font-mono text-accent mb-6">
            Open to new opportunities
          </p>

          <h1 className="text-[40px] sm:text-[48px] md:text-[58px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink">
            Jecinta Wangui
          </h1>
          <p className="mt-2 text-[22px] md:text-[26px] text-ink-soft font-medium">
            Software Developer
          </p>

          <p className="mt-9 text-[17px] md:text-[18px] text-ink-soft leading-8 max-w-xl">
            I build full-stack web applications — Angular and React on the
            frontend, Python and Django REST Framework on the backend, with
            PostgreSQL and MongoDB for data. Most of my production work so
            far has been in healthcare and fintech, based in {PROFILE.location}.
          </p>

          <p className="mt-6 font-mono text-[13.5px] text-ink-soft">
            {STACK.join(" · ")}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-10">
            <Link
              to="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-[14.5px] font-medium transition-colors"
            >
              View projects
            </Link>
            <a
              href={SOCIAL_LINKS.resume}
              download
              className="inline-flex items-center gap-2 border border-accent hover:border-accent text-ink px-5 py-2.5 rounded-lg text-[14.5px] font-medium transition-colors"
            >
              <Icon name="download" size={15} />
              Download CV
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-ink text-[14.5px] transition-colors"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-ink text-[14.5px] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] lg:justify-self-end">
          <div className="aspect-[4/5] w-full rounded-xl overflow-hidden border border-border bg-muted">
            <img
              src="/assets/Jess.jpeg"
              alt="Jecinta Wangui"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
