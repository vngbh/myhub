import { siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <p>{siteConfig.name}</p>
      <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </footer>
  );
}
