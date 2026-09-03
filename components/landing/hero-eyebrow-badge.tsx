import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type HeroEyebrowBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function HeroEyebrowBadge({ children, className }: HeroEyebrowBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit max-w-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 p-px shadow-[0_0_20px_-4px_rgba(124,58,237,0.45)]",
        className,
      )}
    >
      <span className="inline-flex w-fit min-w-0 max-w-full items-center justify-center rounded-full bg-secondary/95 px-3.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm sm:text-sm">
        {children}
      </span>
    </span>
  );
}
