export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--card)",
        muted: "var(--muted)",
        border: "var(--border)",
        ink: "var(--text)",
        "ink-soft": "var(--text-secondary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      // Shifting from ultra-wide 1800px down to an tight layout framework
      maxWidth: {
        portfolio: "1024px" /* Tight desktop layout bounds */,
        projectSection:
          "900px" /* Narrows the work viewport down for easy viewing */,
        reading: "60ch" /* High-density reading safety limit */,
      },
    },
  },
  plugins: [],
};
