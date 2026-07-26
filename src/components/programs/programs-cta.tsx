"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProgramsCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Your English journey starts with one decision.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Find your level. Follow your program. Practice consistently. Open
          new doors.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="group h-12 bg-navy-950 px-6 text-[0.95rem] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-lg"
            asChild
          >
            <a href="/commencer">
              Start Learning
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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
              Take the Level Test
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}