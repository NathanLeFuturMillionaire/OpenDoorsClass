"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SPEAKING_CONTEXTS, SKILLS } from "@/lib/programs-content";

export function SpeakingFirstSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Don&apos;t just study English. Use it.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Grammar matters. Vocabulary matters. But English becomes useful
            when you can actually use it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {SPEAKING_CONTEXTS.map((context, i) => {
            const Icon = context.icon;
            return (
              <motion.div
                key={context.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.08 }
                }
                whileHover={reduceMotion ? undefined : { y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/15">
                  <Icon className="h-4.5 w-4.5 text-gold-400" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{context.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                  {context.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Build every skill that matters.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.06 }
                }
                className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mist">
                  <Icon className="h-4.5 w-4.5 text-navy-950" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-navy-950">{skill.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}