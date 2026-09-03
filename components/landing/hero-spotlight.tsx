"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const SPOT_CORE =
  "radial-gradient(circle at 50% 45%, hsla(263, 92%, 70%, 0.22) 0%, hsla(280, 86%, 68%, 0.1) 28%, hsla(263, 78%, 56%, 0.04) 48%, transparent 62%)";

const SPOT_BRIGHT =
  "radial-gradient(circle at 50% 50%, hsla(270, 80%, 92%, 0.55) 0%, hsla(265, 70%, 88%, 0.2) 30%, transparent 56%)";

const SPOT_LEFT =
  "radial-gradient(circle at 50% 50%, hsla(200, 90%, 66%, 0.12) 0%, transparent 56%)";

const SPOT_RIGHT =
  "radial-gradient(circle at 50% 50%, hsla(295, 88%, 68%, 0.1) 0%, transparent 56%)";

const spotlightShellClassName = cn(
  "pointer-events-none absolute top-0 left-1/2 z-0 h-[min(520px,68vh)] w-screen max-w-[100vw] -translate-x-1/2",
  "sm:h-[min(580px,72vh)] md:h-[min(640px,78vh)]",
  "[mask-image:linear-gradient(to_bottom,black_15%,black_70%,transparent_100%)]",
);

function StaticSpotlight() {
  return (
    <div aria-hidden className={spotlightShellClassName}>
      <span
        className="absolute top-0 left-1/2 block aspect-square w-[min(100vw,1200px)] -translate-x-1/2 -translate-y-[40%] rounded-full"
        style={{ background: SPOT_CORE }}
      />
      <span
        className="absolute top-0 left-1/2 block aspect-square w-[min(85vw,640px)] -translate-x-1/2 -translate-y-[18%] rounded-full"
        style={{ background: SPOT_BRIGHT }}
      />
      <span
        className="absolute top-0 left-[2%] block aspect-square w-[min(55vw,420px)] -translate-y-[25%] rounded-full sm:left-[5%]"
        style={{ background: SPOT_LEFT }}
      />
      <span
        className="absolute top-0 right-[2%] block aspect-square w-[min(55vw,420px)] -translate-y-[20%] rounded-full sm:right-[5%]"
        style={{ background: SPOT_RIGHT }}
      />
    </div>
  );
}

const driftTransition = (duration: number, delay = 0) => ({
  duration,
  repeat: Infinity,
  ease: "easeInOut" as const,
  delay,
});

export function HeroSpotlight() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <StaticSpotlight />;
  }

  return (
    <div aria-hidden className={spotlightShellClassName}>
      <motion.div
        className="absolute top-0 left-1/2 aspect-square w-[min(100vw,1200px)] rounded-full"
        style={{
          background: SPOT_CORE,
          x: "-50%",
          y: "-40%",
          transformOrigin: "50% 50%",
        }}
        animate={{
          x: ["-50%", "-47%", "-53%", "-49%", "-50%"],
          y: ["-40%", "-37%", "-43%", "-39%", "-40%"],
          scale: [1, 1.07, 1.02, 1.09, 1],
        }}
        transition={driftTransition(14)}
      />

      <motion.div
        className="absolute top-0 left-1/2 aspect-square w-[min(85vw,640px)] rounded-full"
        style={{
          background: SPOT_BRIGHT,
          x: "-50%",
          y: "-18%",
          transformOrigin: "50% 50%",
        }}
        animate={{
          x: ["-50%", "-52%", "-48%", "-51%", "-50%"],
          scale: [1, 1.1, 1.04, 1.12, 1],
          opacity: [0.7, 0.95, 0.8, 0.9, 0.7],
        }}
        transition={driftTransition(9, 0.4)}
      />

      <motion.div
        className="absolute top-0 left-[2%] aspect-square w-[min(55vw,420px)] rounded-full sm:left-[5%]"
        style={{
          background: SPOT_LEFT,
          y: "-25%",
          transformOrigin: "50% 50%",
        }}
        animate={{
          x: [0, 28, -14, 20, 0],
          y: ["-25%", "-21%", "-29%", "-23%", "-25%"],
          scale: [1, 1.08, 0.96, 1.05, 1],
          opacity: [0.55, 0.88, 0.65, 0.8, 0.55],
        }}
        transition={driftTransition(13, 0.2)}
      />

      <motion.div
        className="absolute top-0 right-[2%] aspect-square w-[min(55vw,420px)] rounded-full sm:right-[5%]"
        style={{
          background: SPOT_RIGHT,
          y: "-20%",
          transformOrigin: "50% 50%",
        }}
        animate={{
          x: [0, -32, 12, -22, 0],
          y: ["-20%", "-16%", "-24%", "-18%", "-20%"],
          scale: [1, 1.09, 0.97, 1.06, 1],
          opacity: [0.6, 0.92, 0.7, 0.85, 0.6],
        }}
        transition={driftTransition(15, 0.9)}
      />
    </div>
  );
}
