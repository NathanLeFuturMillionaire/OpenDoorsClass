"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BrandSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          Plus qu&apos;un test. Un point de départ.
        </h2>
        <p className="mt-5 text-[0.95rem] leading-relaxed text-slate-600">
          Chez OpenDoorsClass, nous considérons l&apos;évaluation comme le
          début d&apos;un parcours. Connaître votre niveau vous permet de
          mieux comprendre votre situation, de définir vos objectifs et de
          construire une progression plus pertinente.
        </p>
        <Button
          className="group mt-6 h-11 bg-navy-950 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900"
          asChild
        >
          <a href="/about">
            Découvrir OpenDoorsClass
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}

export function FounderMiniSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          Une vision portée par une passion.
        </h2>
        <p className="mt-5 font-display text-base font-semibold text-navy-950">
          MAYUKWA Nathan Harysthote
        </p>
        <p className="text-sm text-gold-700">aka Mister Nathan</p>

        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-slate-600">
          Passionné par la langue anglaise et par la transmission du savoir,
          Mister Nathan a créé OpenDoorsClass avec une conviction simple :
          apprendre une langue ne devrait pas seulement consister à
          mémoriser des règles, mais à développer une véritable capacité à
          communiquer, comprendre et évoluer dans un monde international.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-slate-600">
          Le Level Test OpenDoorsClass s&apos;inscrit dans cette vision :
          aider chaque apprenant à mieux comprendre son niveau afin de
          savoir où commencer et comment progresser.
        </p>
      </motion.div>
    </section>
  );
}