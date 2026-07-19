export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  //{ label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Jess2001",
  linkedin: "https://www.linkedin.com/in/jecintawangui/",
  email: "jecintawangui2001@gmail.com",
  resume: "/assets/Jecinta-Wangui-CV.pdf",
};

export const METRICS = [
  {
    value: "2+ Years",
    label: "Building production software for healthcare platforms.",
    icon: "work",
  },
  {
    value: "Healthcare",
    label:
      "Experience developing software for therapists, administrators and patient workflows.",
    icon: "favorite",
  },
  {
    value: "Frontend",
    label:
      "Angular, React and TypeScript focused on performance and usability.",
    icon: "web",
  },
  {
    value: "Backend",
    label:
      "Spring Boot and Django REST APIs following clean architecture principles.",
    icon: "dns",
  },
];

export const IMPACT_METRICS = [
  {
    value: "30%",
    label: "Reduction in support requests through intuitive UX redesign.",
    color: "text-blue-400",
  },
  {
    value: "50%",
    label: "Faster report generation via backend optimisation.",
    color: "text-sky-300",
  },
  {
    value: "40%",
    label: "Decrease in page load times for  dashboard.",
    color: "text-indigo-300",
  },
];

export const PROFILE = {
  name: "Jecinta Wangui",
  shortName: "Jess",
  role: "Full Stack Software Developer",
  currentCompany: "Izola Life",
  location: "Nairobi, Kenya",
  timezone: "GMT+3 (EAT)",
  yearsExperience: "2+",
  availability: "Open to new opportunities",
};

export const ABOUT = {
  intro:
    "I enjoy building software from interface to API. Whether I'm improving an Angular dashboard or designing a backend service with Spring Boot or Django, I focus on creating applications that are intuitive for users, maintainable for teams, and reliable in production.",
  points: [
    {
      icon: "hub",
      title: "End-to-end ownership",
      body: "Comfortable taking a feature from requirements to deployment—designing the UI, building REST APIs, integrating databases, and polishing the user experience.",
    },
    {
      icon: "architecture",
      title: "Clean engineering",
      body: "I value modular architecture, reusable components, meaningful abstractions and code that's easy to understand six months later—not just today.",
    },
    {
      icon: "rocket_launch",
      title: "Building for impact",
      body: "I enjoy turning complex workflows into software that feels simple, fast and reliable for the people using it.",
    },
    {
      icon: "trending_up",
      title: "Continuous growth",
      body: "I'm constantly improving my backend engineering skills, deepening my understanding of distributed systems, Spring Boot and software architecture through deliberate practice.",
    },
  ],
};

export const PHILOSOPHY = [
  {
    icon: "code",
    title: "Clean code, read twice as often as written",
    body: "Naming, structure, and small functions aren't style preferences — they're what makes a codebase safe to change six months later.",
  },
  {
    icon: "trending_up",
    title: "Design for scale, ship for now",
    body: "I plan the schema and the API contract for growth, but I don't gold-plate a feature nobody has asked to scale yet.",
  },
  {
    icon: "bolt",
    title: "Performance is a feature",
    body: "Query indexing, caching, and lazy loading aren't optional polish — a slow dashboard is a broken dashboard to the person using it.",
  },
  {
    icon: "accessibility_new",
    title: "Accessible by default",
    body: "Semantic markup, keyboard navigation, and color contrast get checked before a feature is called done, not bolted on after a complaint.",
  },
  {
    icon: "verified",
    title: "Tests earn trust",
    body: "I write tests so I can change code with confidence, not to hit a coverage number — the concurrency tests I write are the ones that catch real bugs.",
  },
  {
    icon: "favorite",
    title: "Build for the human on the other end",
    body: "Every architecture decision eventually shows up as a loading spinner, an error message, or a delightfully fast page. I try to remember that at every layer.",
  },
];

/* export const PROCESS_STEPS = [
  {
    icon: "search",
    title: "Research",
    body: "Clarify the real problem, read the existing codebase or domain data, and scope what 'done' actually means before writing code.",
  },
  {
    icon: "draw",
    title: "Design",
    body: "Sketch the data model and API contract first, then the component hierarchy — architecture decisions are cheaper on paper than in a PR review.",
  },
  {
    icon: "construction",
    title: "Build",
    body: "Implement in small, reviewable increments — feature-based folders, reusable components, and commits that tell a story.",
  },
  {
    icon: "science",
    title: "Test",
    body: "Unit and integration tests around the logic that can break silently — auth, permissions, payments, concurrency — not just the happy path.",
  },
  {
    icon: "rocket_launch",
    title: "Deploy",
    body: "Ship behind environment-based config, with CI checks and a rollback plan, whether that's Fly.io, GCP, or a client's own infrastructure.",
  },
  {
    icon: "monitoring",
    title: "Monitor",
    body: "Watch error rates and real usage after launch — Sentry alerts and user feedback shape the next iteration more than assumptions do.",
  },
];
 */
