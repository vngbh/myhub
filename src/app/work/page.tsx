import Link from "next/link";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import {
  PageActions,
  PageDescription,
  PageEyebrow,
} from "@/components/sections/page-header";
import { ProjectCard } from "@/components/sections/project-card";
import { Button } from "@/components/ui/button";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { projects } from "@/data/home";

export default function WorkPage() {
  return (
    <PageShell>
      <PageSection
        className="flex min-h-[80vh] flex-col px-[clamp(20px,5vw,72px)] py-24"
        id="work"
      >
        <div className="mb-8 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
          <RevealFrame>
            <PageEyebrow>Projects</PageEyebrow>
            <h1 className="m-0 max-w-190 text-[clamp(3rem,11vw,72px)] font-normal leading-none tracking-normal text-foreground">
              Recent pieces shaped around clarity, speed, and detail.
            </h1>
            <PageDescription>
              Selected projects built around practical product goals, clean
              interaction patterns, and careful delivery.
            </PageDescription>
          </RevealFrame>
        </div>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 [&>.revealFrame]:h-full">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
        <PageActions className="mt-auto justify-center gap-6 pt-12">
          <RevealFrame delay={100}>
            <Button
              className="rounded-full px-6 font-medium transition-opacity hover:opacity-85"
              size="lg"
              asChild
            >
              <Link href="/skill">View Skills -&gt;</Link>
            </Button>
          </RevealFrame>
        </PageActions>
      </PageSection>
    </PageShell>
  );
}
