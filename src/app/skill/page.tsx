import { PageSection, PageShell } from "@/components/layout/page-shell";
import {
  PageDescription,
  PageEyebrow,
} from "@/components/sections/page-header";
import { SkillRibbon } from "@/components/sections/skill-ribbon";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { siteConfig } from "@/data/site";

export default function SkillPage() {
  return (
    <PageShell>
      <PageSection className="section split" id="skills">
        <RevealFrame>
          <PageEyebrow>Skills</PageEyebrow>
          <h1 className="pageTitle">
            Tools for turning rough ideas into steady interfaces.
          </h1>
          <PageDescription>{siteConfig.description}</PageDescription>
        </RevealFrame>
        <SkillRibbon />
      </PageSection>
    </PageShell>
  );
}
