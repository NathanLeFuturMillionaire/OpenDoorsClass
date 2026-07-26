"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Globe2, Smartphone, Users, Sparkles } from "lucide-react";

export function MissionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy-950 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
        >
          Our Mission
        </motion.h2>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg leading-relaxed text-white/70"
        >
          &ldquo;To make high-quality English learning more accessible,
          structured, practical and human, starting from Africa and
          reaching learners around the world.&rdquo;
        </motion.p>

        <motion.p
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.25 }}
          className="mt-10 inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-6 py-3 font-display text-lg font-bold text-gold-400"
        >
          Built with Africa in mind. Open to the world.
        </motion.p>
      </div>
    </section>
  );
}

const ROOTS_POINTS = [
  { icon: Smartphone, label: "Mobile Money & accessible payments" },
  { icon: Globe2, label: "An international, connected community" },
  { icon: Sparkles, label: "Modern learning, modern technology" },
  { icon: Users, label: "Built around real African realities" },
];

export function AfricanRootsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            Born from Africa. Built for the World.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-slate-600">
            OpenDoorsClass is designed with African learners in mind, while
            remaining genuinely open to people everywhere. Africa is not a
            secondary market here, it is an essential part of who we are.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ROOTS_POINTS.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.label}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }
                }
                className="flex items-center gap-4 rounded-xl border border-black/5 bg-white px-5 py-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-50">
                  <Icon className="h-4.5 w-4.5 text-gold-700" />
                </div>
                <p className="text-sm font-medium text-navy-950">{point.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}