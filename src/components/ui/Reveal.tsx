"use client";

import { MotionConfig, motion } from "motion/react";
import type { ReactNode } from "react";

/** Entrada gradual al hacer scroll. Con prefers-reduced-motion solo hace fade. */
export function Reveal({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
