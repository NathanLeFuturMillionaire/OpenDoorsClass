"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PROGRESS_METRICS, LEARNING_GOALS } from "@/lib/programs-content";

export function ProgressDashboardSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Your progress is measured.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Progress should not be based on feelings alone. OpenDoorsClass
            is designed to help learners understand where they are, what
            they have improved, and what they need to work on next.
          </p>
        </div>

        {/* Représentation visuelle d'un dashboard — illustration marketing uniquement */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="mt-12 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_25px_60px_-25px_rgba(10,15,30,0.3)] sm:p-9"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/5 pb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Current Level
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold text-navy-950">B1</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                Next Milestone
              </p>
              <p className="mt-1 font-display text-3xl font-extrabold text-gold-700">B2</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PROGRESS_METRICS.map((metric, i) => (
              <div key={metric.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-navy-950">{metric.label}</span>
                  <span className="font-mono font-semibold text-slate-500">
                    {metric.value}%
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-mist">
                  <motion.div
                    className="h-full rounded-full bg-gold-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value}%` }}
                    viewport={{ once: true }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <p className="mx-auto mt-5 max-w-lg text-center text-xs text-slate-400">
          Illustrative representation — your actual student dashboard may
          look different.
        </p>
      </div>
    </section>
  );
}

export function LearningGoalsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          What do you want English for?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_GOALS.map((goal, i) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.08 }
                }
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
                  <Icon className="h-4.5 w-4.5 text-gold-700" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">
                  {goal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {goal.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-slate-400">
          These goals reflect what the program can be contextualised
          around, not a guaranteed professional outcome.
        </p>
      </div>
    </section>
  );
}