"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { LEARNING_STEPS, CECRL_LEVELS } from "@/lib/programs-content";

export function MoreThanLessonsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="programs-overview" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            More than lessons. A complete learning system.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            At OpenDoorsClass, learning English is not limited to watching
            lessons or memorising grammar rules. Our approach combines
            knowledge, practice, communication, coaching and consistency.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LEARNING_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }
                }
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="group rounded-2xl border border-black/5 bg-white p-6 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)] transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(10,15,30,0.3)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-gold-700">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mist transition-colors duration-300 group-hover:bg-navy-950">
                    <Icon className="h-4.5 w-4.5 text-navy-950 transition-colors duration-300 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-950">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm font-medium italic text-gold-700">
                  {step.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LearningLevelsSection() {
  const reduceMotion = useReducedMotion();
  const [activeCode, setActiveCode] = useState(CECRL_LEVELS[0].code);
  const activeLevel = CECRL_LEVELS.find((l) => l.code === activeCode) ?? CECRL_LEVELS[0];

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Your English learning path
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            From your first sentence to confident and advanced
            communication.
          </p>
        </div>

        {/* Roadmap des niveaux */}
        <div
          role="tablist"
          aria-label="CEFR levels"
          className="mt-12 grid grid-cols-3 gap-2.5 sm:grid-cols-6"
        >
          {CECRL_LEVELS.map((level) => {
            const isActive = level.code === activeCode;
            return (
              <button
                key={level.code}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCode(level.code)}
                className={`rounded-xl border px-3 py-4 text-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-700/50 ${
                  isActive
                    ? "border-navy-950 bg-navy-950 text-white"
                    : "border-black/10 bg-white text-navy-950 hover:border-navy-950/30"
                }`}
              >
                <span className="font-display text-lg font-extrabold">{level.code}</span>
              </button>
            );
          })}
        </div>

        {/* Contenu du niveau actif */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel.code}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 rounded-2xl border border-black/5 bg-white p-7 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)] sm:p-9"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-gold-700">
              {activeLevel.code} — {activeLevel.label}
            </p>
            <p className="mt-2 font-display text-xl font-bold text-navy-950">
              {activeLevel.description}
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {activeLevel.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold-600" aria-hidden="true" />
                  {topic}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-slate-400">
          These levels represent stages of the learning journey, progress
          depends on individual pace and consistency.
        </p>
      </div>
    </section>
  );
}