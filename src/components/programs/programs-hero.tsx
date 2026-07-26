"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ClipboardCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProgramsHero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-paper pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center rounded-full border border-gold-700/25 bg-gold-50 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-gold-700"
        >
          OpenDoorsClass Programs
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-navy-950 sm:text-5xl"
        >
          A structured English journey. Built around you.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
        >
          Learn English through structured lessons, real conversations,
          practical exercises and consistent coaching designed to turn
          knowledge into confidence.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="group h-12 bg-navy-950 px-6 text-[0.95rem] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-lg"
            asChild
          >
            <a href="#programs-overview">
              Explore our programs
              <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-navy-950/15 px-6 text-[0.95rem] font-semibold text-navy-950 hover:bg-mist"
            asChild
          >
            <a href="/test-de-niveau">
              <ClipboardCheck className="mr-1.5 h-4 w-4" />
              Take the level test
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gold-100/40 blur-3xl"
      />
    </section>
  );
}