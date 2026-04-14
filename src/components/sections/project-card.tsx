import type { Project } from "@/data/home";
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
      <a
        className="block h-full text-inherit no-underline"
        href={project.href}
        target="_blank"
        rel="noreferrer"
      >
        <Card className="h-full min-h-[260px] justify-between rounded-lg border border-border bg-card p-6 !pb-6 transition-colors hover:bg-[#1f1f1f]">
          <CardHeader className="gap-1 px-0">
            <div className="flex flex-wrap items-center justify-start gap-3">
              <CardTitle className="text-[1.65rem] leading-none">
                {project.title}
              </CardTitle>
              <Badge
                className="shrink-0 border-[#2e2e2e] bg-transparent text-xs text-muted-foreground"
                variant="secondary"
              >
                {project.tag}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="-mt-2 px-0">
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
          <CardFooter className="mt-6 border-t-0 bg-transparent p-0">
            <strong className="text-sm font-medium text-brand">
              {project.metric}
            </strong>
          </CardFooter>
        </Card>
      </a>
    </RevealFrame>
  );
}
