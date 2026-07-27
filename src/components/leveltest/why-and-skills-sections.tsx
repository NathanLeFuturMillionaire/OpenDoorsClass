"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, ThumbsUp, Target } from "lucide-react";
import { TEST_SKILLS } from "@/lib/leveltest-content";

const WHY_BLOCKS = [
  {
    number: "01",
    icon: Compass,
    title: "Connaître votre niveau",
    description: "Situez vos compétences sur l'échelle CECRL, de A1 à C2.",
  },
  {
    number: "02",
    icon: ThumbsUp,
    title: "Identifier vos forces",
    description: "Découvrez les compétences dans lesquelles vous êtes déjà à l'aise.",
  },
  {
    number: "03",
    icon: Target,
    title: "Savoir quoi améliorer",
    description: "Comprenez les domaines sur lesquels vous devez concentrer vos efforts.",
  },
];

export function WhyTestSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Ne devinez plus votre niveau. Mesurez-le.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Il est facile de surestimer ou de sous-estimer son niveau
            d&apos;anglais. OpenDoorsClass vous permet de mieux comprendre
            vos compétences et d&apos;identifier les domaines qui méritent
            votre attention.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {WHY_BLOCKS.map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.number}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-gold-700">
                    {block.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mist">
                    <Icon className="h-4 w-4 text-navy-950" />
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-950">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {block.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SkillsGridSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="competences" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Votre anglais ne se résume pas à une note.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Une véritable maîtrise de l&apos;anglais repose sur plusieurs
            compétences complémentaires.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {TEST_SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.number}
                initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_15px_40px_-25px_rgba(10,15,30,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-gold-700">
                    {skill.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mist">
                    <Icon className="h-4 w-4 text-navy-950" />
                  </div>
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