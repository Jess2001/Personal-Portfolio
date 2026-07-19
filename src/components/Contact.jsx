import { useState } from "react";
import { useInView } from "../hooks";
import { GlowOrb, Icon } from "./ui";
import { SOCIAL_LINKS, PROFILE } from "../data";

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact from ${form.name || "someone"}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`,
    );
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 mb-28"
    >
      <div
        className={`relative bg-gradient-to-br from-blue-600/10 to-sky-600/5 border border-blue-500/20 rounded-3xl p-8 md:p-14 overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <GlowOrb className="top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/15" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
                {PROFILE.availability}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-['Poppins',sans-serif] text-white mb-6 leading-tight">
              Let's build something impactful.
            </h2>
            <p className="text-slate-400 max-w-lg leading-relaxed mb-8">
              Whether you're hiring, have a project in mind, or just want to
              talk architecture — I read every message.
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                <Icon name="mail" className="!text-lg text-blue-400" />{" "}
                {SOCIAL_LINKS.email}
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                <Icon name="person" className="!text-lg text-blue-400" />{" "}
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                <Icon name="code" className="!text-lg text-blue-400" /> GitHub
              </a>
              <a
                href={SOCIAL_LINKS.resume}
                download
                className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                <Icon name="download" className="!text-lg text-blue-400" />{" "}
                Download Résumé
              </a>
              <p className="flex items-center gap-3 text-slate-500 text-sm font-medium">
                <Icon name="location_on" className="!text-lg text-blue-400" />{" "}
                {PROFILE.location}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                Name
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-black/30 border border-white/10 focus:border-blue-500/50 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-black/30 border border-white/10 focus:border-blue-500/50 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-black/30 border border-white/10 focus:border-blue-500/50 outline-none rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] inline-flex items-center justify-center gap-2"
            >
              <Icon name="send" className="!text-base" /> Send via email
            </button>
            <p className="text-slate-600 text-xs text-center">
              Opens your email client with this message pre-filled — nothing is
              stored.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
