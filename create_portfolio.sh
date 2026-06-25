#!/bin/bash
# Run this from your project root: bash create_portfolio.sh

mkdir -p src/{components,data,hooks}

# ── data/index.js ────────────────────────────────────────────────────────────
cat > src/data/index.js << 'EOF'
export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export const METRICS = [
  { value: "30%", label: "Reduction in support requests through intuitive UX redesign.", color: "text-violet-400" },
  { value: "50%", label: "Faster report generation via backend optimisation.", color: "text-purple-300" },
  { value: "40%", label: "Decrease in page load times for core banking dashboard.", color: "text-pink-300" },
];

export const SKILLS = {
  Frontend: { icon: "terminal", color: "violet", tags: ["Angular v17+", "React", "TypeScript", "React Native"] },
  Backend: { icon: "database", color: "purple", tags: ["Django", "Flask", "Spring Boot", "Node.js"] },
  "Design / UI": { icon: "palette", color: "pink", tags: ["Tailwind CSS", "Material UI", "Responsive Design", "Figma"] },
  "Infra & Tools": { icon: "construction", color: "indigo", tags: ["Git", "Docker", "Redis", "Sentry", "PostgreSQL"] },
};

export const PROJECTS = [
  {
    id: "edupulse",
    title: "EduPulse Results",
    subtitle: "Education Analytics · Angular 20 + Spring Boot",
    description: "Full-stack academic performance analytics platform enabling educators and administrators to track student progress in real-time. Built a scalable multi-role dashboard system (Admin, Teacher, Student) with shared components, reusable data tables, and interactive visualizations. Implemented lazy-loaded nested routes, environment-based API configuration, and role-based access control. Backend REST API handles complex grade aggregations and performance calculations.",
    result: "Architected scalable codebase supporting 1200+ students across multiple forms with feature-based folder structure and 60%+ code reusability through component composition.",
    tags: ["Angular 20", "Spring Boot", "TypeScript", "Chart.js", "REST APIs", "RxJS"],
    liveUrl: "http://localhost:4200",
    gitFrontend: "https://github.com/Jess2001/edu-pulse-frontend",
    gitBackend: "https://github.com/Jess2001/edu_pulse",
    screenshot: "/assets/edupulse-overview.png",
    gallery: [
      { src: "/assets/edupulse-admin-overview.png", caption: "Admin Overview: School-wide metrics with enrollment distribution donut chart and mean mark trends" },
      { src: "/assets/edupulse-admin-students.png", caption: "Admin Students: Searchable, sortable table with edit/delete capabilities and performance status badges" },
      { src: "/assets/edupulse-teacher-dashboard.png", caption: "Teacher Dashboard: Class metrics, top performers ranking, and quick action cards for grade management" },
      { src: "/assets/edupulse-student-dashboard.png", caption: "Student Dashboard: Personal performance overview, skills breakdown, subject analysis with study tips" },
    ],
    architecture: {
      "Frontend Stack": "Angular 20 (standalone components), RxJS Observables, Chart.js visualizations",
      "Backend Stack": "Spring Boot 3.x, Java 21, REST controllers with CORS",
      "Architecture Pattern": "Feature-based modules, lazy loading, shared sidebar with role-based nav, reusable component system",
    },
    keyFeatures: [
      "Multi-role dashboard system (Admin/Teacher/Student) with permission-based UI",
      "Shared sidebar component with dynamic navigation filtering",
      "Reusable StudentTableComponent used by admin and teacher with different data sources",
      "Real-time data visualization with Chart.js (bar charts, donut charts)",
      "Nested route structure with lazy-loaded components",
      "Environment-based API configuration for multi-environment deployment",
      "Scalable mock data (12 students, 4 forms, 36 grades)",
      "Responsive design with Tailwind CSS and Material Icons",
    ],
  },
  {
    id: "xaidi-admin",
    title: "Xaidi Corporate Admin Dashboard",
    subtitle: "Enterprise Platform · Angular + Django",
    description: "Designed and engineered the primary multi-tenant administrative suite centralising analytics, operational configs, and user metrics. Built a high-density, real-time frontend using Angular with custom line-graph visualisations, interactive date-range filtering, role-based navigation, and clean data-management tables. Backed by a high-performance Django API layer optimised for complex database queries.",
    result: "Optimised database schema query execution and field indexing, reducing platform latency by 30%.",
    tags: ["Angular", "Django", "MongoDB", "REST APIs", "UI/UX Design"],
    liveUrl: "https://dashboard.xaidi.life/login",
    screenshot: "/assets/Screenshot 2026-05-18 at 15.36.57.png",
    gallery: [
      { src: "/assets/Screenshot 2026-05-18 at 15.36.57.png", caption: "Analytics Interface: Activity Line Charts & Snapshot Widgets" },
      { src: "/assets/Screenshot 2026-05-18 at 15.37.07.png", caption: "System Profiling: Distribution Layouts & Region Tracking" },
      { src: "/assets/Screenshot 2026-05-18 at 15.38.03.png", caption: "Record Management: High-Density Search Filtering" },
      { src: "/assets/Screenshot 2026-05-18 at 15.38.12.png", caption: "Workflow Allocations: Status Tracking & Payout Tables" },
    ],
    architecture: {
      "Frontend Ecosystem": "Angular v18, Modern Minimal UI Styling Patterns",
      "Backend Core": "Python, Django Framework, Custom API Services",
      "Data Storage": "MongoDB, Memory Caching Layers",
    },
  },
  {
    id: "xaidi-web",
    title: "Xaidi Corporate Web Platform",
    subtitle: "Marketing Site · React + TypeScript",
    description: "Designed and engineered a high-fidelity, responsive marketing and client discovery platform for corporate and individual pipelines. Implemented smooth grid layouts, micro-interactions, custom media content blocks, and modular landing frames using component-driven React. Integrated lightweight styling and global asset handling for exceptional search visibility and rapid user conversion.",
    result: "Reduced standard page loading thresholds by 40%, generating a measurable 20% surge in customer engagement funnels.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Component Architecture", "UI/UX"],
    liveUrl: "https://www.xaidi.life/",
    screenshot: "/assets/Screenshot 2026-05-18 at 15.56.36.png",
    gallery: [
      { src: "/assets/Screenshot 2026-05-18 at 15.56.36.png", caption: "B2C Product Funnel: Dynamic CTA Placements & App Downloads" },
      { src: "/assets/Screenshot 2026-05-18 at 15.57.47.png", caption: "B2B Product Funnel: Conversion Triggers & Screen Previews" },
      { src: "/assets/Screenshot 2026-05-18 at 15.57.01.jpg", caption: "Platform Engineering: Multi-Column Feature Matrix Cards" },
      { src: "/assets/Screenshot 2026-05-18 at 15.57.52.jpg", caption: "Media Integration: Publication Card Feeds & Editorial Grids" },
    ],
    architecture: {
      "UI Framework": "React JS, TypeScript, Reusable Component Blocks",
      "Design & Styling": "Tailwind CSS Utility Styling, Modern Layout Systems",
      Performance: "40% Page Load Drop, 20% Direct User Interaction Uplift",
    },
  },
];
EOF

