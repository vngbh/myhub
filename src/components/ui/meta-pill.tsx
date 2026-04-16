import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function MetaPill({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}
