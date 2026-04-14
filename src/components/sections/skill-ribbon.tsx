import { skills } from "@/data/home";
import { Badge } from "@/components/ui/badge";
import { RevealFrame } from "@/components/ui/reveal-frame";

export function SkillRibbon() {
  return (
    <div
      className="mt-16 flex flex-wrap content-start gap-2"
      aria-label="Skills"
    >
      {skills.map((skill, index) => (
        <RevealFrame delay={index * 35} key={skill}>
          <Badge className="min-h-9 rounded-full border-0 bg-[#00c573] px-3.5 text-[0.8rem] font-bold text-white! transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#00c573]/40">
            {skill}
          </Badge>
        </RevealFrame>
      ))}
    </div>
  );
}
