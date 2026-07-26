"use client";

import { motion, useReducedMotion } from "framer-motion";
import { COACH_STEPS } from "@/lib/coach-steps";

interface CoachTimelineProps {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function CoachTimeline({ activeIndex, onSelect }: CoachTimelineProps) {
  const reduceMotion = useReducedMotion();
  const progressRatio = activeIndex / (COACH_STEPS.length - 1);

  return (
    <div
      className="relative flex flex-row items-center gap-6 lg:flex-col lg:items-start lg:gap-0 lg:self-stretch"
      role="tablist"
      aria-label="Étapes de l'accompagnement"
    >
      {/* Ligne de fond (grise) */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-black/10 lg:bottom-0 lg:left-[7px] lg:right-auto lg:top-0 lg:h-full lg:w-px lg:translate-y-0"
      />
      {/* Ligne de progression (dorée) — version mobile : se remplit horizontalement */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-gold-600 lg:hidden"
        initial={false}
        animate={reduceMotion ? undefined : { width: `${progressRatio * 100}%` }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Ligne de progression (dorée) — version desktop : se remplit verticalement */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[7px] top-0 hidden w-px bg-gold-600 lg:block"
        initial={false}
        animate={reduceMotion ? undefined : { height: `${progressRatio * 100}%` }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {COACH_STEPS.map((step, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={step.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={step.badge}
            onClick={() => onSelect(index)}
            className="relative z-10 flex flex-1 cursor-pointer items-center justify-center py-3 lg:flex-none lg:justify-start lg:py-8"
          >
            <motion.span
              animate={{
                scale: isActive ? 1.25 : 1,
                backgroundColor: isActive ? "#B8924A" : "#0A0F1E",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block h-3.5 w-3.5 rounded-full ring-4 ring-paper transition-shadow"
              style={{
                boxShadow: isActive ? "0 0 0 4px rgba(184,146,74,0.18)" : "none",
              }}
            />
            <span
              data-active={isActive}
              className="sr-only lg:not-sr-only lg:ml-4 lg:text-sm lg:font-medium lg:text-slate-500 lg:data-[active=true]:text-navy-950"
            >
              {step.badge}
            </span>
          </button>
        );
      })}
    </div>
  );
}