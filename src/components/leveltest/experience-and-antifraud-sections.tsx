"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, ShieldCheck, MonitorSmartphone, Compass, ListChecks } from "lucide-react";
import { BEFORE_START_CHECKLIST } from "@/lib/leveltest-content";

const EXPERIENCE_POINTS = [
  { icon: Compass, label: "Interface claire" },
  { icon: ListChecks, label: "Navigation intuitive" },
  { icon: Check, label: "Progression visible" },
  { icon: MonitorSmartphone, label: "Adapté ordinateur et mobile" },
];

export function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)] sm:p-9"
        >
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            Concentrez-vous. Nous nous occupons du reste.
          </h2>
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {EXPERIENCE_POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="flex flex-col items-center gap-2.5 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mist">
                    <Icon className="h-4 w-4 text-navy-950" />
                  </div>
                  <span className="text-xs font-medium text-slate-600">{point.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function AntiFraudSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/15">
            <ShieldCheck className="h-5 w-5 text-gold-400" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Votre résultat doit refléter votre véritable niveau.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
            Pour obtenir un résultat aussi représentatif que possible,
            certaines règles sont appliquées pendant l&apos;évaluation. Nous
            vous recommandons de rester concentré et de ne pas quitter votre
            navigateur inutilement pendant le test.
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
          className="mt-9 rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8"
        >
          <p className="font-mono text-[0.7rem] uppercase tracking-wider text-gold-400">
            Avant de commencer
          </p>
          <ul className="mt-4 space-y-2.5">
            {BEFORE_START_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="mt-6 text-center text-xs text-white/50">
          Les comportements considérés comme suspects peuvent entraîner
          l&apos;interruption ou la reprise de l&apos;évaluation selon les
          règles du test.
        </p>
      </div>
    </section>
  );
}