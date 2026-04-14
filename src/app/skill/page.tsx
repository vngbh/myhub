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
            <h1 className="m-0 max-w-[760px] text-[clamp(3rem,11vw,72px)] font-normal leading-none tracking-normal text-foreground">
              Tools for turning rough ideas into steady interfaces.
            </h1>
            <PageDescription>
              A focused stack for building accessible, responsive, and
              maintainable frontend experiences.
            </PageDescription>
          </RevealFrame>
        </div>
        <SkillRibbon />
        <PageActions className="col-span-full mt-3 w-full justify-center justify-self-stretch pt-12">
          <Button
            className="rounded-full px-6 font-medium transition-opacity hover:opacity-85"
            size="lg"
            asChild
          >
            <Link href="/contact">View Contact -&gt;</Link>
          </Button>
        </PageActions>
      </PageSection>
    </PageShell>
  );
}
