"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT_TOPICS } from "@/lib/contact-content";
import { buildWhatsAppLink, CONTACT_INFO } from "@/config/site";

export function ContactInfoColumn() {
  const reduceMotion = useReducedMotion();
  const whatsappHref = buildWhatsAppLink(
    "Salut OpenDoorsClass, je souhaite obtenir plus d'informations concernant vos formations.",
  );

  return (
    <div>
      <motion.h2
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5 }}
        className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl"
      >
        Une question ? Une idée ? Un objectif ?
      </motion.h2>
      <motion.p
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.1 }}
        className="mt-4 text-[0.95rem] leading-relaxed text-slate-600"
      >
        OpenDoorsClass est construit autour d&apos;une idée simple :
        apprendre une langue ne devrait jamais être un parcours solitaire.
        Si vous avez une question, besoin d&apos;une orientation ou
        simplement envie d&apos;échanger avec nous, vous pouvez nous
        écrire.
      </motion.p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CONTACT_TOPICS.map((topic, i) => {
          const Icon = topic.icon;
          return (
            <motion.div
              key={topic.title}
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.15 + i * 0.08 }
              }
              whileHover={reduceMotion ? undefined : { y: -3 }}
              className="rounded-xl border border-black/5 bg-white p-4 shadow-[0_10px_30px_-22px_rgba(10,15,30,0.25)] transition-shadow duration-300 hover:shadow-[0_14px_35px_-18px_rgba(10,15,30,0.3)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-50">
                <Icon className="h-4 w-4 text-gold-700" />
              </div>
              <p className="mt-3 text-sm font-bold text-navy-950">{topic.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {topic.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* WhatsApp */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.4 }}
        className="mt-8 rounded-2xl border border-black/5 bg-mist/60 p-5"
      >
        <p className="text-sm font-semibold text-navy-950">
          Vous préférez nous contacter directement ?
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          <MessageCircle className="h-4 w-4" />
          Discuter sur WhatsApp
        </a>
        <p className="mt-2 text-xs text-slate-500">{CONTACT_INFO.whatsappDisplay}</p>
      </motion.div>

      <p className="mt-10 font-mono text-xs uppercase tracking-wider text-slate-400">
        OpenDoorsClass - Learn. Practice. Grow.
      </p>
    </div>
  );
}