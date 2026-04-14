import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  AnimatedPageHeader,
  PageActions,
  PageDescription,
  PageEyebrow,
  PageHeader,
  PageHeading,
} from "@/components/sections/page-header";
import { ProjectCard } from "@/components/sections/project-card";
import { SkillRibbon } from "@/components/sections/skill-ribbon";
import { Button } from "@/components/ui/button";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero">
          <PageHeader>
            <AnimatedPageHeader>
              <PageEyebrow>{siteConfig.tagline}</PageEyebrow>
              <PageHeading>
                Product interfaces with clear systems and quiet motion.
              </PageHeading>
              <PageDescription>{siteConfig.description}</PageDescription>
              <PageActions>
                <Button
                  className="portfolioButton rounded-full px-6"
                  size="lg"
                  asChild
                >
                  <a href="#work">View Work</a>
                </Button>
                <Button
                  className="portfolioButton rounded-full px-6"
                  size="lg"
                  asChild
                  variant="outline"
                >
                  <a href={siteConfig.links.email}>Contact</a>
                </Button>
              </PageActions>
            </AnimatedPageHeader>
          </PageHeader>
        </section>

        <section className="section" id="work">
          <div className="sectionHeader">
            <RevealFrame>
              <PageEyebrow>Selected Work</PageEyebrow>
              <h2>Recent pieces shaped around clarity, speed, and detail.</h2>
            </RevealFrame>
            <Button className="portfolioButton rounded-full" asChild variant="ghost">
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
        </section>

        <section className="section split" id="skills">
          <RevealFrame>
            <PageEyebrow>Skills</PageEyebrow>
            <h2>Tools for turning rough ideas into steady interfaces.</h2>
          </RevealFrame>
          <SkillRibbon />
        </section>

        <section className="contact" id="contact">
          <RevealFrame>
            <PageEyebrow>Contact</PageEyebrow>
            <h2>Ready to build the next piece?</h2>
            <a href={siteConfig.links.email}>hello@example.com</a>
          </RevealFrame>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