export const ARCHITECTURE_LAYERS = [
  {
    layer: "Client",
    icon: "devices",
    items: ["React / Angular SPA", "TypeScript", "Tailwind / Material UI"],
  },
  {
    layer: "API Gateway",
    icon: "api",
    items: ["REST endpoints", "CORS policy", "Rate limiting"],
  },
  {
    layer: "Auth",
    icon: "lock",
    items: [
      "JWT access & refresh",
      "Role-based access control",
      "Multi-tenant scoping",
    ],
  },
  {
    layer: "Application",
    icon: "dns",
    items: ["Django / Spring Boot", "Business logic & validation"],
  },
  {
    layer: "Caching",
    icon: "bolt",
    items: ["Redis", "Query result caching", "Session storage"],
  },
  {
    layer: "Data",
    icon: "database",
    items: ["PostgreSQL", "MongoDB", "Indexed, migration-tracked schemas"],
  },
  {
    layer: "Cloud & Deploy",
    icon: "cloud",
    items: ["Fly.io / GCP", "Docker", "CI checks before release"],
  },
];

export const GITHUB = {
  username: "Jess2001",
  pinnedRepos: [
    {
      name: "edu-pulse-frontend",
      description:
        "Angular 20 frontend for a multi-role academic analytics platform.",
      url: "https://github.com/Jess2001/edu-pulse-frontend",
      tags: ["Angular", "TypeScript"],
    },
    {
      name: "edu_pulse",
      description:
        "Spring Boot REST API powering the EduPulse analytics platform.",
      url: "https://github.com/Jess2001/edu_pulse",
      tags: ["Java", "Spring Boot"],
    },
    {
      name: "portfolio",
      description:
        "This site — React + Tailwind, built and iterated component by component.",
      url: "https://github.com/Jess2001/jess2001.github.io",
      tags: ["React", "Tailwind"],
    },
  ],
};

/* export const BLOG_POSTS = [
  {
    title: "Reusing one table component across Admin and Teacher dashboards",
    excerpt:
      "How a single StudentTableComponent with prop-driven data sources cut duplicate UI code across two roles in EduPulse.",
    tag: "Angular",
    status: "Coming soon",
  },
  {
    title: "JWT auth and RBAC in a multi-tenant Django API",
    excerpt:
      "Notes on isolating tenant data and scoping permissions cleanly when one API serves several organisations.",
    tag: "Django",
    status: "Coming soon",
  },
  {
    title: "What I'd do differently after two years of production React",
    excerpt:
      "State management, folder structure, and testing habits I've changed my mind about since my first commit.",
    tag: "Career",
    status: "Coming soon",
  },
]; */

/* export const TESTIMONIALS_PLACEHOLDER = true;
export const TESTIMONIALS = [
  {
    quote:
      "This space is reserved for a quote from a manager, teammate, or client — swap in real feedback once you have it on record.",
    name: "Add a name",
    role: "Add their role & company",
    placeholder: true,
  },
  {
    quote:
      "A second testimonial slot — short, specific feedback about one project or one strength lands better than a general compliment.",
    name: "Add a name",
    role: "Add their role & company",
    placeholder: true,
  },
  {
    quote:
      "A third slot for variety — consider asking a teammate from Izola Life or a reviewer from a recent interview process.",
    name: "Add a name",
    role: "Add their role & company",
    placeholder: true,
  },
];
 */
export const SKILLS = {
  Frontend: {
    icon: "terminal",
    color: "violet",
    tags: ["Angular v17+", "React", "TypeScript"],
  },
  Backend: {
    icon: "dns",
    color: "purple",
    tags: ["Django", "Flask", "Spring Boot"],
  },
  "Design / UI": {
    icon: "palette",
    color: "pink",
    tags: ["Tailwind CSS", "Material UI", "Responsive Design", "Figma"],
  },
  "Infra & Tools": {
    icon: "construction",
    color: "indigo",
    tags: ["Git", "Docker", "Github Actions", "Sentry", "PostgreSQL"],
  },
};

