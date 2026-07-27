"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PathStep } from "@/lib/paths-content";

interface PathTimelineProps {
  steps: PathStep[];
  tone?: "light" | "dark";
}

export function PathTimeline({ steps, tone = "light" }: PathTimelineProps) {
  const reduceMotion = useReducedMotion();
  const isDark = tone === "dark";

  return (
    <div className="relative space-y-4">
      <div
        className={`absolute bottom-2 left-[13px] top-2 w-px ${isDark ? "bg-white/10" : "bg-black/10"}`}
        aria-hidden="true"
      />
      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={reduceMotion ? undefined : { opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.08 }}
          className="relative flex items-center gap-4"
        >
          <span
            className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[0.65rem] font-bold ${
              isDark ? "bg-gold-400 text-navy-950" : "bg-navy-950 text-white"
            }`}
          >
            {i + 1}
          </span>
          <p className={`text-sm ${isDark ? "text-white/80" : "text-slate-600"}`}>{step.label}</p>
        </motion.div>
      ))}
    </div>
  );
}