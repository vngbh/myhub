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
      <PageSection
        className="flex min-h-[80vh] flex-col bg-background px-[clamp(20px,5vw,72px)] py-24"
        id="contact"
      >
        <RevealFrame>
          <PageEyebrow>Contact</PageEyebrow>
          <h1 className="m-0 max-w-190 text-[clamp(3rem,11vw,72px)] font-normal leading-none tracking-normal text-foreground">
            Ready to build the next piece?
          </h1>
          <PageDescription>
            Send a note for product UI work, frontend systems, or a thoughtful
            web experience that needs a steady hand.
          </PageDescription>
          <a
            className="mt-5 inline-block text-[clamp(0.95rem,2vw,1.2rem)] font-medium text-[#00c573]! underline! decoration-[#00c573]/40 underline-offset-4 transition-colors hover:decoration-[#00c573]"
            href={siteConfig.links.email}
          >
            vngiabaohoang@gmail.com
          </a>
        </RevealFrame>
        <PageActions className="mt-auto justify-center gap-6 pt-12">
          <RevealFrame delay={100}>
            <Button
              className="rounded-full px-6 font-medium transition-opacity hover:opacity-85"
              size="lg"
              asChild
            >
              <Link href="/">View Home -&gt;</Link>
            </Button>
          </RevealFrame>
        </PageActions>
      </PageSection>
    </PageShell>
  );
}
