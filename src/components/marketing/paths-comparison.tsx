"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { STARTER_COMPARISON, PRO_COMPARISON } from "@/lib/paths-content";

export function PathsComparison() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-16 sm:mt-20">
      <h3 className="text-center font-display text-2xl font-bold tracking-tight text-navy-950">
        Quel parcours vous correspond ?
      </h3>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="rounded-2xl border border-black/5 bg-white p-6"
        >
          <p className="font-display text-lg font-bold text-navy-950">Starter</p>
          <p className="mt-1 text-sm italic text-slate-500">
            Pour construire et développer votre anglais.
          </p>
          <ul className="mt-5 space-y-2.5">
            {STARTER_COMPARISON.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                <Check className="h-3.5 w-3.5 shrink-0 text-gold-700" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-gold-400/25 bg-navy-950 p-6"
        >
          <p className="font-display text-lg font-bold text-white">Pro</p>
          <p className="mt-1 text-sm italic text-white/60">
            Pour utiliser l&apos;anglais avec assurance dans le monde
            professionnel.
          </p>
          <ul className="mt-5 space-y-2.5">
            {PRO_COMPARISON.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                <Check className="h-3.5 w-3.5 shrink-0 text-gold-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}