export function Tag({ children, variant = "default" }) {
  const base = "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md";
  const variants = {
    default: "text-violet-300 bg-white/5 border border-white/10",
    skill: "text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm normal-case font-medium tracking-normal",
  };
  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}

export function Icon({ name, className = "" }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}
    >
      {name}
    </span>
  );
}

export function GlowOrb({ className }) {
  return <div className={`absolute rounded-full blur-[120px] pointer-events-none ${className}`} />;
}
