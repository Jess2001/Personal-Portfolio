import { useInView } from "../hooks";
import { Icon } from "./ui";
import { EXPERIENCE } from "../data";

const colorMap = {
  violet: {
    accent: "text-blue-400",
    border: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/30",
    dot: "bg-blue-400",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  purple: {
    accent: "text-sky-300",
    border: "border-indigo-500/30",
    hoverBorder: "hover:border-indigo-500/30",
    dot: "bg-indigo-400",
    badge: "bg-indigo-500/10 text-sky-300 border-indigo-500/20",
  },
  pink: {
    accent: "text-sky-300",
    border: "border-sky-500/30",
    hoverBorder: "hover:border-sky-500/30",
    dot: "bg-sky-400",
    badge: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  },
};

function ExperienceCard({ job, index }) {
  const [ref, inView] = useInView();
  const c = colorMap[job.color];
  return (
    <div
      ref={ref}
      className={`relative pl-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline dot + line */}
      <div
        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full ${c.dot} ring-4 ring-[#0b1325]`}
      />
      {index < EXPERIENCE.length - 1 && (
        <div className="absolute left-[5px] top-5 bottom-0 w-px bg-white/10" />
      )}

      <div
        className={`bg-white/[0.02] border border-white/[0.08] ${c.hoverBorder} hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.12)] rounded-2xl p-7 transition-all duration-300`}
      >
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <h3 className="text-lg font-bold font-['Poppins',sans-serif] text-white">
              {job.role}
            </h3>
            <p className={`text-sm font-semibold ${c.accent} mt-0.5`}>
              {job.company}
            </p>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5">
              <Icon name="location_on" className="!text-sm" />
              {job.location}
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full border ${c.badge}`}
            >
              {job.period}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {job.stack}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2">
          {job.bullets.map((b, i) => (
            <li
              key={i}
              className="text-slate-400 text-sm flex gap-2.5 items-start leading-relaxed"
            >
              <span className={`${c.accent} mt-1 shrink-0`}>▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28"
    >
      <h2 className="text-3xl font-extrabold font-['Poppins',sans-serif] text-white mb-4">
        Work Experience
      </h2>
      <p className="text-slate-400 text-sm mb-14 max-w-lg">
        2+ years building production systems across healthcare, fintech, and
        education.
      </p>
      <div className="space-y-8">
        {EXPERIENCE.map((job, i) => (
          <ExperienceCard key={job.id} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
