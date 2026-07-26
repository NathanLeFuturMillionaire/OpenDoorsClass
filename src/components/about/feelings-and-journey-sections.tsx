"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FEELING_WORDS, JOURNEY_STEPS } from "@/lib/about-content";

export function FeelingsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          More Than English
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 sm:gap-x-4">
          {FEELING_WORDS.map((word, i) => (
            <motion.span
              key={word}
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.12 }
              }
              className="font-display text-xl font-bold text-white/90 sm:text-2xl"
            >
              {word}
              {i < FEELING_WORDS.length - 1 && (
                <span className="ml-3 text-gold-400 sm:ml-4" aria-hidden="true">
                  ·
                </span>
              )}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 0.6, delay: FEELING_WORDS.length * 0.12 + 0.2 }
          }
          className="mx-auto mt-12 max-w-xl text-lg leading-relaxed text-white/70"
        >
          We don&apos;t want you to simply know more English.
          <br />
          <span className="font-semibold text-white">
            We want you to feel more capable because of it.
          </span>
        </motion.p>
      </div>
    </section>
  );
}

export function JourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          The Open Doors Journey
        </h2>

        <div className="mt-12 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-0">
          {JOURNEY_STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-0">
              <motion.span
                initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.1 }
                }
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  i === JOURNEY_STEPS.length - 1
                    ? "bg-gold-600 text-white"
                    : "bg-mist text-navy-950"
                }`}
              >
                {step.label}
              </motion.span>
              {i < JOURNEY_STEPS.length - 1 && (
                <ArrowRight
                  className="mx-3 hidden h-4 w-4 shrink-0 text-slate-400 sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}