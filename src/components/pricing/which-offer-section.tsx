"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhichOfferSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          Vous hésitez encore ?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
            className="rounded-2xl border border-black/5 bg-white p-6"
          >
            <p className="font-display text-lg font-bold text-navy-950">
              &laquo; Je veux apprendre l&apos;anglais progressivement. &raquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Vous souhaitez partir des bases, progresser étape par étape et
              apprendre à votre propre rythme.
            </p>
            <Button
              className="group mt-5 h-11 w-full bg-navy-950 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900"
              asChild
            >
              <a href="/start?plan=starter">
                Je choisis Starter
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-gold-400/25 bg-navy-950 p-6"
          >
            <p className="font-display text-lg font-bold text-white">
              &laquo; Je veux utiliser l&apos;anglais professionnellement. &raquo;
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Vous avez déjà une base et souhaitez développer votre
              communication professionnelle, préparer des examens ou
              évoluer dans un environnement international.
            </p>
            <Button
              className="group mt-5 h-11 w-full bg-gold-600 text-sm font-semibold text-navy-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-500"
              asChild
            >
              <a href="/start?plan=pro">
                Je choisis Pro
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}