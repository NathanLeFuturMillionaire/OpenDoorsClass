"use client";

import { motion, useReducedMotion } from "framer-motion";
import { WEEK_SESSIONS, LESSON_FLOW } from "@/lib/programs-content";

export function ThreeSessionsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Three sessions. One clear objective: progress.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            OpenDoorsClass follows a structured learning rhythm. Each week
            is designed to combine learning, practice and communication.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["3 sessions / week", "2 hours / session", "6 hours / week"].map((stat) => (
              <span
                key={stat}
                className="rounded-full bg-gold-50 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-gold-700"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {WEEK_SESSIONS.map((session, i) => (
            <motion.div
              key={session.day}
              initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)] transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(10,15,30,0.3)]"
            >
              <span className="font-mono text-xs font-medium text-gold-700">{session.day}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy-950">
                {session.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{session.goal}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LessonFlowSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            How an OpenDoorsClass lesson works
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A pedagogical breakdown of a typical 2-hour session - from
            warm-up to feedback.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute bottom-0 left-[15px] top-0 w-px bg-black/10 sm:left-1/2 sm:h-px sm:w-full sm:top-[15px] sm:bottom-auto"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-0">
            {LESSON_FLOW.map((beat, i) => (
              <motion.div
                key={beat.time}
                initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.08 }
                }
                className="relative z-10 flex items-center gap-4 sm:w-[13%] sm:flex-col sm:text-center"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gold-600 bg-paper" />
                <div className="sm:mt-3">
                  <p className="font-mono text-xs font-bold text-navy-950">{beat.time}</p>
                  <p className="mt-0.5 text-xs leading-tight text-slate-500">{beat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-lg text-center text-xs text-slate-400">
          A visual illustration of the pedagogical flow, timings may adapt
          slightly depending on the group and topic.
        </p>
      </div>
    </section>
  );
}