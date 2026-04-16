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
      <PageSection
        className="grid min-h-[80vh] w-full grid-cols-[minmax(0,1fr)_minmax(260px,0.75fr)] gap-8 bg-background px-[clamp(20px,5vw,72px)] py-24 max-md:grid-cols-1"
        id="skills"
      >
        <div className="flex flex-col">
          <RevealFrame>
            <PageEyebrow>Skills</PageEyebrow>
            <h1 className="m-0 max-w-190 text-[clamp(3rem,11vw,72px)] font-normal leading-none tracking-normal text-foreground">
              A practical stack for full-stack product development.
            </h1>
            <PageDescription>
              Tools and workflows I use across frontend UI, backend APIs,
              database work, deployment, and team development.
            </PageDescription>
          </RevealFrame>
        </div>
        <SkillRibbon />
        <PageActions className="col-span-full mt-3 w-full justify-center justify-self-stretch pt-12">
          <RevealFrame delay={100}>
            <Button
              className="rounded-full px-6 font-medium transition-opacity hover:opacity-85"
              size="lg"
            >
              <Link href="/contact">View Contact -&gt;</Link>
            </Button>
          </RevealFrame>
        </PageActions>
      </PageSection>
    </PageShell>
  );
}
