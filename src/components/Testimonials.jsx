import { useInView } from "../hooks";
import { Icon } from "./ui";
import { TESTIMONIALS } from "../data";

function Card({ t, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white/[0.03] border border-dashed border-white/15 rounded-2xl p-7 flex flex-col transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon name="format_quote" className="!text-3xl text-blue-500/40 mb-3" />
      <p className="text-slate-400 text-sm leading-relaxed italic mb-6 flex-1">
        "{t.quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
          <Icon name="person" className="!text-base text-slate-500" />
        </div>
        <div>
          <p className="text-slate-300 text-sm font-semibold">{t.name}</p>
          <p className="text-slate-500 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-['Poppins',sans-serif] text-white mb-4">
          What collaborators say
        </h2>
        <p className="text-slate-400 leading-relaxed">
          These slots are placeholders — swap them out for real quotes from managers, teammates,
          or interviewers once you have them in writing.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Card key={i} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}
