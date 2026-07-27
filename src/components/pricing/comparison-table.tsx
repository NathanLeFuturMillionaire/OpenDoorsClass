"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { COMPARISON_ROWS } from "@/lib/pricing-content";

export function ComparisonTable() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          Comparez les deux parcours
        </h2>

        {/* Desktop / tablette : vrai tableau */}
        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-black/5 bg-white sm:block">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-black/5 bg-mist/60">
                <th scope="col" className="px-5 py-3.5 font-semibold text-navy-950">
                  Compétence
                </th>
                <th scope="col" className="px-5 py-3.5 text-center font-semibold text-navy-950">
                  Starter
                </th>
                <th scope="col" className="px-5 py-3.5 text-center font-semibold text-navy-950">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <motion.tr
                  key={row.label}
                  initial={reduceMotion ? undefined : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={
                    reduceMotion ? { duration: 0 } : { duration: 0.3, delay: (i % 12) * 0.02 }
                  }
                  className="border-b border-black/5 last:border-0"
                >
                  <th scope="row" className="px-5 py-3 font-normal text-slate-600">
                    {row.label}
                  </th>
                  <td className="px-5 py-3 text-center">
                    {row.starter ? (
                      <Check className="mx-auto h-4 w-4 text-gold-700" aria-label="Inclus" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-slate-300" aria-label="Non inclus" />
                    )}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {row.pro ? (
                      <Check className="mx-auto h-4 w-4 text-navy-950" aria-label="Inclus" />
                    ) : (
                      <Minus className="mx-auto h-4 w-4 text-slate-300" aria-label="Non inclus" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile : liste lisible, pas de tableau écrasé */}
        <div className="mt-10 space-y-2.5 sm:hidden">
          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between rounded-xl border border-black/5 bg-white px-4 py-3"
            >
              <span className="pr-3 text-sm text-slate-600">{row.label}</span>
              <div className="flex shrink-0 items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1 text-slate-500">
                  S
                  {row.starter ? (
                    <Check className="h-3.5 w-3.5 text-gold-700" />
                  ) : (
                    <Minus className="h-3.5 w-3.5 text-slate-300" />
                  )}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  P
                  {row.pro ? (
                    <Check className="h-3.5 w-3.5 text-navy-950" />
                  ) : (
                    <Minus className="h-3.5 w-3.5 text-slate-300" />
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}