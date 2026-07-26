"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DoorOpen } from "lucide-react";

export function WhyExistsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            Why OpenDoorsClass Exists
          </h2>
          <p className="mt-5 text-lg font-medium italic text-navy-950/80">
            &ldquo;Learning English should not feel like an endless
            struggle.&rdquo;
          </p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-slate-600">
            Many people study grammar rules for years without ever managing
            to communicate naturally. OpenDoorsClass exists to offer a
            different approach, one that is more structured, more human,
            and far more focused on real practice. The goal is simple: help
            students turn their knowledge of English into an actual ability
            to communicate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function NameMeaningSection() {
  const reduceMotion = useReducedMotion();
  const doors = [0, 1, 2];

  return (
    <section className="overflow-hidden bg-paper py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            Why OpenDoorsClass?
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-600">
            &ldquo;Open Doors&rdquo; represents the opportunities that
            learning a language can create — better communication, new
            encounters, professional opportunities, studies abroad, travel,
            and an opening to the world.
          </p>
          <p className="mt-4 font-display text-lg font-semibold text-navy-950">
            OpenDoorsClass is built around this idea: when you learn to
            communicate, you open doors.
          </p>
        </motion.div>

        {/* Animation subtile : trois portes qui s'entrouvrent progressivement */}
        <div className="mx-auto flex items-end justify-center gap-6" aria-hidden="true">
          {doors.map((i) => (
            <motion.div
              key={i}
              initial={reduceMotion ? undefined : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative h-40 w-24 overflow-hidden rounded-t-xl border border-navy-950/10 bg-navy-950/[0.03] sm:h-52 sm:w-28"
              style={{ perspective: "600px" }}
            >
              <motion.div
                initial={reduceMotion ? undefined : { rotateY: 0 }}
                whileInView={{ rotateY: -35 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.1,
                  delay: 0.3 + i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 origin-left rounded-t-xl bg-navy-950"
                style={{ transformStyle: "preserve-3d" }}
              >
                <DoorOpen className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-400" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}