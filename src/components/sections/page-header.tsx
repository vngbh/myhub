import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { RevealFrame } from "@/components/ui/reveal-frame";

export function PageHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("pageHeader", className)} {...props}>
      {children}
    </section>
  );
}

export function PageEyebrow({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("eyebrow", className)} {...props} />;
}

export function PageHeading({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn("pageHeading", className)} {...props} />;
}

export function PageDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("pageDescription", className)} {...props} />;
}

export function PageActions({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pageActions", className)} {...props} />;
}

export function AnimatedPageHeader({ children }: { children: React.ReactNode }) {
  return <RevealFrame className="pageHeaderMotion">{children}</RevealFrame>;
}
