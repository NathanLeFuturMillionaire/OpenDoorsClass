"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CEFR_LEVELS } from "@/lib/leveltest-content";

export function CefrSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            De A1 à C2 : situez votre niveau.
          </h2>
          <p className="mt-4 text-[0.95rem] text-slate-500">
            Le résultat du test vous aide à situer votre niveau selon le
            CECRL.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-black/10 sm:block" aria-hidden="true" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CEFR_LEVELS.map((level, i) => (
              <motion.div
                key={level.code}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.45, delay: i * 0.08 }
                }
              >
                <div className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-600 bg-paper font-mono text-xs font-bold text-navy-950 sm:mx-0">
                  {level.code}
                </div>
                <div className="mt-4 rounded-xl border border-black/5 bg-white p-4 text-center sm:text-left">
                  <p className="text-sm font-bold text-navy-950">{level.label}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                    {level.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}