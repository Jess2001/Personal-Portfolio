import { useInView } from "../hooks";
import { Icon } from "./ui";
import { METRICS } from "../data";

function Stat({ m, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.04] ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-blue-500/20">
        <Icon name={m.icon} className="text-blue-400 !text-xl" />
      </div>

      <h3 className="text-xl font-bold text-white font-['Poppins',sans-serif] mb-3">
        {m.value}
      </h3>

      <p className="text-slate-400 text-sm leading-7">{m.label}</p>
    </div>
  );
}

export default function Metrics() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28"
    >
      <div
        className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Decorative Icon */}
        <div className="absolute top-6 right-6 opacity-[0.04] pointer-events-none">
          <Icon name="data_object" className="!text-7xl text-white" />
        </div>

        {/* Heading */}
        <div className="max-w-2xl mb-10">
          <span className="text-blue-400 uppercase tracking-[0.25em] text-xs font-semibold">
            OVERVIEW
          </span>

          <h2 className="mt-2 text-3xl font-bold font-['Poppins',sans-serif] text-white">
            Engineering at a Glance
          </h2>

          <p className="mt-3 text-slate-400 leading-7">
            Building production software with a focus on scalable architecture,
            intuitive user experiences, and clean engineering practices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {METRICS.map((metric, index) => (
            <Stat key={metric.value} m={metric} index={index} />
          ))}
        </div>

        {/* Philosophy */}
        <div className="mt-10 pt- border-t border-white/10">
          <p className="text-slate-500 italic max-w-3xl">
            Great software that is intuitive for users, maintainable for
            developers, and resilient enough to grow with the business.
          </p>
        </div>
      </div>
    </section>
  );
}
