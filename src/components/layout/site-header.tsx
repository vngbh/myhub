"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-2xl">
      <div className="flex h-16 items-center gap-2 px-[clamp(20px,5vw,72px)]">
        <Link
          className="mr-4 flex shrink-0 items-center gap-2 text-sm font-semibold tracking-[-0.01em] text-foreground"
          href="/"
          aria-label="Go home"
        >
          <Image
            className="block brightness-0 invert"
            src="/icons/myhub_logo.svg"
            alt=""
            width={24}
            height={24}
            loading="eager"
            unoptimized
          />
          <span className="text-xl">{siteConfig.name}</span>
        </Link>

        {/* Desktop navigation */}
        <NavigationMenu viewport={false} className="hidden md:block">
          <NavigationMenuList className="gap-0.5">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  href={item.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-[#898989] hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground",
                    pathname === item.href && "bg-secondary text-foreground",
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button
            className="flex size-[34px] cursor-pointer items-center justify-center rounded-md border border-border bg-transparent text-foreground transition-colors hover:bg-secondary md:hidden"
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
        <nav
          className="flex flex-col border-t border-border px-0 pb-4 pt-1.5"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link
              className={cn(
                "px-[clamp(20px,5vw,72px)] py-3 text-sm font-medium text-[#898989] transition-colors hover:bg-white/[0.04] hover:text-foreground",
                pathname === item.href && "bg-white/[0.04] text-foreground",
              )}
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
