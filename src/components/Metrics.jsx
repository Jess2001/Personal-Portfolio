import { METRICS } from "../data";

export default function Metrics() {
  return (
    <section className="w-full max-w-content mx-auto px-6 md:px-8 pb-20 md:pb-24">
      <div className="border-t border-border grid grid-cols-1 md:grid-cols-4 md:divide-x md:divide-border">
        {METRICS.map((m) => (
          <div key={m.value} className="py-7 md:px-6 border-b md:border-b-0 border-border first:md:pl-0">
            <p className="text-[19px] font-semibold text-ink mb-2">
              {m.value}
            </p>
            <p className="text-[14.5px] text-ink-soft leading-6">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
