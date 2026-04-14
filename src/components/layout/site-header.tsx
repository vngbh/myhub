import { navItems, siteConfig } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <a className="brand" href="#top" aria-label="Go to top">
        {siteConfig.name}
      </a>
      <nav className="navLinks" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
