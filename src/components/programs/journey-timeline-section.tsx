"use client";

import { motion, useReducedMotion } from "framer-motion";
import { JOURNEY_MONTHS } from "@/lib/programs-content";

export function JourneyTimelineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Your 8-month journey
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A structured path designed to help you build knowledge, develop
            real communication skills and become increasingly confident.
          </p>
        </div>

        {/* Desktop : timeline horizontale avec ligne de progression */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-5 h-px bg-black/10" aria-hidden="true" />
          <motion.div
            className="absolute left-0 top-5 h-px bg-gold-600"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-8 gap-3">
            {JOURNEY_MONTHS.map((item, i) => (
              <motion.div
                key={item.month}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.08 }
                }
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-600 bg-paper font-mono text-xs font-bold text-navy-950">
                  {i + 1}
                </div>
                <div className="mt-4 rounded-xl border border-black/5 bg-white p-4 shadow-[0_10px_30px_-20px_rgba(10,15,30,0.25)]">
                  <p className="font-mono text-[0.65rem] uppercase tracking-wider text-gold-700">
                    {item.month}
                  </p>
                  <p className="mt-1.5 text-sm font-bold leading-snug text-navy-950">
                    {item.title}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {item.topics.slice(0, 3).map((topic) => (
                      <li key={topic} className="text-[0.7rem] text-slate-500">
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 border-t border-black/5 pt-3 text-[0.7rem] italic leading-snug text-slate-500">
                    {item.goal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablette : timeline verticale */}
        <div className="relative mt-14 space-y-6 lg:hidden">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-black/10" aria-hidden="true" />
          {JOURNEY_MONTHS.map((item, i) => (
            <motion.div
              key={item.month}
              initial={reduceMotion ? undefined : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.45, delay: i * 0.06 }
              }
              className="relative flex gap-5 pl-0"
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-600 bg-paper font-mono text-xs font-bold text-navy-950">
                {i + 1}
              </div>
              <div className="flex-1 rounded-xl border border-black/5 bg-white p-4 shadow-[0_10px_30px_-20px_rgba(10,15,30,0.25)]">
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-gold-700">
                  {item.month}
                </p>
                <p className="mt-1 text-sm font-bold text-navy-950">{item.title}</p>
                <p className="mt-2 flex flex-wrap gap-1.5">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-mist px-2 py-0.5 text-[0.68rem] text-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </p>
                <p className="mt-2.5 text-xs italic leading-relaxed text-slate-500">
                  {item.goal}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}