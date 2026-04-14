import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <main id="top" className={cn("min-h-screen", className)} {...props}>
      {children}
    </main>
  );
}

export function PageSection({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn(className)} {...props}>
      {children}
    </section>
  );
}
