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
