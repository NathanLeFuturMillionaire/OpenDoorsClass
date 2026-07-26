"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COACH_STEPS } from "@/lib/coach-steps";
import { CoachTimeline } from "@/components/marketing/coach-timeline";
import { CoachVisual } from "@/components/marketing/coach-visual";

export function CoachSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const step = COACH_STEPS[activeIndex];
  const Icon = step.icon;

  return (
    <section className="bg-mist/50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Un coach, toujours proche de vous
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Les coachs d&apos;OpenDoorsClass veillent à votre amélioration de
            près. Vous n&apos;êtes jamais seul : nous vous accompagnons, vous
            corrigeons et vous encourageons à chaque étape de votre
            parcours.
          </p>
        </div>

        {/* Corps : timeline / contenu / visuel */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr_1fr] lg:gap-14">
          <CoachTimeline activeIndex={activeIndex} onSelect={setActiveIndex} />

          <div className="flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-700/25 bg-gold-50 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-gold-700">
                  <Icon className="h-3.5 w-3.5" />
                  {step.badge}
                </span>

                <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-navy-950 sm:text-[1.75rem]">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-slate-600">
                  {step.paragraph}
                </p>

                <Button
                  className="group mt-7 h-11 bg-navy-950 px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-md"
                  asChild
                >
                  <a href={step.href}>
                    {step.cta}
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center lg:justify-end">
            <CoachVisual activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}