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
      <PageSection className="hero">
        <PageHeader>
          <AnimatedPageHeader>
            <PageEyebrow>{siteConfig.tagline}</PageEyebrow>
            <PageHeading>
              Product interfaces with clear systems and quiet motion.
            </PageHeading>
            <PageDescription>{siteConfig.description}</PageDescription>
          </AnimatedPageHeader>
        </PageHeader>
        <PageActions className="pageBottomActions flex justify-center mt-12 gap-6">
          <Button
            className="portfolioButton rounded-full px-6"
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
