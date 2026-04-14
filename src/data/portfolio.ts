export type Project = {
  title: string;
  description: string;
  tag: string;
  metric: string;
};

export const projects: Project[] = [
  {
    title: "Interface Kit",
    description:
      "Reusable patterns for teams that need fast iteration without losing visual consistency.",
    tag: "Design Systems",
    metric: "32 components",
  },
  {
    title: "Signal Board",
    description:
      "A compact dashboard concept for tracking product health, launches, and growth notes.",
    tag: "Product UI",
    metric: "4 workflows",
  },
  {
    title: "Motion Notes",
    description:
      "Small interaction studies that make page transitions, cards, and links feel more deliberate.",
    tag: "Interaction",
    metric: "12 studies",
  },
];

export const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Accessibility",
  "Performance",
  "Design Systems",
  "Motion",
];
