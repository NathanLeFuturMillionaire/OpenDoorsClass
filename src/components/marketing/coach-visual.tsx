"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Mic, Award, Star } from "lucide-react";
import { COACH_STEPS } from "@/lib/coach-steps";

interface CoachVisualProps {
  activeIndex: number;
}

export function CoachVisual({ activeIndex }: CoachVisualProps) {
  const reduceMotion = useReducedMotion();
  const step = COACH_STEPS[activeIndex];

  return (
    <div className="relative aspect-square w-full max-w-sm">
      {/* Halo décoratif de fond, fixe, donne la profondeur derrière la carte animée */}
      <div
        aria-hidden="true"
        className="absolute inset-6 rounded-full bg-gold-100/50 blur-2xl"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {step.id === "suivi" && <ProgressCard />}
          {step.id === "pratique" && <PracticeCard />}
          {step.id === "confiance" && <ConfidenceCard />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProgressCard() {
  return (
    <div className="w-[85%] rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_20px_45px_-15px_rgba(10,15,30,0.25)] backdrop-blur-sm">
      <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-gold-700">
        <TrendingUp className="h-3.5 w-3.5" />
        Progression hebdomadaire
      </div>
      <svg viewBox="0 0 220 90" className="mt-4 w-full">
        <polyline
          points="0,75 35,60 70,65 105,40 140,45 175,15 220,20"
          fill="none"
          stroke="#B8924A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [0, 75],
          [70, 65],
          [140, 45],
          [220, 20],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#0A0F1E" />
        ))}
      </svg>
      <div className="mt-3 flex items-center gap-3 border-t border-black/5 pt-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950 text-xs font-semibold text-white">
          SK
        </div>
        <p className="text-xs text-slate-500">
          <span className="font-medium text-navy-950">Coach Sarah</span> · « Belle
          progression cette semaine ! »
        </p>
      </div>
    </div>
  );
}

function PracticeCard() {
  return (
    <div className="w-[85%] rounded-2xl border border-white/60 bg-white/90 p-5 shadow-[0_20px_45px_-15px_rgba(10,15,30,0.25)] backdrop-blur-sm">
      <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-gold-700">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-600 opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-600" />
        </span>
        Session en direct
      </div>
      <div className="mt-4 space-y-2.5">
        <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-mist px-3.5 py-2 text-xs text-navy-950">
          How would you describe your last job interview?
        </div>
        <div className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-navy-950 px-3.5 py-2 text-xs text-white">
          It went really well, I felt confident this time.
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-black/5 pt-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-50">
          <Mic className="h-3.5 w-3.5 text-gold-700" />
        </div>
        <p className="text-xs text-slate-500">Mise en situation orale - 12 min</p>
      </div>
    </div>
  );
}

function ConfidenceCard() {
  return (
    <div className="w-[85%] rounded-2xl border border-white/60 bg-white/90 p-5 text-center shadow-[0_20px_45px_-15px_rgba(10,15,30,0.25)] backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
        <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full -rotate-90">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#F0F1F4" strokeWidth="5" />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#B8924A"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 28}
            strokeDashoffset={2 * Math.PI * 28 * 0.06}
          />
        </svg>
        <Award className="h-6 w-6 text-navy-950" />
      </div>
      <p className="mt-3 text-sm font-semibold text-navy-950">Objectif atteint à 94%</p>
      <div className="mt-2 flex items-center justify-center gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-gold-600 text-gold-600" />
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">« Je n&apos;ai plus peur de parler. »</p>
    </div>
  );
}