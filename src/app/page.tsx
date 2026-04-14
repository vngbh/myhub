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
import { ButtonLink } from "@/components/ui/button";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <main id="top">
        <section className="hero">
          <SiteHeader />

          <PageHeader>
            <AnimatedPageHeader>
              <PageEyebrow>{siteConfig.tagline}</PageEyebrow>
              <PageHeading>
                Product interfaces with clear systems and quiet motion.
              </PageHeading>
              <PageDescription>{siteConfig.description}</PageDescription>
              <PageActions>
                <ButtonLink href="#work">View Work</ButtonLink>
                <ButtonLink href={siteConfig.links.email} variant="secondary">
                  Contact
                </ButtonLink>
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
            <ButtonLink href={siteConfig.links.github} variant="ghost">
              GitHub
            </ButtonLink>
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
