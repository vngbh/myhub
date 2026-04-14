import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { RevealFrame } from "@/components/ui/reveal-frame";

export function PageHeader({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("max-w-205 pt-24", className)} {...props}>
      {children}
    </section>
  );
}

export function PageEyebrow({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mb-5 mt-0 font-mono text-xs font-normal uppercase tracking-[1.2px] text-brand",
        className,
      )}
      {...props}
    />
  );
}

export function PageHeading({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "m-0 max-w-190 text-[clamp(3rem,11vw,72px)] font-normal leading-none tracking-normal text-foreground",
        className,
      )}
      {...props}
    />
  );
}

export function PageDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mb-0 mt-7 max-w-145 text-base leading-[1.6] text-[#b4b4b4]",
        className,
      )}
      {...props}
    />
  );
}

export function PageActions({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mt-10 flex flex-wrap gap-3", className)} {...props} />
  );
}

export function AnimatedPageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RevealFrame className="max-w-200">{children}</RevealFrame>;
}
