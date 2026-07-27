"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST_ITEMS = [
  "Évaluation structurée",
  "Analyse par compétence",
  "Niveau CECRL",
  "Expérience OpenDoorsClass",
];

const MOCK_RESULTS = [
  { label: "Grammar", level: "B2" },
  { label: "Reading", level: "C1" },
  { label: "Listening", level: "B2" },
  { label: "Writing", level: "B1" },
  { label: "Speaking", level: "B2" },
];

export function LevelTestHero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-paper pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Colonne gauche */}
        <div className="relative z-10">
          <motion.p
            {...fadeUp(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-700/25 bg-gold-50 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-gold-700"
          >
            OpenDoorsClass · Level Test
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-[2.15rem] font-extrabold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl"
          >
            Découvrez votre véritable niveau d&apos;anglais.
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Une évaluation conçue pour mesurer vos compétences réelles en
            anglais et vous aider à comprendre précisément où vous en êtes.
          </motion.p>
          <motion.p {...fadeUp(0.22)} className="mt-3 max-w-xl text-sm text-slate-500">
            De A1 à C2 — évaluez vos compétences et découvrez les domaines
            dans lesquels vous pouvez encore progresser.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              id="start"
              size="lg"
              className="group h-12 bg-navy-950 px-6 text-[0.95rem] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-lg"
              asChild
            >
              <a href="/leveltest/start">
                Commencer mon test
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-navy-950/15 px-6 text-[0.95rem] font-semibold text-navy-950 hover:bg-mist"
              asChild
            >
              <a href="#competences">Découvrir le test</a>
            </Button>
          </motion.div>

          <motion.p {...fadeUp(0.36)} className="mt-6 text-sm text-slate-500">
            Une évaluation structurée autour des compétences essentielles de
            la communication en anglais.
          </motion.p>

          <motion.ul {...fadeUp(0.42)} className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm text-slate-600">
                <span className="h-1 w-1 rounded-full bg-gold-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Colonne droite : mock de résultat, marketing uniquement */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-sm"
        >
          <div className="rounded-2xl border border-white/60 bg-white/90 p-6 shadow-[0_30px_65px_-20px_rgba(10,15,30,0.3)] backdrop-blur-sm">
            <div className="flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-wider text-slate-400">
              <span>OpenDoorsClass</span>
              <span>Level Test</span>
            </div>

            <div className="mt-5 rounded-xl bg-navy-950 p-4 text-center">
              <p className="font-mono text-[0.65rem] uppercase tracking-wider text-white/50">
                Overall Level
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold text-gold-400">B2</p>
            </div>

            <div className="mt-4 space-y-2.5">
              {MOCK_RESULTS.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{item.label}</span>
                  <span className="rounded-full bg-mist px-2.5 py-0.5 font-mono text-xs font-semibold text-navy-950">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges flottants, très discrets */}
          <motion.span
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -left-4 top-8 hidden rounded-full bg-white px-3 py-1.5 text-[0.65rem] font-semibold text-navy-950 shadow-md sm:flex sm:items-center sm:gap-1"
          >
            <Sparkles className="h-3 w-3 text-gold-600" />
            AI Analysis
          </motion.span>
          <motion.span
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="absolute -right-3 bottom-16 hidden rounded-full bg-white px-3 py-1.5 text-[0.65rem] font-semibold text-navy-950 shadow-md sm:block"
          >
            CEFR
          </motion.span>
        </motion.div>
      </div>

      <p className="mx-auto mt-2 max-w-2xl px-4 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
        Illustration marketing du résultat - non connectée au véritable
        système d&apos;évaluation.
      </p>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold-100/40 blur-3xl"
      />
    </section>
  );
}