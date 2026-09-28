import { Tag } from "./ui";
import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-content mx-auto px-6 md:px-8 py-20 md:py-24"
    >
      <h2 className="text-[28px] md:text-[34px] font-semibold text-ink mb-12 tracking-[-0.01em]">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        {Object.entries(SKILLS).map(([name, data]) => (
          <div key={name} className="border-t border-border pt-5">
            <h3 className="text-[15px] font-semibold text-ink mb-3">
              {name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
