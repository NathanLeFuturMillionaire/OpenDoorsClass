"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/marketing/tilt-card";
import { FeatureItem } from "@/components/marketing/feature-item";
import { PathTimeline } from "@/components/marketing/path-timeline";
import { STARTER_STEPS, STARTER_FEATURES, PRO_STEPS, PRO_FEATURES } from "@/lib/paths-content";

export function StarterPathCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="rounded-3xl border border-black/5 bg-white p-7 shadow-[0_25px_60px_-25px_rgba(10,15,30,0.25)] sm:p-9">
        <span className="inline-flex items-center rounded-full bg-mist px-3.5 py-1.5 text-xs font-semibold text-navy-950">
          🌱 Pour commencer
        </span>
        <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          Starter
        </h3>
        <p className="mt-1.5 text-base font-medium text-gold-700">
          Construisez votre anglais, étape par étape.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Starter est conçu pour celles et ceux qui souhaitent apprendre
          l&apos;anglais progressivement, consolider leurs bases et avancer
          vers un niveau avancé à leur propre rythme.
        </p>

        <div className="mt-7 border-t border-black/5 pt-6">
          <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-wider text-slate-400">
            Comment fonctionne Starter ?
          </p>
          <PathTimeline steps={STARTER_STEPS} tone="light" />
        </div>

        <div className="mt-7 space-y-2">
          {STARTER_FEATURES.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} tone="light" />
          ))}
        </div>

        <div className="mt-7 rounded-2xl bg-mist/70 p-5">
          <p className="text-sm font-semibold text-navy-950">
            Vous voulez construire votre anglais progressivement ?
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
            Starter vous donne les outils, le parcours et la liberté
            nécessaires pour avancer étape par étape.
          </p>
          <Button
            className="group mt-4 h-11 bg-navy-950 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900"
            asChild
          >
            <a href="/pricing">
              Découvrir Starter
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function ProPathCard() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
      }
    >
      <TiltCard className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-navy-950 p-7 shadow-[0_35px_70px_-20px_rgba(10,15,30,0.5)] sm:p-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
        />

        <span className="relative inline-flex items-center rounded-full bg-gold-400/15 px-3.5 py-1.5 text-xs font-semibold text-gold-400">
          💎 Pour les professionnels
        </span>
        <h3 className="relative mt-5 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
          Pro
        </h3>
        <p className="relative mt-1.5 text-base font-medium text-gold-400">
          Transformez votre anglais en compétence professionnelle.
        </p>
        <p className="relative mt-4 text-sm leading-relaxed text-white/70">
          Pro s&apos;adresse aux personnes qui possèdent déjà une base
          solide en anglais et souhaitent développer une communication
          professionnelle, gagner en assurance et évoluer efficacement dans
          un environnement international.
        </p>

        <div className="relative mt-7 border-t border-white/10 pt-6">
          <p className="mb-4 font-mono text-[0.7rem] uppercase tracking-wider text-white/40">
            Comment fonctionne Pro ?
          </p>
          <PathTimeline steps={PRO_STEPS} tone="dark" />
        </div>

        <div className="relative mt-7 space-y-2">
          {PRO_FEATURES.map((feature) => (
            <FeatureItem key={feature.title} feature={feature} tone="dark" />
          ))}
        </div>

        <div className="relative mt-7 rounded-2xl bg-white/[0.06] p-5">
          <p className="text-sm font-semibold text-white">
            Vous voulez faire de l&apos;anglais un véritable avantage
            professionnel ?
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/60">
            Pro vous aide à passer de la connaissance de l&apos;anglais à sa
            maîtrise dans des situations professionnelles réelles.
          </p>
          <Button
            className="group mt-4 h-11 bg-gold-600 px-5 text-sm font-semibold text-navy-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-500"
            asChild
          >
            <a href="/pricing">
              Découvrir Pro
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </TiltCard>
    </motion.div>
  );
}