"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ContactHero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-paper pt-20 pb-14 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          {...fadeUp(0)}
          className="inline-flex items-center rounded-full border border-gold-700/25 bg-gold-50 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-gold-700"
        >
          OpenDoorsClass
        </motion.span>

        <motion.h1
          {...fadeUp(0.1)}
          className="mt-6 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-navy-950 sm:text-5xl"
        >
          Parlons de votre projet.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
        >
          Une question sur nos formations, nos parcours ou votre
          apprentissage de l&apos;anglais ? Écrivez-nous. L&apos;équipe
          OpenDoorsClass est là pour vous écouter et vous orienter.
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-5 font-display text-base font-semibold text-navy-950"
        >
          Votre message est le premier pas vers votre prochain progrès.
        </motion.p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gold-100/40 blur-3xl"
      />
    </section>
  );
}