# ── hooks/index.js ────────────────────────────────────────────────────────────
cat > src/hooks/index.js << 'EOF'
import { useState, useEffect, useRef } from "react";

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}
EOF

# ── components/ui.jsx ─────────────────────────────────────────────────────────
cat > src/components/ui.jsx << 'EOF'
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
EOF

# ── components/Navbar.jsx ─────────────────────────────────────────────────────
cat > src/components/Navbar.jsx << 'EOF'
import { useScrolled } from "../hooks";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const scrolled = useScrolled();
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#050b1a]/90 backdrop-blur-2xl shadow-xl shadow-black/30" : "bg-transparent"}`}>
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 md:px-12 h-20">
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
EOF

# ── components/Hero.jsx ───────────────────────────────────────────────────────
cat > src/components/Hero.jsx << 'EOF'
import { useInView } from "../hooks";
import { GlowOrb } from "./ui";

export default function Hero() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-28 relative">
      <GlowOrb className="top-0 right-1/4 w-96 h-96 bg-violet-600/20" />
      <GlowOrb className="bottom-0 left-1/4 w-64 h-64 bg-purple-500/15" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        <div className={`space-y-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-violet-300 uppercase">Available for new opportunities</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Poppins',sans-serif] leading-[1.08] tracking-tight text-white">
            Full-Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-300">Developer</span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Building scalable, high-performance web applications with Angular, React, and Django. Focused on clean code and measurable user impact.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="bg-violet-600 hover:bg-violet-500 text-white px-7 py-3.5 rounded-xl font-bold text-base transition-all hover:scale-[1.02] active:scale-[0.98]">View Projects</a>
            <a href="#" className="bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-base border border-white/10 transition-all">Download Resume</a>
          </div>
        </div>
        <div className={`relative w-full transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-white/10 relative z-10">
            <img src="/assets/Jess.jpeg" alt="Jess Wangui — Full-Stack Developer" className="w-full h-full object-cover grayscale contrast-125 opacity-80" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(139,92,246,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.6) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          </div>
          <GlowOrb className="-top-10 -right-10 w-64 h-64 bg-violet-500/25" />
          <GlowOrb className="-bottom-10 -left-10 w-48 h-48 bg-purple-500/20" />
        </div>
      </div>
    </section>
  );
}
EOF

