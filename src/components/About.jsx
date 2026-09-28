import { ABOUT, PROFILE } from "../data";

const NOW = [
  { label: "Role", value: "Software Developer" },
  { label: "Stack", value: "Angular · React · Django · Spring Boot" },
  { label: "Focus", value: "Healthcare and fintech platforms" },
  { label: "Based in", value: PROFILE.location },
  { label: "Status", value: PROFILE.availability },
];

function Point({ point }) {
  return (
    <div className="border-t border-border pt-5">
      <h3 className="text-[16px] font-semibold text-ink mb-2">
        {point.title}
      </h3>
      <p className="text-ink-soft text-[15px] leading-7">{point.body}</p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-content mx-auto px-6 md:px-8 py-20 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-16">
        <div>
          <h2 className="text-[28px] md:text-[34px] font-semibold text-ink leading-tight tracking-[-0.01em] mb-6">
            Building software that balances user experience with solid
            engineering.
          </h2>

          <p className="text-ink-soft leading-8 text-[16.5px] max-w-xl">
            {ABOUT.intro}
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {ABOUT.points.map((point) => (
              <Point key={point.title} point={point} />
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28 h-fit">
          <div className="border border-border rounded-lg p-6 bg-muted">
            <p className="font-mono text-[12.5px] text-ink-soft mb-5">Now</p>
            <dl className="space-y-4">
              {NOW.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-[11.5px] text-ink-soft mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-[14.5px] text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
