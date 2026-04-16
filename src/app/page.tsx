import Link from "next/link";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import {
  AnimatedPageHeader,
  PageActions,
  PageDescription,
  PageEyebrow,
  PageHeader,
  PageHeading,
} from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { RevealFrame } from "@/components/ui/reveal-frame";

export default function Home() {
  return (
    <PageShell>
      <PageSection className="flex min-h-[86vh] flex-col justify-start bg-background px-[clamp(20px,5vw,72px)] pb-20 pt-0">
        <PageHeader>
          <AnimatedPageHeader>
            <PageEyebrow>{siteConfig.tagline}</PageEyebrow>
            <PageHeading>
              Full-stack web products with clean systems and thoughtful UI.
            </PageHeading>
            <PageDescription>{siteConfig.description}</PageDescription>
            <PageDescription className="mt-4">
              Based in Nagano, I am currently pursuing a master&apos;s degree at
              Shinshu University while growing through full-stack web work at
              the intersection of product UI, API development, database design,
              and reliable delivery.
            </PageDescription>
          </AnimatedPageHeader>
        </PageHeader>
        <PageActions className="justify-center gap-6 pt-12">
          <RevealFrame delay={100}>
            <Button
              className="rounded-full px-6 font-medium transition-opacity hover:opacity-85"
              size="lg"
              asChild
            >
              <Link href="/work">View Projects -&gt;</Link>
            </Button>
          </RevealFrame>
        </PageActions>
      </PageSection>
    </PageShell>
  );
}
