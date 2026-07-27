"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/leveltest-content";

export function HowItWorksSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="comment-ca-marche" className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Votre évaluation, en quelques étapes.
        </h2>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-black/10 sm:block" aria-hidden="true" />
          <motion.div
            className="absolute left-0 top-5 hidden h-px bg-gold-600 sm:block"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.45, delay: i * 0.1 }
                }
                className="relative"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-600 bg-paper font-mono text-xs font-bold text-navy-950">
                  {i + 1}
                </div>
                <p className="mt-4 text-sm font-semibold text-navy-950">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}