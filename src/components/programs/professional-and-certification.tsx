"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFESSIONAL_TOPICS } from "@/lib/programs-content";

export function ProfessionalEnglishSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            English for professionals
          </h2>
          <p className="mt-3 text-lg font-medium text-gold-700">
            Go beyond everyday English.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-slate-600">
            For professionals, English is not simply another language. It
            can become a critical communication skill.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {PROFESSIONAL_TOPICS.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-medium text-navy-950 shadow-sm"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="group h-12 bg-navy-950 px-6 text-[0.95rem] font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-lg"
            asChild
          >
            <a href="/offres#professionnel">
              Explore professional training
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CertificationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-navy-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Finish the journey. Earn your certificate.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            At the end of the learning journey, students can demonstrate
            the skills they have developed through a final assessment.
          </p>
        </div>

        {/* Représentation visuelle du certificat — marketing uniquement */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-lg rounded-2xl border-2 border-gold-400/40 bg-paper p-8 text-center shadow-[0_30px_70px_-20px_rgba(0,0,0,0.4)] sm:p-10"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-50">
            <Award className="h-6 w-6 text-gold-700" />
          </div>
          <p className="mt-4 font-display text-lg font-extrabold tracking-tight text-navy-950">
            OpenDoorsClass
          </p>
          <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-gold-700">
            Certificate of Completion
          </p>

          <div className="my-6 h-px bg-black/10" />

          <p className="text-xs uppercase tracking-wide text-slate-400">Student Name</p>
          <p className="mt-1 font-display text-xl font-bold text-navy-950">— — — — — —</p>

          <div className="mt-5 grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Program</p>
              <p className="mt-1 text-sm font-medium text-navy-950">English - 8 Months</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Date</p>
              <p className="mt-1 text-sm font-medium text-navy-950">— — / — — / — —</p>
            </div>
          </div>

          <div className="mt-6 border-t border-black/10 pt-4">
            <p className="text-xs uppercase tracking-wide text-slate-400">Signature</p>
            <p className="mt-1 font-display text-sm italic text-slate-500">OpenDoorsClass</p>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            variant="outline"
            className="h-12 border-white/20 bg-transparent px-6 text-[0.95rem] font-semibold text-white hover:bg-white/10"
            asChild
          >
            <a href="/offres">See certification</a>
          </Button>
        </div>
      </div>
    </section>
  );
}