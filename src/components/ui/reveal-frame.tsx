import type { CSSProperties, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type RevealFrameProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
  type?: "rise" | "bounce";
};

const revealFrameTypes = {
  rise: "animate-in fade-in slide-in-from-bottom-4 animation-duration-600 fill-mode-both ease-out",
  bounce:
    "animate-in slide-in-from-bottom-2 animation-duration-800 fill-mode-both ease-[cubic-bezier(0.8,2.4,0.8,1)]",
};

export function RevealFrame({
  children,
  className,
  delay = 0,
  type = "rise",
  style,
  ...props
}: RevealFrameProps) {
  return (
    <div
      className={cn(revealFrameTypes[type], className)}
      style={
        {
          "--tw-animation-delay": `${delay}ms`,
          animationDelay: `${delay}ms`,
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
}
