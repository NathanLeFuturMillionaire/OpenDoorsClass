"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
// S'assurer que hero-visual est un composant SEPARÉ
import { HeroVisual } from "@/components/marketing/hero-visual";

const TRUST_ITEMS = [
  "Formation structurée sur 8 mois",
  "Coaching en direct",
  "Certificat officiel",
  "Paiements Mobile Money & carte bancaire",
  "Plateforme internationale",
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: reduceMotion
      ? { duration: 0 }
      : { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        {/* Colonne gauche */}
        <div className="relative z-10">
          <motion.p
            {...fadeUp(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-700/25 bg-gold-50 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-gold-700"
          >
            Anglais · Programme international
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.25rem]"
          >
            Apprendre une langue qui change, qui transforme, qui façonne et qui valorise des vies.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 font-mono"
          >
            OpenDoorsClass est une plateforme de formation linguistique dont
            les cours suivent un programme précis, semaine après semaine.
            Chaque étudiant progresse avec un accompagnement réel pour
            parler avec confiance dans un contexte personnel, académique et
            professionnel.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-12 bg-navy-950 px-6 text-[0.95rem] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-lg"
            >
              <Link href="/commencer">
                Commencer ma formation
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-navy-950/15 px-6 text-[0.95rem] font-semibold text-navy-950 hover:bg-mist"
            >
              <Link href="/test-de-niveau">
                <ClipboardCheck className="mr-1.5 h-4 w-4" />
                Passer le test de niveau
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            {...fadeUp(0.32)}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3"
          >
            {TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-sm text-slate-600"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-gold-700" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Colonne droite */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
          }
          className="relative z-10"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Halo discret en fond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gold-100/40 blur-3xl"
      />
    </section>
  );
}