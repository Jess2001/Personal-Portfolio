import { useInView } from "../hooks";
import { Icon } from "./ui";
import { ABOUT } from "../data";
import Terminal from "./Terminal";

function Point({ point, delay }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`flex gap-5 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
        <Icon name={point.icon} className="!text-xl text-blue-400" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>

        <p className="text-slate-400 leading-7">{point.body}</p>
      </div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-blue-400 uppercase tracking-[0.25em] text-xs font-semibold">
            ABOUT ME
          </span>

          <h2 className="mt-3 text-4xl font-bold font-['Poppins',sans-serif] text-white leading-tight">
            Building software that balances
            <span className="text-blue-400"> user experience </span>
            with solid engineering.
          </h2>

          <p className="mt-6 text-slate-400 leading-8 text-lg">{ABOUT.intro}</p>

          <div className="mt-12 space-y-8">
            {ABOUT.points.map((point, index) => (
              <Point key={point.title} point={point} delay={index * 120} />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="lg:sticky lg:top-28">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
