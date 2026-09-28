import { useState } from "react";
import { Icon } from "./ui";
import { SOCIAL_LINKS } from "../data";

const inputClass =
  "w-full bg-bg border border-border focus:border-accent outline-none rounded-lg px-4 py-2.5 text-ink text-[14.5px] placeholder:text-ink-soft transition-colors";

export default function Contact() {
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
      className="w-full max-w-content mx-auto px-6 md:px-8 py-20 md:py-24 border-t border-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <h2 className="text-[28px] md:text-[34px] font-semibold text-ink mb-5 tracking-[-0.01em]">
            Interested in working together?
          </h2>
          <p className="text-ink-soft leading-7 max-w-md mb-8 text-[15.5px]">
            I'm open to software engineering opportunities, particularly
            backend and full-stack roles.
          </p>
          <div className="space-y-3.5">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-3 text-ink-soft hover:text-accent transition-colors text-[14.5px]"
            >
              <Icon name="mail" size={16} /> {SOCIAL_LINKS.email}
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ink-soft hover:text-accent transition-colors text-[14.5px]"
            >
              <Icon name="linkedin" size={16} /> LinkedIn
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-ink-soft hover:text-accent transition-colors text-[14.5px]"
            >
              <Icon name="github" size={16} /> GitHub
            </a>
            <p className="flex items-center gap-3 text-ink-soft text-[14.5px]">
              <Icon name="location" size={16} /> Nairobi, Kenya
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[13px] text-ink-soft mb-1.5 block">
              Name
            </label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-[13px] text-ink-soft mb-1.5 block">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-[13px] text-ink-soft mb-1.5 block">
              Message
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
              placeholder="What are you building?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-lg font-medium text-[14.5px] transition-colors inline-flex items-center justify-center gap-2"
          >
            Send via email
          </button>
          <p className="text-ink-soft text-[12.5px] text-center">
            Opens your email client with this message pre-filled — nothing
            is stored.
          </p>
        </form>
      </div>
    </section>
  );
}
