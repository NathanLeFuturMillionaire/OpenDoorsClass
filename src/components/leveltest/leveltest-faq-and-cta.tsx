"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LEVELTEST_FAQ } from "@/lib/leveltest-content";

export function LevelTestFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
          Questions fréquentes
        </h2>

        <div className="mt-10 space-y-3">
          {LEVELTEST_FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-black/5 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-700/50"
                >
                  <span className="text-sm font-semibold text-navy-950">{item.question}</span>
                  <Plus
                    className={`h-4 w-4 shrink-0 text-gold-700 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm leading-relaxed text-slate-600">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LevelTestFinalCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
        className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8"
      >
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Prêt à découvrir où vous en êtes ?
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Commencez votre parcours OpenDoorsClass en découvrant votre niveau
          d&apos;anglais.
        </p>
        <Button
          size="lg"
          className="group mt-8 h-12 bg-navy-950 px-6 text-[0.95rem] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-lg"
          asChild
        >
          <a href="/leveltest/start">
            Commencer mon test
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Button>
        <p className="mt-3 text-sm text-slate-500">
          Quelques minutes peuvent changer votre façon de voir votre
          progression.
        </p>
      </motion.div>
    </section>
  );
}