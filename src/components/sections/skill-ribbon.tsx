import { skills } from "@/data/portfolio";

export function SkillRibbon() {
  return (
    <div className="skillRibbon" aria-label="Skills">
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
}
