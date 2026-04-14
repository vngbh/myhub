"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navItems, siteConfig } from "@/data/site";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <a className="brand" href="#top" aria-label="Go to top">
          <Image
            src="/icons/myhub_logo.svg"
            alt=""
            width={20}
            height={20}
            unoptimized
          />
          <span>{siteConfig.name}</span>
        </a>

        {/* Desktop navigation */}
        <NavigationMenu viewport={false} className="desktopNav">
          <NavigationMenuList className="desktopNavList">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(navigationMenuTriggerStyle(), "navLink")}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="headerEnd">
          <Button
            className="headerCta rounded-full"
            size="sm"
            variant="outline"
            asChild
          >
            <a href={siteConfig.links.email}>Get in touch</a>
          </Button>

          <button
            className="mobileMenuBtn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav className="mobileNav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={siteConfig.links.email}
            className="mobileNavCta"
            onClick={() => setMobileOpen(false)}
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
}
