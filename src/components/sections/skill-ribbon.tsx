import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function SkillRibbon() {
  return (
    <div className="skillRibbon" aria-label="Skills">
      {skills.map((skill) => (
        <Badge className="skillBadge" variant="outline" key={skill}>
          {skill}
        </Badge>
      ))}
    </div>
  );
}
