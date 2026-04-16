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
            Let&apos;s build something useful.
          </h1>
          <PageDescription>
            Open to remote full-stack development opportunities, especially
            teams that care about UI quality, maintainable systems, and product
            clarity.
          </PageDescription>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="inline-block text-[clamp(0.95rem,2vw,1.2rem)] font-medium text-boldgreen! underline! decoration-boldgreen/40 underline-offset-4 transition-colors hover:decoration-boldgreen"
              href={siteConfig.links.email}
            >
              Email
            </a>
            <a
              className="inline-block text-[clamp(0.95rem,2vw,1.2rem)] font-medium text-boldgreen! underline! decoration-boldgreen/40 underline-offset-4 transition-colors hover:decoration-boldgreen"
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="inline-block text-[clamp(0.95rem,2vw,1.2rem)] font-medium text-boldgreen! underline! decoration-boldgreen/40 underline-offset-4 transition-colors hover:decoration-boldgreen"
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
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
