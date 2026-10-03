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
  whatsapp:
    "https://wa.me/254727549959?text=" +
    encodeURIComponent(
      "Hi Jecinta, I saw your portfolio and wanted to reach out.",
    ),
};

export const METRICS = [
  {
    value: "3+ Years",
    label: "Building production software across healthcare and fintech.",
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
      "Python Django REST APIs following clean architecture principles.",
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
  role: "Full Stack Developer",
  //currentCompany: "Izola Life",
  location: "Nyeri, Kenya",
  phone: "0111 969 356",
  timezone: "GMT+3 (EAT)",
  yearsExperience: "3+",
  availability: "Open to new opportunities",
};

export const ABOUT = {
  intro:
    "I enjoy building software from interface to API. Over about three years across internships and full-time work, I've shipped Angular and TypeScript interfaces and Django REST APIs on production multi-tenant healthcare and SACCO banking platforms, designed relational schemas in PostgreSQL with transactions and concurrency-safe workflows, and leaned on pytest, GitHub Actions and Sentry to keep what I ship reliable once it's live.",
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
      title: "Tested and debuggable",
      body: "I write pytest/pytest-django suites and wire them into GitHub Actions CI, and lean on Sentry and structured logs to track production issues to their actual root cause rather than the symptom.",
    },
  ],
};


