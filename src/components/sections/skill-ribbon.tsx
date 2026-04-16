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
          <Badge className="min-h-9 cursor-default select-none rounded-full border-0 bg-boldgreen px-3.5 text-[0.8rem] font-bold text-white! transition duration-100 ease-out hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-boldgreen/40">
            {skill}
          </Badge>
        </RevealFrame>
      ))}
    </div>
  );
}
