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
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

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
            preload
            unoptimized
          />
          <span className="text-xl">{siteConfig.name}</span>
        </Link>

        {/* Desktop navigation */}
        <NavigationMenu viewport={false} className="hidden md:block">
          <NavigationMenuList className="gap-0.5">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <NavigationMenuItem key={item.href}>
                  {active ? (
                    <NavigationMenuLink
                      aria-disabled
                      tabIndex={-1}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "pointer-events-none bg-secondary text-foreground",
                      )}
                      aria-current="page"
                    >
                      {item.label}
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-[#898989] hover:bg-secondary hover:text-foreground focus:bg-secondary focus:text-foreground",
                      )}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button
            className="flex size-8.5 cursor-pointer items-center justify-center rounded-md border border-border bg-transparent text-foreground transition-colors hover:bg-secondary md:hidden"
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
          {navItems.map((item) => {
            const active = isActive(item.href);

            return active ? (
              <span
                className="bg-white/4 px-[clamp(20px,5vw,72px)] py-3 text-sm font-medium text-foreground"
                key={item.href}
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                className="px-[clamp(20px,5vw,72px)] py-3 text-sm font-medium text-[#898989] transition-colors hover:bg-white/4 hover:text-foreground"
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
