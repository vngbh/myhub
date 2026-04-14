import Link from "next/link";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import {
  PageActions,
  PageDescription,
  PageEyebrow,
} from "@/components/sections/page-header";
import { SkillRibbon } from "@/components/sections/skill-ribbon";
import { Button } from "@/components/ui/button";
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
          <PageActions>
            <Button
              className="portfolioButton rounded-full px-6"
              size="lg"
              asChild
            >
              <Link href="/contact">Contact -&gt;</Link>
            </Button>
          </PageActions>
        </RevealFrame>
        <SkillRibbon />
      </PageSection>
    </PageShell>
  );
}
