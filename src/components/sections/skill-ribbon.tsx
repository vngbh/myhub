import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function SkillRibbon() {
  return (
    <div
      className="mt-16 flex flex-wrap content-start gap-2"
      aria-label="Skills"
    >
      {skills.map((skill) => (
        <Badge
          className="min-h-9 rounded-full border-0 bg-[#00c573] px-3.5 text-[0.8rem] font-medium !text-white transition-opacity hover:opacity-85"
          key={skill}
        >
          {skill}
        </Badge>
      ))}
    </div>
  );
}
