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
      <PageSection className="flex min-h-[86vh] flex-col justify-start bg-background px-[clamp(20px,5vw,72px)] pb-24 pt-0">
        <PageHeader>
          <AnimatedPageHeader>
            <PageEyebrow>Portfolio</PageEyebrow>
            <PageHeading>
              Product work organized into focused pages.
            </PageHeading>
            <PageDescription>{siteConfig.description}</PageDescription>
            <PageActions>
              <Button
                className="rounded-full px-6 font-medium transition-opacity hover:opacity-85"
                size="lg"
                asChild
              >
                <Link href="/work">View Projects</Link>
              </Button>
              <Button
                className="rounded-full px-6 font-medium transition-opacity hover:opacity-85"
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
