"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FounderMessageSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            A message from Mr Nathan
          </h2>

          <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-slate-600">
            <p>
              I created OpenDoorsClass because I know how powerful English
              can become when you stop seeing it as just another subject and
              start seeing it as a skill that can change the way you
              communicate with the world.
            </p>
            <p>
              I want every learner who joins OpenDoorsClass to leave with
              more than better English. I want them to leave with more
              confidence, more possibilities, and a door they didn&apos;t
              know they could open.
            </p>
          </div>

          <div className="mt-8 border-t border-black/10 pt-6">
            <p className="font-display text-base font-bold text-navy-950">
              MAYUKWA Nathan Harysthote
            </p>
            <p className="text-sm text-slate-500">
              aka Mister Nathan - Founder, OpenDoorsClass
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AboutCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy-950 py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Your next opportunity could start with one conversation.
        </h2>
        <p className="mt-4 text-lg text-white/70">
          Start your English journey with OpenDoorsClass.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="group h-12 bg-gold-600 px-6 text-[0.95rem] font-semibold text-navy-950 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-500"
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
            className="h-12 border-white/20 bg-transparent px-6 text-[0.95rem] font-semibold text-white hover:bg-white/10"
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