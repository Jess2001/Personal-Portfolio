import { useInView } from "../hooks";
import { Icon } from "./ui";
import { PROCESS_STEPS } from "../data";

function Step({ step, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`relative bg-white/[0.03] border border-white/10 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className="font-mono text-xs text-blue-400/70">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center my-4">
        <Icon name={step.icon} className="!text-lg text-blue-400" />
      </div>
      <h3 className="text-white font-bold font-['Poppins',sans-serif] mb-2">{step.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
          Workflow
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-['Poppins',sans-serif] text-white">
          From problem to production
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        {PROCESS_STEPS.map((step, i) => (
          <Step key={step.title} step={step} index={i} />
        ))}
      </div>
    </section>
  );
}
