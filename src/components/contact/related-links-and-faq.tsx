"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { RELATED_LINKS, CONTACT_FAQ } from "@/lib/contact-content";

export function RelatedLinksSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-xl font-bold text-navy-950 sm:text-2xl">
          Vous cherchez peut-être déjà votre réponse.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {RELATED_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.08 }
              }
              className="group flex items-center justify-between rounded-xl border border-black/5 bg-white px-4 py-3.5 text-sm font-medium text-navy-950 transition-colors duration-200 hover:border-gold-600/30 hover:bg-gold-50"
            >
              {link.label}
              <ArrowRight className="h-4 w-4 text-gold-700 transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-xl font-bold text-navy-950 sm:text-2xl">
          Quelques réponses avant de commencer
        </h2>
        <div className="mt-8 space-y-3">
          {CONTACT_FAQ.map((item, i) => {
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