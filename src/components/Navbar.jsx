import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrolled } from "../hooks";
import { NAV_LINKS, SOCIAL_LINKS } from "../data";
import { Icon } from "./ui";

export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#07080b]/90 backdrop-blur-2xl shadow-xl shadow-black/30" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center w-full max-w-screen-2xl mx-auto px-6 md:px-12 h-20">
        <Link
          to="/"
          className="text-xl font-bold tracking-tighter text-white font-['Poppins',sans-serif]"
        >
          Jess<span className="text-blue-400">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={`/${link.href}`}
              className="relative text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <Icon name="code" className="!text-xl" />
          </a>
          <a
            href={SOCIAL_LINKS.resume}
            download
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Icon name="download" className="!text-sm" />
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-slate-300"
          aria-label="Toggle menu"
        >
          <Icon name={open ? "close" : "menu"} className="!text-2xl" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#07080b]/98 backdrop-blur-2xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={`/${link.href}`}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SOCIAL_LINKS.resume}
            download
            className="bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold px-5 py-3 rounded-xl text-sm text-center flex items-center justify-center gap-2 transition-all"
          >
            <Icon name="download" className="!text-sm" /> Resume
          </a>
        </div>
      )}
    </nav>
  );
}
