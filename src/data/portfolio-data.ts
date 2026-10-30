export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "all" | "ecommerce" | "social" | "webapps";
  categoryLabel: string;
  tags: string[];
  liveUrl: string;
  image: string;
  repoUrl?: string;
  domain: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level: "Core" | "Advanced" | "Proficient";
    iconName: string;
  }[];
}

export interface ExperienceItem {
  type: "work" | "education";
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Moha Igal",
  nickname: "Moha",
  domain: ".dev",
  title: "Frontend Web Developer & Firebase Specialist",
  roles: [
    "Frontend Web Developer",
    "Firebase & Backend Integrator",
    "React & TypeScript Specialist",
    "UI / UX Engineer",
  ],
  bio: "Frontend web developer who builds clean, responsive web applications and integrates Firebase and backend services. Focused on functional user experiences, solid architecture, and real-world problem solving.",
  shortBio: "Frontend web developer building clean, responsive web applications with React, TypeScript, Tailwind CSS, and Firebase.",
  location: "Jos, Plateau State, Nigeria",
  email: "igalmoha0@gmail.com",
  status: "Available for new projects & full-time roles",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Moha808",
    githubUsername: "@Moha808",
    linkedin: "https://www.linkedin.com/in/igal-mohadapwa",
    linkedinUsername: "igal-mohadapwa",
    twitter: "https://twitter.com/M_o_h_a_808",
    twitterUsername: "@M_o_h_a_808",
  },
  stats: [
    { value: 8, suffix: "+", label: "Production Projects" },
    { value: 2, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Commitment" },
    { value: 98, suffix: "%", label: "Responsive Accuracy" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "shopverse",
    title: "ShopVerse",
    tagline: "E-Commerce Website & Online Marketplace",
    description:
      "A modern e-commerce marketplace featuring product discovery across electronics, fashion, and home goods, with full shopping cart flows, search, category filters, and responsive checkout.",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    domain: "shop-verse-theta.vercel.app",
    image: "/projects/shopverse.png",
    tags: ["React", "JavaScript", "Tailwind CSS", "Cart State", "Responsive UI"],
    liveUrl: "https://shop-verse-theta.vercel.app/",
    highlights: [
      "Product catalog with multi-category filtering and instant keyword search",
      "Dynamic cart management with persistent quantity updates and order summary",
      "Clean mobile-first navigation and responsive product detail cards",
    ],
  },
  {
    id: "talkam",
    title: "TalkAm",
    tagline: "Social Media & Community Platform",
    description:
      "A community-focused social media platform built for genuine conversations, profile creation, post feeds, user interactions, and real-time social networking.",
    category: "social",
    categoryLabel: "Social Platforms",
    domain: "talk-am-seven.vercel.app",
    image: "/projects/talkam.png",
    tags: ["React", "Firebase", "Real-Time DB", "User Auth", "Tailwind CSS"],
    liveUrl: "https://talk-am-seven.vercel.app/",
    highlights: [
      "Community feed with user interaction, post creation, and responsive threads",
      "Firebase authentication and user profile management",
      "Clean UI designed for fast mobile discussions and content discovery",
    ],
  },
  {
    id: "pactpoint",
    title: "PactPoint",
    tagline: "Online Dealroom & Negotiation Platform",
    description:
      "A digital dealroom platform for online business negotiations, enabling structured offer exchanges, collaborative terms alignment, decision analytics, and agreement finalization.",
    category: "webapps",
    categoryLabel: "Web Applications",
    domain: "pactpoint-dealroom.vercel.app",
    image: "/projects/pactpoint.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Dealroom Engine", "Workflow UI"],
    liveUrl: "https://pactpoint-dealroom.vercel.app/",
    highlights: [
      "Structured negotiation rooms with offer exchange and status tracking",
      "Decision support analytics interface for evaluating deal trade-offs",
      "Digital agreement finalization workflows with role-based visibility",
    ],
  },
  {
    id: "zamari-foods",
    title: "Zamari Foods",
    tagline: "Food Business & Superfoods Brand Website",
    description:
      "Official website and storefront for Zamari Foods, an authentic Nigerian superfoods enterprise showcasing natural, healthy products, nutritional benefits, and customer order channels.",
    category: "ecommerce",
    categoryLabel: "E-Commerce & Business",
    domain: "zamarifoods.shop",
    image: "/projects/zamari-foods.png",
    tags: ["React", "Tailwind CSS", "Product Showcase", "Brand Identity", "Mobile-First"],
    liveUrl: "https://zamarifoods.shop/",
    highlights: [
      "Branded superfoods showcase with clear nutritional highlights and packaging details",
      "Direct ordering channels for fast customer conversion across devices",
      "Clean visual identity reflecting 100% natural and healthy Nigerian food products",
    ],
  },
  {
    id: "tin-city-founders",
    title: "Tin City Founders",
    tagline: "Entrepreneurship & Innovation Association Website",
    description:
      "The official platform for Tin City Founders, a not-for-profit association advancing entrepreneurship, tech innovation, and economic development for founders in Jos, Plateau State.",
    category: "social",
    categoryLabel: "Business & Community",
    domain: "tin-city-founders.vercel.app",
    image: "/projects/tin-city-founders.png",
    tags: ["React", "Tailwind CSS", "Community Platform", "Typography", "Responsive Layout"],
    liveUrl: "https://tin-city-founders.vercel.app/",
    highlights: [
      "Showcases local entrepreneur community initiatives, founder directories, and programs",
      "Clear call-to-actions for prospective partners, sponsors, and member founders",
      "Professional organization branding tailored to regional startup ecosystem growth",
    ],
  },
  {
    id: "pharmasense",
    title: "PharmaSense",
    tagline: "Smart Pharmacy Management Platform",
    description:
      "A smart pharmacy administration system built for healthcare retailers to track prescription dispensing, monitor medicine stock in real-time, handle expiry alerts, and streamline daily transactions.",
    category: "webapps",
    categoryLabel: "Healthcare & Management",
    domain: "pharmasense-one.vercel.app",
    image: "/projects/pharmasense.png",
    tags: ["React", "Firebase / DB", "TypeScript", "Inventory Management", "Healthcare UX"],
    liveUrl: "https://pharmasense-one.vercel.app/",
    highlights: [
      "Real-time medication inventory tracking with stock-level warnings and search",
      "Prescription management workflow for dispensing accuracy and audit trails",
      "Structured point-of-sale overview designed for daily retail pharmacy operations",
    ],
  },
  {
    id: "recordify",
    title: "Student Document & Verification System",
    tagline: "Academic File Management & Verification Platform",
    description:
      "An institutional document management portal (Recordify) developed to securely archive, index, verify, and retrieve student academic files and transcripts with administrative access controls.",
    category: "webapps",
    categoryLabel: "Web Applications & Systems",
    domain: "student-document-system.vercel.app",
    image: "/projects/recordify.png",
    tags: ["React", "Firebase Storage", "Authentication", "File Indexing", "Verification"],
    liveUrl: "https://student-document-system.vercel.app/",
    highlights: [
      "Secure student record indexing and document upload pipeline",
      "Verification workflow for validating academic credentials and transcripts",
      "Role-based administrative dashboards for document status tracking",
    ],
  },
  {
    id: "orphan-support",
    title: "Orphan Support",
    tagline: "Humanitarian Support & Outreach Platform",
    description:
      "A dedicated humanitarian support platform connecting donors, volunteers, and orphanages to facilitate direct child welfare assistance, transparent sponsorship, and resource coordination.",
    category: "social",
    categoryLabel: "Social & Community",
    domain: "orphan-support.vercel.app",
    image: "/projects/orphan-support.png",
    tags: ["React", "Tailwind CSS", "Donation Flows", "Outreach UI", "Accessibility"],
    liveUrl: "https://orphan-support.vercel.app/",
    highlights: [
      "Direct sponsorship and donation channel with transparent cause breakdowns",
      "Volunteer outreach and orphanage profile coordination",
      "Accessible, compassionate interface built to encourage trust and community support",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Core languages, component frameworks, and responsive styling tools I use daily.",
    items: [
      { name: "React 19 & 18", level: "Core", iconName: "Code2" },
      { name: "TypeScript", level: "Core", iconName: "FileCode" },
      { name: "JavaScript (ES6+)", level: "Core", iconName: "Sparkles" },
      { name: "Tailwind CSS", level: "Core", iconName: "Palette" },
      { name: "HTML5 Semantic Web", level: "Core", iconName: "Globe" },
      { name: "CSS3 & Modern Layouts", level: "Core", iconName: "Layout" },
      { name: "Responsive UI/UX", level: "Core", iconName: "Zap" },
      { name: "State Management", level: "Proficient", iconName: "Layers" },
    ],
  },
  {
    category: "Firebase & Backend Integration",
    description: "Serverless backend services, authentication, databases, and RESTful APIs.",
    items: [
      { name: "Firebase Authentication", level: "Core", iconName: "Flame" },
      { name: "Cloud Firestore / Realtime DB", level: "Core", iconName: "Database" },
      { name: "Firebase Cloud Storage", level: "Proficient", iconName: "Cloud" },
      { name: "REST API Integration", level: "Core", iconName: "Network" },
      { name: "Node.js & Express Basics", level: "Proficient", iconName: "Server" },
      { name: "SQL Fundamentals", level: "Proficient", iconName: "Database" },
    ],
  },
  {
    category: "Tooling & Workflow",
    description: "Version control, build environments, deployment, and developer tooling.",
    items: [
      { name: "Git & GitHub", level: "Core", iconName: "GitBranch" },
      { name: "Vite Bundler", level: "Core", iconName: "Rocket" },
      { name: "VS Code & DevTools", level: "Core", iconName: "Terminal" },
      { name: "Vercel Deployment", level: "Core", iconName: "Cloud" },
      { name: "Figma to Code Translation", level: "Proficient", iconName: "Figma" },
      { name: "Performance & SEO Audits", level: "Proficient", iconName: "Gauge" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    type: "work",
    role: "Junior Frontend Developer",
    company: "African Intelligence PLC",
    location: "Nigeria",
    period: "2025 - Present",
    description:
      "Building user interfaces, implementing responsive web components, and working with product teams on client-facing applications.",
    achievements: [
      "Engineered modular React components with TypeScript and Tailwind CSS",
      "Collaborated with product designers to implement clean Figma mockups into responsive code",
      "Participated in frontend code reviews and performance optimization passes",
    ],
    skills: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Component Architecture"],
  },
  {
    type: "work",
    role: "Frontend Developer",
    company: "Nhub Organisation",
    location: "Jos, Plateau State, Nigeria",
    period: "2024 - 2025",
    description:
      "Developed web applications, landing pages, and interactive client platforms while participating in tech incubator workshops.",
    achievements: [
      "Built multiple production web applications including community platforms and business websites",
      "Integrated backend endpoints and Firebase services for real-time data handling",
      "Ensured cross-browser compatibility and responsive performance across mobile and desktop",
    ],
    skills: ["JavaScript", "React", "HTML5 / CSS3", "Tailwind CSS", "Git"],
  },
  {
    type: "education",
    role: "Higher National Diploma (HND) in Computer Science",
    company: "Federal College of Animal Health & Production Technology, Vom",
    location: "Plateau State, Nigeria",
    period: "2022 - 2026",
    description:
      "Formal academic training covering Software Engineering principles, Algorithms, Database Systems, and Web Technologies.",
    achievements: [
      "Graduating with academic honors and continuous practical project work",
      "Built full-stack student document management and verification system (Recordify)",
      "Coordinated peer study groups on modern web technologies and software development",
    ],
    skills: ["Software Engineering", "Database Systems", "Data Structures", "Web Development"],
  },
];
