import type { Project } from "@/data/portfolio";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <RevealFrame delay={index * 90}>
      <Card className="projectCard">
        <CardHeader>
          <Badge className="projectBadge" variant="secondary">
            {project.tag}
          </Badge>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="projectCardFooter">
          <strong>{project.metric}</strong>
        </CardFooter>
      </Card>
    </RevealFrame>
  );
}
