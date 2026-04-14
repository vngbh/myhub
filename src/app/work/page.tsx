import { PageSection, PageShell } from "@/components/layout/page-shell";
import {
  PageDescription,
  PageEyebrow,
} from "@/components/sections/page-header";
import { ProjectCard } from "@/components/sections/project-card";
import { Button } from "@/components/ui/button";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

export default function WorkPage() {
  return (
    <PageShell>
      <PageSection className="section" id="work">
        <div className="sectionHeader">
          <RevealFrame>
            <PageEyebrow>Selected Work</PageEyebrow>
            <h1 className="pageTitle">
              Recent pieces shaped around clarity, speed, and detail.
            </h1>
            <PageDescription>{siteConfig.description}</PageDescription>
          </RevealFrame>
          <Button
            className="portfolioButton rounded-full"
            asChild
            variant="ghost"
          >
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </PageSection>
    </PageShell>
  );
}
