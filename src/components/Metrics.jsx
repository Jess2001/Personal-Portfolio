import { useInView } from "../hooks";
import { Icon } from "./ui";
import { METRICS } from "../data";

export default function Metrics() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <div className={`relative bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-14 overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Icon name="trending_up" className="!text-[8rem] text-white" />
        </div>
        <h2 className="text-2xl font-bold font-['Poppins',sans-serif] mb-12 flex items-center gap-4 text-white">
          By the Numbers <span className="h-px flex-1 bg-white/10" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {METRICS.map((m, i) => (
            <div key={i} className="space-y-2" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className={`text-5xl font-extrabold font-['Poppins',sans-serif] ${m.color}`}>{m.value}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
