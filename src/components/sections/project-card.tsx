import type { Project } from "@/data/home";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { MetaPill } from "@/components/ui/meta-pill";
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
  const content = (
    <Card className="h-full min-h-[260px] select-none rounded-lg border border-border bg-card p-6 !pb-6 transition-colors hover:bg-surface-hover">
      <CardHeader className="gap-1 px-0">
        <div className="flex flex-wrap items-center justify-start gap-3">
          <CardTitle className="text-[1.65rem] leading-none">
            {project.title}
          </CardTitle>
          <MetaPill>{project.tag}</MetaPill>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <div className="grid gap-4">
          <CardDescription>{project.description}</CardDescription>
          {project.note ? (
            <p className="m-0 text-sm leading-relaxed text-muted-foreground">
              {project.note}
            </p>
          ) : null}
        </div>
      </CardContent>
      <CardFooter className="mt-auto border-t-0 bg-transparent p-0 pt-6">
        <strong className="text-sm font-medium text-green">{project.metric}</strong>
      </CardFooter>
    </Card>
  );

  return (
    <RevealFrame className="h-full" delay={index * 90}>
      {project.href ? (
        <a
          className="block h-full cursor-default text-inherit no-underline"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          {content}
        </a>
      ) : (
        <div className="h-full">{content}</div>
      )}
    </RevealFrame>
  );
}
