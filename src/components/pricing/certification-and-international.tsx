"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award } from "lucide-react";
import { INTERNATIONAL_POINTS } from "@/lib/pricing-content";

export function CertificationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            Votre progression mérite d&apos;être reconnue.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-slate-600">
            À la fin de votre parcours, OpenDoorsClass peut délivrer un
            certificat attestant de votre formation et de votre
            progression, selon les conditions du programme suivi.
          </p>
        </div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="mx-auto mt-10 max-w-md rounded-2xl border-2 border-gold-400/30 bg-white p-7 text-center shadow-[0_25px_60px_-25px_rgba(10,15,30,0.3)] sm:p-8"
        >
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gold-50">
            <Award className="h-5 w-5 text-gold-700" />
          </div>
          <p className="mt-3 font-display text-base font-extrabold text-navy-950">
            OpenDoorsClass
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-wider text-gold-700">
            Certificate of Completion
          </p>
          <div className="my-5 h-px bg-black/10" />
          <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">
            Student Name
          </p>
          <p className="mt-1 font-display text-lg font-bold text-navy-950">— — — — — —</p>
        </motion.div>
      </div>
    </section>
  );
}

export function InternationalSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          Apprendre l&apos;anglais pour aller plus loin.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {INTERNATIONAL_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.06 }
                }
                className="flex flex-col items-center gap-2.5 rounded-xl border border-black/5 bg-white p-5 text-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                  <Icon className="h-4.5 w-4.5 text-gold-700" />
                </div>
                <span className="text-sm font-medium text-navy-950">{point.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}