# ── components/Metrics.jsx ────────────────────────────────────────────────────
cat > src/components/Metrics.jsx << 'EOF'
import { useInView } from "../hooks";
import { Icon } from "./ui";
import { METRICS } from "../data";

export default function Metrics() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-28">
      <div className={`relative bg-white/[0.03] border border-white/10 rounded-2xl p-10 md:p-14 overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Icon name="trending_up" className="!text-[8rem] text-white" />
        </div>
        <h2 className="text-2xl font-bold font-['Poppins',sans-serif] mb-12 flex items-center gap-4 text-white">
          By the Numbers <span className="h-px flex-1 bg-white/10" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {METRICS.map((m, i) => (
            <div key={i} className="space-y-2" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className={`text-5xl font-extrabold font-['Poppins',sans-serif] ${m.color}`}>{m.value}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

# ── components/Skills.jsx ─────────────────────────────────────────────────────
cat > src/components/Skills.jsx << 'EOF'
import { useInView } from "../hooks";
import { Tag, Icon } from "./ui";
import { SKILLS } from "../data";

const colorMap = {
  violet: { icon: "text-violet-400", bg: "bg-violet-500/10", border: "hover:border-violet-400/30" },
  purple: { icon: "text-purple-300", bg: "bg-purple-500/10", border: "hover:border-purple-400/30" },
  pink:   { icon: "text-pink-300",   bg: "bg-pink-500/10",   border: "hover:border-pink-400/30"   },
  indigo: { icon: "text-indigo-300", bg: "bg-indigo-500/10", border: "hover:border-indigo-400/30" },
};

function SkillCard({ name, data, delay = 0 }) {
  const [ref, inView] = useInView();
  const c = colorMap[data.color];
  return (
    <div ref={ref} className={`bg-white/[0.03] border border-white/10 ${c.border} rounded-2xl p-7 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center mb-5`}>
        <Icon name={data.icon} className={`!text-xl ${c.icon}`} />
      </div>
      <h3 className="text-lg font-bold font-['Poppins',sans-serif] text-white mb-5">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {data.tags.map((t) => <Tag key={t} variant="skill">{t}</Tag>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-28">
      <h2 className="text-3xl font-extrabold font-['Poppins',sans-serif] text-white mb-12">Technical Toolkit</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Object.entries(SKILLS).map(([name, data], i) => (
          <SkillCard key={name} name={name} data={data} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
EOF

# ── components/ProjectModal.jsx ───────────────────────────────────────────────
cat > src/components/ProjectModal.jsx << 'EOF'
import { useEffect } from "react";
import { Icon } from "./ui";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-[#0b1325] border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-[#0b1325]/95 backdrop-blur border-b border-white/10 px-8 py-5 flex justify-between items-center z-10">
          <div>
            <h4 className="text-xl font-bold font-['Poppins',sans-serif] text-white">{project.title}</h4>
            <p className="text-xs text-violet-400 font-semibold tracking-widest uppercase mt-0.5">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white" aria-label="Close modal">
            <Icon name="close" />
          </button>
        </div>
        <div className="p-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Project Overview</h5>
                <p className="text-slate-400 leading-relaxed text-sm">{project.description}</p>
              </div>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Key Result</h5>
                <p className="text-violet-200 font-medium text-sm bg-violet-500/10 border border-violet-500/20 rounded-xl px-5 py-4">{project.result}</p>
              </div>
              {project.keyFeatures && (
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Key Features</h5>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="text-slate-400 text-sm flex gap-2 items-start">
                        <span className="text-violet-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="bg-white/[0.03] rounded-xl p-6 border border-white/10 space-y-5 h-fit">
              <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400">Architecture</h5>
              {Object.entries(project.architecture).map(([k, v]) => (
                <div key={k}>
                  <span className="text-xs text-slate-500 font-semibold block mb-1">{k}</span>
                  <p className="text-sm font-medium text-white">{v}</p>
                </div>
              ))}
              <div className="pt-6 border-t border-white/10 space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Code</h5>
                {project.gitFrontend && (
                  <a href={project.gitFrontend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-violet-400 transition-colors">
                    <Icon name="code" className="!text-base" /> Frontend Repo
                  </a>
                )}
                {project.gitBackend && (
                  <a href={project.gitBackend} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-300 hover:text-violet-400 transition-colors">
                    <Icon name="storage" className="!text-base" /> Backend Repo
                  </a>
                )}
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-6">Interface Gallery</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="bg-black/30 border border-white/10 rounded-xl p-2 space-y-2">
                  <div className="rounded-lg overflow-hidden">
                    <img src={img.src} alt={img.caption} className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p className="text-xs text-center text-slate-500 font-medium px-2 pb-1">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
EOF

# ── components/Projects.jsx ───────────────────────────────────────────────────
cat > src/components/Projects.jsx << 'EOF'
import { useState } from "react";
import { useInView } from "../hooks";
import { Tag, Icon } from "./ui";
import ProjectModal from "./ProjectModal";
import { PROJECTS } from "../data";

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div ref={ref} className={`group flex flex-col transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 150}ms` }}>
        <div className="aspect-video rounded-xl bg-slate-800 overflow-hidden mb-7 border border-white/10 relative">
          <img src={project.screenshot} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-transparent opacity-60" />
        </div>
        <div className="flex flex-col flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">{project.subtitle}</p>
          <h3 className="text-xl font-bold font-['Poppins',sans-serif] text-white mb-3">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-4">{project.description}</p>
          <p className="text-violet-300 text-sm font-medium mb-5">→ {project.result}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-violet-600 hover:bg-violet-500 rounded-lg transition-all hover:scale-[1.02]">
              <Icon name="open_in_new" className="!text-base" /> Live Link
            </a>
            <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-violet-300 border border-violet-500/30 hover:border-violet-400 rounded-lg bg-transparent transition-colors">
              <Icon name="visibility" className="!text-base" /> Case Study
            </button>
            {project.gitFrontend && (
              <a href={project.gitFrontend} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-300 border border-white/10 hover:border-white/30 rounded-lg bg-transparent transition-colors" title="Frontend Repository">
                <Icon name="code" className="!text-base" />
              </a>
            )}
          </div>
        </div>
      </div>
      {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-28">
      <div className="flex justify-between items-end mb-14">
        <div>
          <h2 className="text-3xl font-extrabold font-['Poppins',sans-serif] text-white mb-3">Featured Projects</h2>
          <p className="text-slate-400 max-w-lg text-sm">Selected works that showcase full-stack proficiency and user-centred design thinking.</p>
        </div>
        <button className="text-violet-400 font-bold text-sm hidden md:flex items-center gap-1 hover:translate-x-1 transition-transform">
          View All Projects <Icon name="arrow_forward" className="!text-base" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {PROJECTS.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
      </div>
    </section>
  );
}
EOF

# ── components/CtaFooter.jsx ──────────────────────────────────────────────────
cat > src/components/CtaFooter.jsx << 'EOF'
import { useInView } from "../hooks";
import { GlowOrb, Icon } from "./ui";

export function CTA() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-28">
      <div className={`relative bg-gradient-to-br from-violet-600/10 to-purple-600/5 border border-violet-500/20 rounded-2xl p-14 text-center overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <GlowOrb className="top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-500/15" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-['Poppins',sans-serif] text-white mb-6">Let's build something impactful.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">Whether you're looking to scale an existing platform or build a new vision from scratch, I bring the technical depth and design focus to make it happen.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="mailto:hello@jesswangui.dev" className="bg-violet-600 hover:bg-violet-500 text-white px-9 py-4 rounded-xl font-bold text-base inline-flex items-center justify-center gap-2 transition-all hover:scale-105">
              <Icon name="send" className="!text-base" /> Send a Message
            </a>
            <a href="#" className="bg-white/5 hover:bg-white/10 text-white px-9 py-4 rounded-xl font-bold text-base border border-white/10 inline-flex items-center justify-center gap-2 transition-all">
              <Icon name="calendar_today" className="!text-base" /> Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full py-14 px-6 md:px-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left space-y-3">
          <div className="text-lg font-bold text-white font-['Poppins',sans-serif]">Jess<span className="text-violet-400">.</span></div>
          <p className="text-slate-600 text-sm max-w-xs">Full-Stack Engineer turning complex problems into elegant digital experiences.</p>
        </div>
        <div className="flex gap-12">
          {[{ title: "Connect", links: ["GitHub", "LinkedIn", "Twitter"] }, { title: "General", links: ["Resume", "Process", "Contact"] }].map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="text-slate-700 text-[10px] uppercase font-bold tracking-widest">{col.title}</span>
              {col.links.map((l) => <a key={l} href="#" className="text-slate-600 hover:text-violet-400 transition-colors text-sm">{l}</a>)}
            </div>
          ))}
        </div>
        <p className="text-slate-700 text-sm">© 2025 Jess Wangui.</p>
      </div>
    </footer>
  );
}
EOF

# ── App.jsx ───────────────────────────────────────────────────────────────────
cat > src/App.jsx << 'EOF'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { CTA, Footer } from "./components/CtaFooter";

export default function App() {
  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="min-h-screen w-full" style={{ backgroundColor: "#0b1325ff", color: "#fbfbffff", fontFamily: "'DM Sans', sans-serif" }}>
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <Metrics />
          <Skills />
          <Projects />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
EOF

echo "✅ All files created successfully!"
echo ""
echo "Structure:"
find src -type f | sort
