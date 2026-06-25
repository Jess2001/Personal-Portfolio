import { useScrolled } from "../hooks";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const scrolled = useScrolled();
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#050b1a]/90 backdrop-blur-2xl shadow-xl shadow-black/30" : "bg-transparent"}`}>
      <div className="flex justify-between items-center w-full max-w-screen-2xl mx-auto px-6 md:px-12 h-20">
        <a href="#" className="text-xl font-bold tracking-tighter text-white font-['Poppins',sans-serif]">
          Jess<span className="text-violet-400">.</span>
        </a>
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide">
              {link.label}
            </a>
          ))}
        </div>
        <a href="mailto:jecintawangui2001@gmail.com" className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105 active:scale-95">
          Get in touch
        </a>
      </div>
    </nav>
  );
}