export const EXPERIENCE = [
  {
    id: "izola",
    role: "Software Engineer",
    stack: "React · Angular ·  Django",
    company: "Izola Life",
    location: "Kiambu, Kenya · Hybrid",
    period: "June 2024 – Present",
    color: "violet",
    bullets: [
      "Built secure multi-tenant Django REST APIs with JWT authentication and role-based access control.",
      "Built responsive, data-heavy administrative dashboards in Angular for healthcare operations and reporting.",
      "Integrated M-Pesa STK push and Stripe for client session payments and invoicing capabilities.",
      "Managed full-stack deliverables independently within a 100% remote team using async workflows and rigorous Git code reviews.",
    ],
  },
  {
    id: "eanem",
    role: "Frontend Engineering Intern",
    stack: "Angular · REST API Integration",
    company: "E and M Technology House",
    location: "Tatu City, Kenya · On-site",
    period: "August 2023 – March 2024",
    color: "purple",
    bullets: [
      "Built and maintained responsive UI features in Angular for a fintech front-end application, translating design specs into polished, reusable components.",
      "Integrated REST APIs into the Angular UI to display account and transaction data, handling loading, error, and empty states.",
      "Worked closely with backend engineers to consume secure banking APIs, shaping requirements around real UI needs.",
      "Practiced component-based architecture, reactive forms, and cross-browser UI testing in a fast-paced, on-site team.",
    ],
  },
  {
    id: "au",
    role: "Software Developer Intern",
    stack: "WordPress · Microsoft Dynamics 365",
    company: "Au Innovations",
    location: "Nairobi, Kenya · On-site",
    period: "May 2022 – August 2022",
    color: "pink",
    bullets: [
      "Developed and maintained business web properties using WordPress CMS — custom content blocks, responsive pages, and client-facing workflows.",
      "Supported internal digital transformation initiatives using Microsoft Dynamics 365 Business Central.",
      "Authored technical system documentation, reducing application support overhead .",
    ],
  },
];

