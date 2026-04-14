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

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageSection className="hero">
        <PageHeader>
          <AnimatedPageHeader>
            <PageEyebrow>Portfolio</PageEyebrow>
            <PageHeading>
              Product work organized into focused pages.
            </PageHeading>
            <PageDescription>{siteConfig.description}</PageDescription>
            <PageActions>
              <Button
                className="portfolioButton rounded-full px-6"
                size="lg"
                asChild
              >
                <Link href="/work">View Work</Link>
              </Button>
              <Button
                className="portfolioButton rounded-full px-6"
                size="lg"
                asChild
                variant="outline"
              >
                <Link href="/skill">Skills</Link>
              </Button>
            </PageActions>
          </AnimatedPageHeader>
        </PageHeader>
      </PageSection>
    </PageShell>
  );
}
