"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Lock, Target, BarChart3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LEVELTEST_PLANS, getPlanPricing, type LevelTestPlan } from "@/lib/leveltest-plans";

function PlanCard({ plan, emphasis }: { plan: LevelTestPlan; emphasis?: "angel" | "god" }) {
  const reduceMotion = useReducedMotion();
  const { basePrice, fee, total } = getPlanPricing(plan);
  const isFree = plan.id === "free";
  const isGod = emphasis === "god";
  const isAngel = emphasis === "angel";

  // Lien vers le flux de paiement/crédits existant. La logique réelle
  // (userId, offre, montant, crédits, référence produit → Chariow/Moneroo)
  // se branche ici une fois le système de crédits/auth disponible.
  const ctaHref = isFree
    ? "/leveltest/start?plan=free"
    : `/leveltest/checkout?plan=${plan.id}`;

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.55 }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-[0_20px_50px_-28px_rgba(10,15,30,0.25)] transition-shadow duration-300 hover:shadow-[0_25px_55px_-20px_rgba(10,15,30,0.3)] sm:p-7 ${
        isGod
          ? "border-gold-400/25 bg-navy-950"
          : isAngel
            ? "border-gold-600/30 bg-white"
            : "border-black/5 bg-white"
      }`}
    >
      {plan.secondaryBadge && (
        <span className="absolute right-5 top-5 rounded-full bg-gold-400 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-navy-950">
          {plan.secondaryBadge}
        </span>
      )}

      <span
        className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide ${
          isGod ? "bg-gold-400/15 text-gold-400" : "bg-mist text-navy-950"
        }`}
      >
        {plan.badge}
      </span>

      <h3
        className={`mt-4 font-display text-2xl font-extrabold tracking-tight ${
          isGod ? "text-white" : "text-navy-950"
        }`}
      >
        {plan.name}
      </h3>

      {/* Prix */}
      <div className="mt-4">
        {isFree ? (
          <p className={`font-display text-3xl font-extrabold ${isGod ? "text-white" : "text-navy-950"}`}>
            0 F CFA
          </p>
        ) : (
          <>
            <p className={`font-display text-3xl font-extrabold ${isGod ? "text-white" : "text-navy-950"}`}>
              {total.toLocaleString("fr-FR")} F CFA
            </p>
            <p className={`mt-1 text-xs ${isGod ? "text-white/50" : "text-slate-500"}`}>
              {basePrice.toLocaleString("fr-FR")} F CFA + 15&nbsp;% de frais de paiement (
              {fee.toLocaleString("fr-FR")} F CFA)
            </p>
          </>
        )}
      </div>

      <p
        className={`mt-4 rounded-lg px-3 py-2 text-center text-xs font-semibold ${
          isGod ? "bg-white/10 text-gold-400" : "bg-gold-50 text-gold-700"
        }`}
      >
        {plan.credits} · {plan.skillsCount} compétence{plan.skillsCount > 1 ? "s" : ""} évaluée
        {plan.skillsCount > 1 ? "s" : ""}
      </p>

      <ul className="mt-5 flex-1 space-y-2">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-2 text-[0.83rem] ${
              isGod ? "text-white/75" : "text-slate-600"
            }`}
          >
            <Check
              className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                isGod ? "text-gold-400" : "text-gold-700"
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>

      <p
        className={`mt-5 border-t pt-4 text-xs italic ${
          isGod ? "border-white/10 text-white/50" : "border-black/5 text-slate-500"
        }`}
      >
        {plan.positioning}
      </p>

      <Button
        className={`mt-5 h-11 w-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
          isGod
            ? "bg-gold-600 text-navy-950 hover:bg-gold-500"
            : isAngel
              ? "bg-navy-950 text-white hover:bg-navy-900"
              : "bg-mist text-navy-950 hover:bg-mist/70"
        }`}
        asChild
      >
        <a href={ctaHref}>{plan.ctaLabel}</a>
      </Button>
    </motion.div>
  );
}

const TRUST_POINTS = [
  { icon: Target, label: "Mesurez vos compétences" },
  { icon: BarChart3, label: "Comprenez vos résultats" },
  { icon: Rocket, label: "Identifiez votre prochaine étape" },
];

export function LevelTestPricingSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/30 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Choisissez votre niveau d&apos;évaluation
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Commencez gratuitement ou choisissez une évaluation plus
            approfondie pour obtenir une vision plus complète de votre
            niveau d&apos;anglais.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Chaque formule a été pensée pour répondre à un besoin différent.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          <PlanCard plan={LEVELTEST_PLANS[0]} />
          <PlanCard plan={LEVELTEST_PLANS[1]} emphasis="angel" />
          <PlanCard plan={LEVELTEST_PLANS[2]} emphasis="god" />
        </div>

        {/* Explication des crédits */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
          className="mx-auto mt-14 max-w-2xl rounded-2xl border border-black/5 bg-white p-6 text-center"
        >
          <p className="font-display text-base font-bold text-navy-950">
            Comment fonctionnent les crédits ?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Les crédits permettent d&apos;accéder aux évaluations disponibles
            sur OpenDoorsClass Level Test. Votre solde est associé à votre
            compte et peut être consulté depuis votre espace personnel.
          </p>
        </motion.div>

        {/* Transparence sur les frais */}
        <div className="mx-auto mt-6 max-w-2xl text-center">
          {/* <p className="text-xs leading-relaxed text-slate-500">
            Les frais de paiement de 15&nbsp;% sont inclus dans le montant affiché au
            candidat.
          </p> */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500">
            <Lock className="h-3.5 w-3.5" />
            Paiement sécurisé
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Airtel Money • Mobile Money • Carte bancaire • autres moyens
            disponibles selon votre pays
          </p>
        </div>

        {/* Message de confiance */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          <p className="col-span-full text-center font-display text-base font-semibold text-navy-950">
            Un test adapté à votre objectif.
          </p>
          {TRUST_POINTS.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-50">
                  <Icon className="h-4 w-4 text-gold-700" />
                </div>
                <span className="text-xs font-medium text-slate-600">{point.label}</span>
              </div>
            );
          })}
        </div>

        {/* Transition vers la FAQ */}
        <p className="mx-auto mt-14 max-w-lg text-center font-display text-lg font-semibold text-navy-950">
          Vous avez encore des questions ?
          <span className="mt-1 block text-base font-medium text-slate-500">
            Découvrez les réponses aux questions les plus fréquentes sur le
            Level Test OpenDoorsClass.
          </span>
        </p>
      </div>
    </section>
  );
}