export const PROJECTS = [
  {
    id: "edupulse",
    featured: true,
    title: "EduPulse Results",
    subtitle: "Education Analytics · Angular 20 + Spring Boot",
    description:
      "Full-stack academic performance analytics platform enabling educators and administrators to track student progress in real-time. Built a scalable multi-role dashboard system (Admin, Teacher, Student) with shared components, reusable data tables, and interactive visualizations. Implemented lazy-loaded nested routes, environment-based API configuration, and role-based access control.",
    result:
      "Architected scalable codebase supporting  students across multiple forms with feature-based folder structure and  code reusability through component composition.",
    tags: [
      "Angular 20",
      "Spring Boot",
      "TypeScript",
      "Chart.js",
      "REST APIs",
      "RxJS",
    ],
    //liveUrl: "http://localhost:4200",
    gitFrontend: "https://github.com/Jess2001/edu-pulse-frontend",
    gitBackend: "https://github.com/Jess2001/edu_pulse",
    screenshot: "/assets/edupulse-overview.png",
    gallery: [
      {
        src: "/assets/edupulse-admin-overview.png",
        caption:
          "Admin Overview: School-wide metrics with enrollment distribution donut chart and mean mark trends",
      },
      {
        src: "/assets/edupulse-admin-students.png",
        caption:
          "Admin Students: Searchable, sortable table with edit/delete capabilities and performance status badges",
      },
      {
        src: "/assets/edupulse-teacher-dashboard.png",
        caption:
          "Teacher Dashboard: Class metrics, top performers ranking, and quick action cards for grade management",
      },
      {
        src: "/assets/edupulse-student-dashboard.png",
        caption:
          "Student Dashboard: Personal performance overview, skills breakdown, subject analysis with study tips",
      },
    ],
    architecture: {
      "Frontend Stack":
        "Angular 20 (standalone components), RxJS Observables, Chart.js visualizations",
      "Backend Stack": "Spring Boot 3.x, Java 21, REST controllers with CORS",
      "Architecture Pattern":
        "Feature-based modules, lazy loading, shared sidebar with role-based nav, reusable component system",
    },
    keyFeatures: [
      "Multi-role dashboard system (Admin/Teacher/Student) with permission-based UI",
      "Shared sidebar component with dynamic navigation filtering",
      "Reusable StudentTableComponent used by admin and teacher with different data sources",
      "Real-time data visualization with Chart.js (bar charts, donut charts)",
      "Nested route structure with lazy-loaded components",
      "Environment-based API configuration for multi-environment deployment",
    ],
  },
  {
    id: "xaidi-admin",
    featured: true,
    title: "Xaidi Corporate Admin Dashboard",
    subtitle: "Enterprise Platform · Angular + Django",
    description:
      "Designed and engineered the primary multi-tenant administrative suite centralising analytics, operational configs, and user metrics. Built a high-density, real-time frontend using Angular with custom line-graph visualisations, interactive date-range filtering, role-based navigation, and clean data-management tables. Backed by a high-performance Django API layer optimised for complex database queries.",
    result:
      "Optimised database schema query execution and field indexing, reducing platform latency by 30%.",
    tags: ["Angular", "Django", "MongoDB", "REST APIs", "UI/UX Design"],
    liveUrl: "https://dashboard.xaidi.life/login",
    screenshot: "/assets/Screenshot 2026-05-18 at 15.36.57.png",
    gallery: [
      {
        src: "/assets/Screenshot 2026-05-18 at 15.36.57.png",
        caption: "Analytics Interface: Activity Line Charts & Snapshot Widgets",
      },
      {
        src: "/assets/Screenshot 2026-05-18 at 15.37.07.png",
        caption: "System Profiling: Distribution Layouts & Region Tracking",
      },
      {
        src: "/assets/Screenshot 2026-05-18 at 15.38.03.png",
        caption: "Record Management: High-Density Search Filtering",
      },
      {
        src: "/assets/Screenshot 2026-05-18 at 15.38.12.png",
        caption: "Workflow Allocations: Status Tracking & Payout Tables",
      },
    ],
    architecture: {
      "Frontend Ecosystem": "Angular v18, Modern Minimal UI Styling Patterns",
      "Backend Core": "Python, Django Framework, Custom API Services",
      "Data Storage": "MongoDB, Memory Caching Layers",
    },
  },
  {
    id: "xaidi-web",
    featured: false,
    title: "Xaidi Corporate Web Platform",
    subtitle: "Marketing Site · React + TypeScript",
    description:
      "Designed and engineered a high-fidelity, responsive marketing and client discovery platform for corporate and individual pipelines. Implemented smooth grid layouts, micro-interactions, custom media content blocks, and modular landing frames using component-driven React. Integrated lightweight styling and global asset handling for exceptional search visibility and rapid user conversion.",
    result:
      "Reduced standard page loading thresholds by 40%, generating a measurable 20% surge in customer engagement funnels.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Component Architecture",
      "UI/UX",
    ],
    liveUrl: "https://www.xaidi.life/",
    screenshot: "/assets/Screenshot 2026-05-18 at 15.56.36.png",
    gallery: [
      {
        src: "/assets/Screenshot 2026-05-18 at 15.56.36.png",
        caption: "B2C Product Funnel: Dynamic CTA Placements & App Downloads",
      },
      {
        src: "/assets/Screenshot 2026-05-18 at 15.57.47.png",
        caption: "B2B Product Funnel: Conversion Triggers & Screen Previews",
      },
      {
        src: "/assets/Screenshot 2026-05-18 at 15.57.01.jpg",
        caption: "Platform Engineering: Multi-Column Feature Matrix Cards",
      },
      {
        src: "/assets/Screenshot 2026-05-18 at 15.57.52.jpg",
        caption: "Media Integration: Publication Card Feeds & Editorial Grids",
      },
    ],
    architecture: {
      "UI Framework": "React JS, TypeScript, Reusable Component Blocks",
      "Design & Styling": "Tailwind CSS Utility Styling, Modern Layout Systems",
      Performance: "40% Page Load Drop, 20% Direct User Interaction Uplift",
    },
  },
  /*   {
    id: "credit-risk",
    featured: false,
    title: "Credit Risk Signal Engine",
    subtitle: "Fintech · Python + Django + PostgreSQL",
    description:
      "Lightweight credit-risk scoring service that evaluates borrower profiles and generates lending recommendations. Engineered feature extraction pipelines using repayment history, income consistency, loan utilization, and transaction patterns. Scoring algorithms produce explainable risk signals for lending decisions.",
    result:
      "End-to-end scoring service with REST API exposure, PostgreSQL persistence, and full Docker containerisation for repeatable deployment.",
    tags: ["Python", "Django", "PostgreSQL", "Docker", "REST APIs"],
    liveUrl: null,
    gitFrontend: null,
    gitBackend: "https://github.com/Jess2001",
    screenshot: "/assets/Screenshot 2026-05-18 at 16.10.51.png",
    gallery: [],
    architecture: {
      "Core Service":
        "Python, Django REST Framework, scoring algorithm pipeline",
      "Data Layer":
        "PostgreSQL — borrower profiles, scoring results, risk classifications",
      DevOps: "Docker containerisation for repeatable deployment",
      Testing:
        "Automated unit and API tests for scoring logic and service reliability",
    },
    keyFeatures: [
      "Feature extraction pipelines: repayment history, income consistency, loan utilization",
      "Explainable risk signal generation for lending decisions",
      "REST API exposure for scoring functionality",
      "Automated unit and API tests",
      "Docker containerised for repeatable deployment",
    ],
  }, */
];
