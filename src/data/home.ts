export type Project = {
  title: string;
  description: string;
  tag: string;
  metric: string;
  href?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: "myhub",
    description:
      "My personal portfolio website for presenting my profile, projects, experience, tech stack, and contact links in one focused place.",
    tag: "Current Site",
    metric: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Vercel",
  },
  {
    title: "clokhub",
    description:
      "A time-focused application for tracking schedules, daily routines, and practical clock-based workflows.",
    tag: "iOS Application",
    metric: "Swift, SwiftUI, Xcode, GitHub",
    href: "https://github.com/vngbh/clokhub",
  },
  {
    title: "payhub",
    description:
      "An iOS payment and finance app concept for managing transactions, account activity, and clean mobile flows.",
    tag: "iOS Application",
    metric: "Swift, SwiftUI, Xcode, GitHub",
    href: "https://github.com/vngbh/payhub",
  },
  {
    title: "taskhub",
    description:
      "A full-stack task management app with authentication, task filters, pagination, and dashboard statistics.",
    tag: "Web Application",
    metric: "Next.js, NestJS, GraphQL, Vercel, Supabase",
    href: "https://github.com/vngbh/taskhub",
  },
  {
    title: "E-bike Parking App",
    description:
      "A business web application for managing electric bicycle parking spaces, user authentication, and operational data. I contributed to early design, frontend implementation, backend API development, and database features.",
    tag: "Web Application",
    metric: "Next.js, NestJS, TypeScript, PostgreSQL, Prisma",
    note: "Details are intentionally limited due to confidentiality.",
  },
  {
    title: "M&A Matching Platform",
    description:
      "A web platform supporting sellers and buyers through case registration, negotiation workflows, progress tracking, and admin operations. I worked on chat features, stage management, dashboard UI, sorting, filtering, and Figma-based UI improvements.",
    tag: "Web Application",
    metric: "Next.js, NestJS, TypeScript, PostgreSQL, Prisma, shadcn/ui",
    note: "Details are intentionally limited due to confidentiality.",
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "shadcn/ui",
  "Zod",
  "NestJS",
  "REST API",
  "GraphQL",
  "Apollo GraphQL",
  "JWT",
  "PostgreSQL",
  "Prisma",
  "Supabase",
  "Docker",
  "Vercel",
  "Git",
  "GitHub",
  "Postman",
  "Yarn",
  "npm",
  "Xcode",
  "Swift",
  "SwiftUI",
  "Python",
  "Japanese",
  "English",
  "Vietnamese",
  "Slack",
];

export const profileHighlights = [
  "Full-stack web development experience at Muzou Inc. from Jan 2024 to Mar 2026.",
  "Frontend and API work across Next.js, NestJS, TypeScript, PostgreSQL, and Prisma.",
  "Strong interest in UI/UX, Figma-based implementation, and product-quality interfaces.",
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive UI",
      "Figma-based implementation",
    ],
  },
  {
    title: "Backend",
    items: ["NestJS", "REST API", "GraphQL API", "Authentication", "API design"],
  },
  {
    title: "Database & Infrastructure",
    items: ["PostgreSQL", "Prisma", "Docker", "Supabase", "Vercel", "Basic AWS"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Pull requests", "Code review", "Postman", "Apollo GraphQL"],
  },
  {
    title: "Languages",
    items: ["Vietnamese: Native", "Japanese: JLPT N2", "English: TOEIC L&R 730"],
  },
];

export const experience = {
  role: "Full-stack Web Developer",
  company: "Muzou Inc.",
  period: "Jan 2024 - Mar 2026",
  location: "Japan | Part-time",
  summary:
    "Worked on business web applications for about two years, contributing across frontend development, backend API design, database modeling, UI implementation, early technical planning, and project communication.",
  responsibilities: [
    "Built frontend features with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.",
    "Designed and implemented RESTful and GraphQL APIs with NestJS.",
    "Worked with PostgreSQL and Prisma for schema design, migrations, and data access.",
    "Improved product UI from Figma designs with attention to usability and maintainability.",
    "Used Git, pull requests, and code reviews in a team development workflow.",
  ],
  projects: [
    {
      title: "E-bike Parking App",
      period: "Jan 2024 - Aug 2024",
      summary:
        "Supported a web application for electric bicycle parking management, including user authentication, parking space management, and operational data features.",
      stack: "Next.js, NestJS, TypeScript, PostgreSQL, Prisma",
      team: "4 members",
    },
    {
      title: "M&A Matching Platform",
      period: "Jun 2024 - Mar 2026",
      summary:
        "Contributed to a platform for matching business sellers and buyers, including chat, progress stages, admin dashboard UI, sorting, filtering, and UI improvements.",
      stack: "Next.js, NestJS, TypeScript, PostgreSQL, Prisma",
      team: "8 members",
    },
  ],
  confidentialityNote:
    "Project details are intentionally kept concise because the work was done for real clients and includes confidential business information.",
};
