import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrolled, useTheme } from "../hooks";
import { NAV_LINKS, SOCIAL_LINKS } from "../data";
import { Icon } from "./ui";

export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-bg/95 transition-shadow duration-200 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-content mx-auto px-6 md:px-8 h-[72px]">
        <Link
          to="/"
          className="text-[16px] font-semibold tracking-tight text-ink"
        >
          Jecinta Wangui
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={`/${link.href}`}
              className="text-ink-soft hover:text-ink transition-colors text-[14.5px]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-ink-soft hover:text-ink hover:border-accent transition-colors"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
          </button>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft hover:text-ink transition-colors text-[14.5px] rounded-md border border-border px-3 py-2 hover:border-accent"
          >
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.resume}
            download
            className="inline-flex bg-accent hover:bg-accent-hover text-white items-center gap-1.5 text-[14.5px] font-medium text-ink border border-border hover:border-accent rounded-lg px-4 py-2 transition-colors"
          >
            <Icon name="download" size={15} />
            Resume
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="w-9 h-9 flex items-center justify-center rounded-md border border-border text-ink-soft"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="w-9 h-9 flex items-center justify-center text-ink"
            aria-label="Toggle menu"
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t border-border px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={`/${link.href}`}
              onClick={() => setOpen(false)}
              className="text-ink text-[15px] bg-accent/5 hover:bg-accent/10 transition-colors rounded-lg px-4 py-2"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink text-[15px]"
          >
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.resume}
            download
            className="inline-flex items-center justify-center gap-2 text-[14.5px] font-medium text-white bg-accent rounded-lg px-4 py-2.5"
          >
            <Icon name="download" size={15} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
}
