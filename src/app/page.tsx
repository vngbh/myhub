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

export default function Home() {
  return (
    <PageShell>
      <PageSection className="flex min-h-[86vh] flex-col justify-start bg-background px-[clamp(20px,5vw,72px)] pb-24 pt-0">
        <PageHeader>
          <AnimatedPageHeader>
            <PageEyebrow>{siteConfig.tagline}</PageEyebrow>
            <PageHeading>
              Product interfaces with clear systems and quiet motion.
            </PageHeading>
            <PageDescription>{siteConfig.description}</PageDescription>
          </AnimatedPageHeader>
        </PageHeader>
        <PageActions className="mt-auto justify-center gap-6 pt-12">
          <Button
            className="rounded-full px-6 font-medium transition-opacity hover:opacity-85"
            size="lg"
            asChild
          >
            <Link href="/work">View Work -&gt;</Link>
          </Button>
        </PageActions>
      </PageSection>
    </PageShell>
  );
}
