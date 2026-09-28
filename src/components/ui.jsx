// Small, restrained icon set. Used only where an icon communicates
// something a label alone wouldn't (external link, close, theme state) —
// not as decoration next to every heading.
const PATHS = {
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "arrow-left": "M19 12H5M11 18l-6-6 6-6",
  external: "M7 17L17 7M8 7h9v9",
  close: "M6 6l12 12M18 6L6 18",
  menu: "M4 7h16M4 12h16M4 17h16",
  download: "M12 4v11m0 0l-4-4m4 4l4-4M5 19h14",
  mail: "M4 6h16v12H4z M4 7l8 6 8-6",
  github:
    "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06a9.3 9.3 0 0 1 5 0c1.9-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.84-4.57 5.1.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.61.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z",
  linkedin:
    "M4.5 3.5A1.75 1.75 0 1 0 4.49 7 1.75 1.75 0 0 0 4.5 3.5zM3 9h3v12H3zM9.5 9H12.4v1.64h.04c.4-.76 1.4-1.64 2.9-1.64 3.1 0 3.66 2.04 3.66 4.7V21h-3v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-3z",
  location: "M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  sun: "M12 3v2m0 14v2m9-9h-2M5 12H3m14.95 6.95l-1.41-1.41M6.46 6.46 5.05 5.05m13.9 0-1.41 1.41M6.46 17.54l-1.41 1.41M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
  moon: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z",
  check: "M20 6L9 17l-5-5",
};

export function Icon({ name, className = "", size = 18, strokeWidth = 1.75 }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export function Tag({ children }) {
  return (
    <span className="font-mono text-[12.5px] text-ink-soft border border-border rounded-md px-2 py-1 leading-none">
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`max-w-2xl mb-12 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-[13px] text-ink-soft mb-3">{eyebrow}</p>
      )}
      <h2 className="text-[28px] md:text-[34px] font-semibold text-ink leading-tight tracking-[-0.01em]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15.5px] text-ink-soft leading-7 max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}

export function Button({ as: Tag = "a", variant = "primary", className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 text-[14.5px] font-medium px-5 py-2.5 rounded-lg border transition-colors duration-150";
  const variants = {
    primary:
      "bg-accent border-accent text-white hover:bg-accent-hover hover:border-accent-hover",
    secondary: "bg-transparent border-border text-ink hover:border-accent",
  };
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
