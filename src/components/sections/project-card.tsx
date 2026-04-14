import type { Project } from "@/data/portfolio";
import { RevealFrame } from "@/components/ui/reveal-frame";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <RevealFrame delay={index * 90}>
      <article className="projectCard">
        <div>
          <span>{project.tag}</span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <strong>{project.metric}</strong>
      </article>
    </RevealFrame>
  );
}
