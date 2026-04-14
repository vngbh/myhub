import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type RevealFrameProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function RevealFrame({
  children,
  className,
  delay = 0,
  style,
  ...props
}: RevealFrameProps) {
  return (
    <div
      className={cn("revealFrame", className)}
      style={{ "--delay": `${delay}ms`, ...style } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
