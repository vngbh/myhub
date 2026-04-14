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
          className="min-h-9 rounded-full border-[#2e2e2e] bg-transparent px-3.5 text-[0.8rem] font-normal text-[#b4b4b4] transition-colors hover:border-brand-border hover:text-foreground"
          variant="outline"
          key={skill}
        >
          {skill}
        </Badge>
      ))}
    </div>
  );
}
