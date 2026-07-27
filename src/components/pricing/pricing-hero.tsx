"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PricingHero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-paper pt-20 pb-14 sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
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
          Choisissez le parcours qui vous correspond.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
        >
          Que vous souhaitiez construire votre anglais progressivement ou le
          transformer en véritable compétence professionnelle,
          OpenDoorsClass vous propose un parcours adapté à votre objectif.
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-5 font-display text-base font-semibold text-navy-950"
        >
          Votre niveau actuel n&apos;est pas une limite. Il constitue
          simplement votre point de départ.
        </motion.p>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gold-100/40 blur-3xl"
      />
    </section>
  );
}

export function PhilosophyRecap() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper pb-16 sm:pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl"
        >
          Deux parcours. Deux expériences. Une même ambition.
        </motion.h2>
        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-slate-600"
        >
          Starter vous permet de construire votre anglais progressivement et
          à votre rythme. Pro va plus loin : il transforme votre anglais en
          compétence professionnelle grâce à un accompagnement plus poussé
          et à une préparation adaptée aux exigences du monde international.
        </motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-navy-950">
            🌱 Starter - <span className="italic text-slate-500">Learn at your pace.</span>
          </span>
          <span className="rounded-full bg-navy-950 px-4 py-2 text-sm font-medium text-white">
            💎 Pro - <span className="italic text-gold-400">Perform with confidence.</span>
          </span>
        </div>
      </div>
    </section>
  );
}