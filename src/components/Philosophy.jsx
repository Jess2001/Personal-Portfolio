import { PHILOSOPHY } from "../data";

export default function Philosophy() {
  return (
    <section className="w-full max-w-content mx-auto px-6 md:px-8 py-20 md:py-24">
      <h2 className="text-[28px] md:text-[34px] font-semibold text-ink mb-12 tracking-[-0.01em]">
        How I work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        {PHILOSOPHY.map((item) => (
          <div key={item.title} className="border-t border-border pt-5">
            <h3 className="text-ink font-semibold text-[15.5px] mb-2">
              {item.title}
            </h3>
            <p className="text-ink-soft text-[14.5px] leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
