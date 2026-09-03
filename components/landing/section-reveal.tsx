"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export type SectionRevealDirection = "up" | "down" | "left" | "right" | "fade";

const OFFSET: Record<
  Exclude<SectionRevealDirection, "fade">,
  { x: number; y: number }
> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -36 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
};

type SectionRevealProps = {
  children: ReactNode;
  direction?: SectionRevealDirection;
  /** Retraso en segundos al entrar en vista */
  delay?: number;
  className?: string;
  /** Si false, anima cada vez que entra en el viewport */
  once?: boolean;
};

export function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "fade" ? { x: 0, y: 0 } : OFFSET[direction];

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: direction === "fade" ? "blur(4px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        amount: 0.12,
        margin: "0px 0px -6% 0px",
      }}
      transition={{
        duration: direction === "fade" ? 0.55 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