export const PHILOSOPHY = [
  {
    icon: "code",
    title: "Keep code easy to work with",
    body: "I try to keep code clear, consistent, and easy for another developer to pick up. Good naming, sensible structure, and small focused functions go a long way.",
  },

  {
    icon: "account_tree",
    title: "Think about the whole system",
    body: "I like understanding how the frontend, API, database, and the people using them fit together before changing one piece.",
  },

  {
    icon: "bug_report",
    title: "Debug the problem, not the symptom",
    body: "When something breaks, I trace it through the application, logs, requests, and database rather than patching the first thing that looks wrong.",
  },

  {
    icon: "database",
    title: "Make the database work for the application",
    body: "I pay attention to how data is modelled, how queries are written, and where unnecessary database work can slow an application down.",
  },

  {
    icon: "verified",
    title: "Test what can break",
    body: "I use tests to catch regressions and give me confidence when changing existing code, especially around permissions, business rules, and important backend flows.",
  },

  {
    icon: "groups",
    title: "Build with the team",
    body: "I value code reviews, clear communication, and being able to explain why I made a technical decision. The goal is to solve the problem, not just write the code.",
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
      name: "furniture-store",
      description:
        "Full-stack furniture ecommerce platform with a Django REST API and React frontend.",
      url: "https://github.com/Jess2001/furniture-store",
      tags: ["React", "TypeScript", "Django", "PostgreSQL", "Docker", "JWT auth", "RBAC", "pytest",],
    },

    {
      name: "MobiLendPlatform",
      description:
        "Backend-focused digital lending platform built around authentication, authorization, data integrity, and reliable API design.",
      url: "https://github.com/Jess2001/MobiLendPlatform",
      tags: ["Python", "Django REST", "React", "Typescript", "PostgreSQL", "pytest", "Docker"],
    },

    {
      name: "clinic-booking-api",
      description:
        "REST API for clinic appointment booking with authentication, booking rules, and transaction-safe scheduling.",
      url: "https://github.com/Jess2001/clinic-booking-api",
      tags: ["Python", "Django REST", "PostgreSQL", "pytest",' GitHub Actions', "RBAC", "JWT auth"],
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
  Languages: {
    tags: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  Frontend: {
    tags: [
      "Angular",
      "React",
      "RxJS",
      "Angular Material",
      "Chart.js",
      "Tailwind CSS",
      "REST API integration",
    ],
  },
  Backend: {
    tags: [
      "Django",
      "Django REST Framework",
      "Spring Boot",
      "JWT & RBAC",
      "Service-layer architecture",
      "Swagger / OpenAPI",
    ],
  },
  Databases: {
    tags: [
      "PostgreSQL",
      "MongoDB",
      "MongoEngine",
      "Schema design & indexing",
      "Query optimisation",
    ],
  },
  "Testing & Quality": {
    tags: [
      "pytest",
      "pytest-django",
      "Postman",
      "GitHub Actions CI",
      "Concurrency & regression testing",
    ],
  },
  "Engineering & Tools": {
    tags: ["Git", "Docker", "Linux", "Sentry", "Amazon S3", "System design"],
  },
};

export const EXPERIENCE = [
  {
    id: "izola",
    role: "Software Developer — Frontend & Full-Stack",
    stack: "Angular · Django REST · RxJS · MongoDB",
    company: "Izola Life",
    location: "Kiambu, Kenya · Remote",
    period: "June 2024 – September 2026",
    color: "violet",
    bullets: [
      "Built the Angular admin dashboard for appointments, therapists and organisations , Chart.js and Angular Material on RxJS-driven async data flows — and the Django REST backend behind each feature.",
      "Built reporting dashboards with multi-attribute filtering (year, revenue stream, subscription type, payment status), backed by DRF and MongoDB aggregation APIs.",
      "Built a bulk user-onboarding feature (CSV/Excel via Papa Parse) with per-row validation on both UI and API, a downloadable template and invalid-rows file, and admin-only permissions on both layers.",
      "Implemented RBAC and tenant isolation across organisation, therapist and patient data in Django REST + MongoDB/MongoEngine APIs, validating authorisation and isolation edge cases.",
      "Structured the Angular app with lazy-loaded feature modules, role/org route guards, a Firebase-token auth interceptor, and shareReplay caching with TTL invalidation.",
      "Traced inconsistent paid-appointment and revenue figures to two features reading different date fields, corrected the calculation, and regression-tested across payment methods and month boundaries.",
      "Fixed a bulk-invoicing defect where actions only covered the visible table page: the backend now counts all unpaid, attended appointments and generates invoices from the full list, not just what was on screen.",
      "Built an audit-logging system and optimised activity-log APIs with pagination, selective field loading and caching , eliminating N+1 query patterns and contributing to roughly 30% lower query latency overall.",
      "Documented REST APIs with Swagger/OpenAPI, reviewed teammates' changes before merge, and agreed API contracts with frontend developers and business teams across Kenya and Germany.",
    ],
  },
  {
    id: "eanem",
    role: "Frontend Developer Intern",
    stack: "Angular · REST API Integration",
    company: "E and M Technology House",
    location: "Tatu City, Kenya · On-site",
    period: "August 2023 – March 2024",
    color: "purple",
    bullets: [
      "Built Angular interfaces for member accounts, loan tracking, contributions and transaction management across multiple financial institutions on a multi-tenant SACCO banking platform.",
      "Translated SACCO operating requirements from stakeholders into working Angular modules, iterating on feedback.",
      "Integrated and tested REST APIs with Postman, validating account and transaction data and catching defects before frontend integration and release.",
      "Collaborated with backend engineers on API contracts and defect resolution.",
    ],
  },
  {
    id: "au",
    role: "Software Developer Intern",
    stack: "Microsoft Dynamics 365 Business Central",
    company: "Au Innovations",
    location: "Nairobi, Kenya · On-site",
    period: "May 2022 – August 2022",
    color: "pink",
    bullets: [
      "Supported Dynamics 365 Business Central workflows for internal digital-transformation initiatives.",
      "Wrote process documentation that cut support overhead by approximately 30%.",
    ],
  },
];

export const PROJECTS = [
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
  {
    id: "xaidi-admin",
    featured: true,
    title: "Xaidi Corporate Admin Dashboard",
    subtitle: "Enterprise Platform · Angular + Django",
    description:
      "Designed and engineered the primary multi-tenant administrative suite centralising analytics, operational configs, and user metrics. Built a high-density, real-time frontend using Angular with custom line-graph visualisations, interactive date-range filtering, role-based navigation, and clean data-management tables. Backed by a high-performance Django API layer optimised for complex database queries.",
    result:
      "Optimised database schema query execution and field indexing, reducing platform latency.",
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
      "Payment Integration": "Mpesa STK Push",
      Authentication: "Firebase",
      "Data Storage": "MongoDB",
    },
  },
  {
    id: "mobilend",
    featured: true,
    sideProject: true,
    status: "In progress",
    title: "MobiLend",
    subtitle: "Digital Lending Platform · Django REST Framework",
    description:
      "A backend-only digital lending platform built around correctness under concurrency and account-integrity guarantees. Built a custom user model with JWT authentication, 6-role RBAC, OTP verification and password-reset flows. The database schema separates customer-domain data from authentication identity, with constraints protecting integrity end to end, and an atomic registration workflow that commits three related records in one transaction and rolls back on any failure.",
    result:
      "Unit and integrations pytest/pytest-django tests covering authentication, authorisation across all six roles, OTP verification and rollback behaviour. Row-level locking and unique constraints prevent duplicate customer numbers under concurrent requests.",
    tags: [
      "Django REST Framework",
      "PostgreSQL",
      "pytest",
      "Docker",
      "JWT",
      "RBAC",
    ],
    liveUrl: "",
    gitBackend: "https://github.com/Jess2001/MobiLendPlatform",
    screenshot: "",
    gallery: [],
    architecture: {
      "Custom User Model":
        "JWT authentication via rest_framework_simplejwt, 6-role RBAC, OTP verification and password-reset flows",
      "Schema Design":
        "Customer-domain data separated from authentication identity, with constraints protecting data integrity; atomic 3-record registration transaction with rollback on failure",
      "Concurrency Control":
        "Row-level locking and unique constraints prevent duplicate customer numbers under concurrent requests",
      "Testing & Containerisation":
        "44 pytest/pytest-django tests; Dockerised with PostgreSQL; documented with Swagger/OpenAPI",
    },
    keyFeatures: [
      "Custom user model with JWT authentication and 6-role RBAC",
      "OTP verification and password-reset flows",
      "Atomic registration workflow committing three related records in one transaction, with rollback on failure",
      "Row-level locking prevents duplicate customer numbers under concurrent requests",
      "44 pytest/pytest-django tests across authentication, authorisation, OTP and rollback behaviour",
    ],
  },
  {
    id: "clinic-booking",
    featured: false,
    sideProject: true,
    title: "Clinic Booking API",
    subtitle: "Concurrency-Safe Scheduling Engine · Django REST Framework",
    description:
      "A backend-only clinic appointment scheduling API built to survive the failure mode most booking systems get wrong: two people booking the same slot at the same time. Every appointment is validated against a fixed 30-minute grid stored in timezone-safe UTC, then written inside an atomic transaction guarded by a pessimistic row lock and a composite database constraint — so the database itself refuses a double-booking, not just the application code.",
    result:
      "17 passing tests including a ThreadPoolExecutor concurrency test that fires booking requests roughly 200ms apart at the same slot and asserts exactly one succeeds. Deployed to Render with GitHub Actions running the full suite on every pull request.",
    tags: [
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    liveUrl: "https://clinic-booking-api-fxvt.onrender.com",
    //gitFrontend: "",
    gitBackend: "https://github.com/Jess2001/clinic-booking-api/",
    screenshot: "/assets/clinic-booking-architecture.png",
    gallery: [
      {
        src: "/assets/clinic-booking-architecture.svg",
        caption:
          "Request flow: JWT auth → slot validation → atomic transaction → row lock → composite constraint check",
      },
    ],
    architecture: {
      "Concurrency Control":
        "select_for_update() pessimistic locking inside transaction.atomic(), backed by a composite UniqueConstraint on (doctor, slot_time) scoped to CONFIRMED status",
      "Auth & Security":
        "JWT via rest_framework_simplejwt — patient identity is always derived from the verified token, never from the request body, with PII fields masked in responses",
      "Testing & CI/CD":
        "pytest-django suite (17 tests) including a ThreadPoolExecutor test that fires concurrent requests at one slot; GitHub Actions runs the suite on every pull request and auto-deploys to Render",
    },
    keyFeatures: [
      "Fixed-grid, timezone-safe (UTC) 30-minute slot architecture — no ambiguity about what a 'slot' is",
      "Two independent safeguards against double-booking: an application-level lock and a database-level constraint",
      "JWT-derived user context prevents client-side patient ID spoofing",
      "Automated CI pipeline: tests run on every PR, auto-deploy to Render on merge",
    ],
  },

  {
    id: "xaidi-migration",
    featured: false,
    title: "Xaidi App — React Native to React Migration",
    subtitle: "Platform Migration · React JS + Material UI",
    description:
      "Led the migration of core user-facing screens in the Xaidi platform from React Native to React JS web components, preserving full feature parity and interaction patterns while adapting mobile-first layouts for the browser. Profile and Settings were the two highest-traffic screens in the migration — covering account management, subscription/session data, availability scheduling, theming (light/dark), language preferences, and support channels.",
    result:
      "Shipped production-ready web equivalents of two of the app's most-used screens with zero feature regressions, giving the team a reusable pattern for migrating the remaining React Native screens.",
    tags: ["React", "Material UI", "React Native", "Responsive Design"],
    liveUrl: "",
    gitFrontend: "",
    gitBackend: "",
    screenshot: "/assets/xaidi-profile-page.png",
    gallery: [
      {
        src: "/assets/xaidi-profile-page.png",
        caption:
          "Profile: account overview, personal information, organisation membership, and support channels",
      },
      {
        src: "/assets/xaidi-settings-dark.png",
        caption:
          "Settings (dark mode): persona style, theme, language, and notification preferences",
      },
      {
        src: "/assets/xaidi-settings-light.png",
        caption:
          "Settings (light mode): the same screen re-themed, verified pixel-for-pixel against the RN version",
      },
    ],
    architecture: {
      "Frontend Stack":
        "React JS, Material UI component library, CSS-in-JS theming (light/dark)",
      "Migration Approach":
        "Mapped each React Native screen to an equivalent React web component tree, replacing native primitives with MUI/HTML equivalents while keeping the same state and data-fetching logic",
      "Architecture Pattern":
        "Shared theme tokens across light/dark mode, reusable form and settings-row components",
    },
    keyFeatures: [
      "Full feature-parity migration of the Profile screen: account info, active subscription, availability, organisation membership",
      "Settings screen with live theme switching (system / light / dark), 5-language selector, and granular notification toggles",
      "Consistent design system carried over from the React Native app so returning users felt no disruption",
      "Reusable settings-row and card patterns intended for the rest of the app's migration",
    ],
  },
  {
    id: "edupulse",
    featured: false,
    sideProject: true,
    title: "EduPulse Results",
    subtitle: "Education Analytics · Angular 20 ",
    description:
      "Full-stack academic performance analytics platform enabling educators and administrators to track student progress in real-time. Built a scalable multi-role dashboard system (Admin, Teacher, Student) with shared components, reusable data tables, and interactive visualizations. Implemented lazy-loaded nested routes, environment-based API configuration, and role-based access control.",
    result:
      "Architected scalable codebase supporting  students across multiple forms with feature-based folder structure and  code reusability through component composition.",
    tags: [
      "Angular 20",
      //"Spring Boot",
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
     // "Backend Stack": "Spring Boot 3.x, Java 21, REST controllers with CORS",
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
