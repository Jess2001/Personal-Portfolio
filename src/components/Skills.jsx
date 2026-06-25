import { useInView } from "../hooks";
import { Tag, Icon } from "./ui";
import { SKILLS } from "../data";

const colorMap = {
  violet: { icon: "text-violet-400", bg: "bg-violet-500/10", border: "hover:border-violet-400/30" },
  purple: { icon: "text-purple-300", bg: "bg-purple-500/10", border: "hover:border-purple-400/30" },
  pink:   { icon: "text-pink-300",   bg: "bg-pink-500/10",   border: "hover:border-pink-400/30"   },
  indigo: { icon: "text-indigo-300", bg: "bg-indigo-500/10", border: "hover:border-indigo-400/30" },
};

function SkillCard({ name, data, delay = 0 }) {
  const [ref, inView] = useInView();
  const c = colorMap[data.color];
  return (
    <div ref={ref} className={`bg-white/[0.03] border border-white/10 ${c.border} rounded-2xl p-7 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center mb-5`}>
        <Icon name={data.icon} className={`!text-xl ${c.icon}`} />
      </div>
      <h3 className="text-lg font-bold font-['Poppins',sans-serif] text-white mb-5">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {data.tags.map((t) => <Tag key={t} variant="skill">{t}</Tag>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28">
      <h2 className="text-3xl font-extrabold font-['Poppins',sans-serif] text-white mb-12">Technical Toolkit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(SKILLS).map(([name, data], i) => (
          <SkillCard key={name} name={name} data={data} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
