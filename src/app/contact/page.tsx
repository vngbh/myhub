import { PageSection, PageShell } from "@/components/layout/page-shell";
import { PageEyebrow } from "@/components/sections/page-header";
import { RevealFrame } from "@/components/ui/reveal-frame";
import { siteConfig } from "@/data/site";

export default function ContactPage() {
  return (
    <PageShell>
      <PageSection className="contact" id="contact">
        <RevealFrame>
          <PageEyebrow>Contact</PageEyebrow>
          <h1 className="pageTitle">Ready to build the next piece?</h1>
          <a href={siteConfig.links.email}>hello@example.com</a>
        </RevealFrame>
      </PageSection>
    </PageShell>
  );
}
