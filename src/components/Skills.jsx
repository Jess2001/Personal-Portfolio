import { useInView } from "../hooks";
import { Tag, Icon } from "./ui";
import { SKILLS } from "../data";

const colorMap = {
  violet: {
    icon: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-400/30",
  },
  purple: {
    icon: "text-sky-300",
    bg: "bg-indigo-500/10",
    border: "hover:border-indigo-400/30",
  },
  pink: {
    icon: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "hover:border-sky-400/30",
  },
  indigo: {
    icon: "text-indigo-300",
    bg: "bg-indigo-500/10",
    border: "hover:border-indigo-400/30",
  },
};

function SkillCard({ name, data, delay = 0 }) {
  const [ref, inView] = useInView();
  const c = colorMap[data.color];
  return (
    <div
      ref={ref}
      className={`bg-white/[0.02] border border-white/[0.08] ${c.border} hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.12)] rounded-2xl p-7 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center mb-5`}
      >
        <Icon name={data.icon} className={`!text-xl ${c.icon}`} />
      </div>
      <h3 className="text-lg font-bold font-['Poppins',sans-serif] text-white mb-5">
        {name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {data.tags.map((t) => (
          <Tag key={t} variant="skill">
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28"
    >
      <h2 className="text-3xl font-extrabold font-['Poppins',sans-serif] text-white mb-12">
        Technical Toolkit
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(SKILLS).map(([name, data], i) => (
          <SkillCard key={name} name={name} data={data} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
