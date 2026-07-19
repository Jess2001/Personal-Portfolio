export function Tag({ children, variant = "default" }) {
  const base =
    "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md";
  const variants = {
    default: "text-blue-300 bg-white/5 border border-white/10",
    skill:
      "text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm normal-case font-medium tracking-normal",
  };
  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}

export function Icon({ name, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
      }}
    >
      {name}
    </span>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
      <span className="h-px w-6 bg-blue-400/50" />
      {children}
    </p>
  );
}

export function Card({
  children,
  className = "",
  elevated = false,
  as: Tag = "div",
  ...props
}) {
  return (
    <Tag
      className={`bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(59,130,246,0.15)] transition-all duration-300 ${elevated ? "rounded-3xl" : "rounded-2xl"} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
export function GlowOrb({ className }) {
  return (
    <div
      className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`}
    />
  );
}
