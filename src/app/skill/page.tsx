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

export default function SkillPage() {
  return (
    <PageShell>
      <PageSection className="section split" id="skills">
        <div className="flowCopy">
          <RevealFrame>
            <PageEyebrow>Skills</PageEyebrow>
            <h1 className="pageTitle">
              Tools for turning rough ideas into steady interfaces.
            </h1>
            <PageDescription>
              A focused stack for building accessible, responsive, and
              maintainable frontend experiences.
            </PageDescription>
          </RevealFrame>
        </div>
        <SkillRibbon />
        <PageActions className="pageBottomActions skillPageActions">
          <Button
            className="portfolioButton rounded-full px-6"
            size="lg"
            asChild
          >
            <Link href="/">Home -&gt;</Link>
          </Button>
        </PageActions>
      </PageSection>
    </PageShell>
  );
}
