"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PHILOSOPHY_PILLARS } from "@/lib/about-content";

export function PhilosophySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            My Philosophy
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            I believe that learning a language should go beyond memorising
            rules and vocabulary. It should help you communicate, think
            differently, gain confidence and connect with people.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }
                }
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-gold-700">
                    {pillar.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mist">
                    <Icon className="h-4 w-4 text-navy-950" />
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm font-medium italic text-slate-500">
                  &ldquo;{pillar.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}