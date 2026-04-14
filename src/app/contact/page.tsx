import Link from "next/link";
import { PageSection, PageShell } from "@/components/layout/page-shell";
import {
  PageActions,
  PageDescription,
  PageEyebrow,
} from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <PageShell>
      <PageSection className="contact flowSection" id="contact">
        <RevealFrame>
          <PageEyebrow>Contact</PageEyebrow>
          <h1 className="pageTitle">Ready to build the next piece?</h1>
          <PageDescription>{siteConfig.description}</PageDescription>
          <a className="contactLink" href={siteConfig.links.email}>
            hello@example.com
          </a>
        </RevealFrame>
        <PageActions className="pageBottomActions">
          <Button
            className="portfolioButton rounded-full px-6"
            size="lg"
            asChild
          >
            <Link href="/">Back Home</Link>
          </Button>
        </PageActions>
      </PageSection>
    </PageShell>
  );
}
