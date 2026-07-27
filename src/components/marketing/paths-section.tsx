"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StarterPathCard, ProPathCard } from "@/components/marketing/path-cards";
import { PathsComparison } from "@/components/marketing/paths-comparison";

export function PathsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Deux parcours. Un même objectif : maîtriser l&apos;anglais.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Que vous souhaitiez construire vos bases progressivement ou
            transformer votre anglais en véritable compétence
            professionnelle, OpenDoorsClass vous accompagne avec un parcours
            pensé pour votre objectif.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <StarterPathCard />
          <ProPathCard />
        </div>

        <PathsComparison />

        {/* Mini question interactive */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="mx-auto mt-16 max-w-xl rounded-2xl border border-black/5 bg-mist/60 p-7 text-center sm:mt-20"
        >
          <p className="font-display text-lg font-bold text-navy-950">
            Vous ne savez pas encore quel parcours choisir ?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Commencez par identifier votre niveau et vos objectifs.
          </p>
          <Button
            className="group mt-5 h-11 bg-navy-950 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900"
            asChild
          >
            <a href="/test-de-niveau">
              Découvrir mon parcours
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Message de transition */}
        <p className="mx-auto mt-14 max-w-lg text-center font-display text-lg font-semibold text-navy-950">
          Peu importe votre point de départ. Ce qui compte, c&apos;est la
          direction que vous choisissez.
          <span className="mt-1 block text-base font-medium text-slate-500">
            OpenDoorsClass vous accompagne pour aller plus loin.
          </span>
        </p>
      </div>
    </section>
  );
}