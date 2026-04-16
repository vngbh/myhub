import Link from "next/link";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import {
  PageActions,
  PageDescription,
  PageEyebrow,
} from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { MetaPill } from "@/components/ui/meta-pill";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { experience } from "@/data/home";

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageSection
        className="flex min-h-[80vh] flex-col px-[clamp(20px,5vw,72px)] py-24"
        id="experience"
      >
        <div className="mb-10 max-w-190">
          <RevealFrame>
            <PageEyebrow>Experience</PageEyebrow>
            <h1 className="m-0 text-[clamp(3rem,11vw,72px)] font-normal leading-none tracking-normal text-foreground">
              Real product work across frontend, APIs, and UI.
            </h1>
            <PageDescription>{experience.summary}</PageDescription>
          </RevealFrame>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1fr)]">
          <RevealFrame className="h-full" delay={90}>
            <article className="h-full rounded-lg border border-border bg-card p-6">
              <p className="m-0 text-sm font-medium uppercase tracking-normal text-green">
                {experience.period}
              </p>
              <h2 className="mt-4 text-3xl font-normal leading-tight text-foreground">
                {experience.role}
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                {experience.company}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {experience.location}
              </p>
              <p className="mt-6 rounded-lg border border-brand-border bg-note p-4 text-sm leading-6 text-foreground">
                {experience.confidentialityNote}
              </p>
            </article>
          </RevealFrame>

          <RevealFrame className="h-full" delay={140}>
            <article className="h-full rounded-lg border border-border bg-card p-6">
              <h2 className="m-0 text-2xl font-normal text-foreground">
                What I worked on
              </h2>
              <ul className="mt-5 grid gap-3 p-0">
                {experience.responsibilities.map((item) => (
                  <li
                    className="list-none rounded-lg bg-secondary px-4 py-3 text-sm leading-6 text-muted-foreground"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </RevealFrame>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {experience.projects.map((project, index) => (
            <RevealFrame
              className="h-full"
              delay={220 + index * 90}
              key={project.title}
            >
              <article className="h-full rounded-lg border border-border bg-card p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="m-0 text-2xl font-normal text-foreground">
                    {project.title}
                  </h2>
                  <MetaPill>{project.team}</MetaPill>
                </div>
                <p className="mt-3 text-sm font-medium text-muted-foreground">
                  {project.period}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {project.summary}
                </p>
                <p className="mt-5 text-sm font-medium text-green">
                  {project.stack}
                </p>
              </article>
            </RevealFrame>
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
