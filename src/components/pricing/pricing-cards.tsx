"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STARTER_FEATURES, PRO_FEATURES, STARTER_HOW_IT_WORKS } from "@/lib/pricing-content";

export function PricingCards() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper pb-16 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
          {/* STARTER */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="rounded-3xl border border-black/5 bg-white p-7 shadow-[0_20px_50px_-25px_rgba(10,15,30,0.22)] transition-shadow duration-300 hover:shadow-[0_28px_60px_-20px_rgba(10,15,30,0.28)] sm:p-9"
          >
            <span className="inline-flex items-center rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold text-navy-950">
              🌱 Pour commencer
            </span>
            <h2 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
              Starter
            </h2>
            <p className="mt-1.5 text-base font-medium text-gold-700">
              Construisez votre anglais, étape par étape.
            </p>

            <div className="mt-6 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-extrabold tracking-tight text-navy-950">
                55 000 F CFA
              </span>
              <span className="text-sm text-slate-500">/ mois</span>
            </div>
            <p className="mt-1.5 text-xs font-medium text-slate-500">
              Formation complète et progressive
            </p>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Starter est conçu pour celles et ceux qui souhaitent apprendre
              l&apos;anglais progressivement, consolider leurs bases et
              avancer vers un niveau avancé à leur propre rythme.
            </p>

            <Button
              className="group mt-6 h-12 w-full bg-navy-950 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900"
              asChild
            >
              <a href="/commencer?plan=starter">
                Commencer avec Starter
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="mt-2.5 text-center text-xs text-slate-500">
              Pour celles et ceux qui veulent apprendre progressivement et
              construire des bases solides.
            </p>

            <div className="mt-7 border-t border-black/5 pt-6">
              <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-wider text-slate-400">
                Comment fonctionne Starter ?
              </p>
              <div className="grid grid-cols-2 gap-3">
                {STARTER_HOW_IT_WORKS.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={
                      reduceMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.08 }
                    }
                    className="rounded-xl bg-mist/60 p-3"
                  >
                    <span className="font-mono text-[0.65rem] font-bold text-gold-700">
                      {step.number}
                    </span>
                    <p className="mt-1 text-xs font-medium text-navy-950">{step.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <ul className="mt-7 space-y-2.5 border-t border-black/5 pt-6">
              {STARTER_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-700" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PRO */}
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1 }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="relative overflow-hidden rounded-3xl border border-gold-400/25 bg-navy-950 p-7 shadow-[0_30px_70px_-20px_rgba(10,15,30,0.5)] transition-shadow duration-300 hover:shadow-[0_35px_80px_-15px_rgba(10,15,30,0.55)] sm:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
            />
            <span className="absolute right-6 top-6 rounded-full bg-gold-400 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-navy-950">
              Le plus complet
            </span>

            <span className="relative inline-flex items-center rounded-full bg-gold-400/15 px-3.5 py-1.5 text-xs font-semibold text-gold-400">
              💎 Pour les professionnels
            </span>
            <p className="relative mt-2.5 inline-block rounded-full border border-gold-400/30 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wide text-gold-400">
              Recommandé pour les objectifs professionnels
            </p>

            <h2 className="relative mt-5 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Pro
            </h2>
            <p className="relative mt-1.5 text-base font-medium text-gold-400">
              Transformez votre anglais en compétence professionnelle.
            </p>

            <div className="relative mt-6 flex items-baseline gap-1.5">
              <span className="font-display text-4xl font-extrabold tracking-tight text-white">
                210 000 F CFA
              </span>
              <span className="text-sm text-white/50">/ mois</span>
            </div>

            <p className="relative mt-5 text-sm leading-relaxed text-white/70">
              Pro s&apos;adresse aux personnes qui possèdent déjà une base
              solide en anglais et souhaitent développer leur communication
              professionnelle, gagner en assurance et évoluer efficacement
              dans un environnement international.
            </p>

            <Button
              className="group relative mt-6 h-12 w-full bg-gold-600 text-sm font-semibold text-navy-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-500"
              asChild
            >
              <a href="/commencer?plan=pro">
                Rejoindre Pro
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="relative mt-2.5 text-center text-xs text-white/50">
              Pour celles et ceux qui veulent faire de l&apos;anglais un
              véritable avantage professionnel.
            </p>

            <div className="relative mt-7 rounded-2xl border border-gold-400/20 bg-white/[0.05] p-5">
              <p className="text-sm font-bold text-white">
                Plus qu&apos;une formation d&apos;anglais.
              </p>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-white/60">
                Pro est conçu pour les personnes qui souhaitent utiliser
                l&apos;anglais dans des contextes professionnels réels :
                réunions, entretiens, présentations, négociations,
                communication internationale et examens standardisés.
              </p>
            </div>

            <ul className="relative mt-7 space-y-2.5 border-t border-white/10 pt-6">
              {PRO_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}