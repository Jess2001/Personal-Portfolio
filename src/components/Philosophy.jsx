import { useInView } from "../hooks";
import { Icon } from "./ui";
import { PHILOSOPHY } from "../data";

function Card({ item, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.15)] rounded-2xl p-7 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <Icon name={item.icon} className="!text-2xl text-blue-400 mb-4" />
      <h3 className="text-white font-bold font-['Poppins',sans-serif] mb-2.5">
        {item.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
          How I Work
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-['Poppins',sans-serif] text-white">
          Engineering philosophy
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PHILOSOPHY.map((item, i) => (
          <Card key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
