import { EXPERIENCE } from "../data";

function ExperienceRow({ job, isLast }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-accent" />
      {!isLast && (
        <div className="absolute left-[3.5px] top-4 bottom-[-2.5rem] w-px bg-border" />
      )}

      <div className="pb-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="text-[17px] font-semibold text-ink">
              {job.role}
            </h3>
            <p className="text-[14.5px] text-ink-soft mt-0.5">
              {job.company} · {job.location}
            </p>
          </div>
          <div className="shrink-0 text-left sm:text-right">
            <p className="font-mono text-[12.5px] text-ink-soft">
              {job.period}
            </p>
            <p className="font-mono text-[12px] text-ink-soft mt-0.5">
              {job.stack}
            </p>
          </div>
        </div>

        <ul className="space-y-2 mt-4">
          {job.bullets.map((b, i) => (
            <li
              key={i}
              className="text-ink-soft text-[14.5px] flex gap-3 items-start leading-relaxed"
            >
              <span className="text-accent mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
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
      className="w-full max-w-content mx-auto px-6 md:px-8 py-20 md:py-24"
    >
      <h2 className="text-[28px] md:text-[34px] font-semibold text-ink mb-3 tracking-[-0.01em]">
        Experience
      </h2>
      <p className="text-ink-soft text-[15px] mb-14 max-w-lg">
        2+ years building production systems across healthcare, fintech, and
        education.
      </p>
      <div>
        {EXPERIENCE.map((job, i) => (
          <ExperienceRow
            key={job.id}
            job={job}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
