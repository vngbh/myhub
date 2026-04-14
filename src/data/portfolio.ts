export type Project = {
  title: string;
  description: string;
  tag: string;
  metric: string;
  href: string;
};

export const projects: Project[] = [
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
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Next.js",
  "Redux",
  "NestJS",
  "PostgreSQL",
  "GraphQL",
  "Prisma",
  "Supabase",
  "Docker",
  "Vercel",
  "Git",
  "GitHub",
  "Postman",
  "Yarn",
];
