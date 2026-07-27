"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TEST_SKILLS } from "@/lib/leveltest-content";

export function SkillsInteractiveSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = TEST_SKILLS[activeIndex];

  return (
    <section className="bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Un test qui regarde au-delà des bonnes réponses.
        </h2>

        <div
          role="tablist"
          aria-label="Compétences évaluées"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {TEST_SKILLS.map((skill, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={skill.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIndex(i)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-gold-600 text-navy-950"
                    : "bg-white/10 text-white/70 hover:bg-white/[0.15]"
                }`}
              >
                {skill.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-gold-400">
                  Ce que ça mesure
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{active.measures}</p>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-gold-400">
                  Pourquoi c&apos;est important
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {active.whyItMatters}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-gold-400">
                  Ce que vous devez savoir faire
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{active.canDo}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}