"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function FounderSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        {/* Photo */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:mx-0"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gold-100/50 blur-2xl"
          />
          <div className="overflow-hidden rounded-3xl border border-white/60 shadow-[0_30px_60px_-20px_rgba(10,15,30,0.3)]">
            <Image
              src="/images/about/founder-nathan.png"
              alt="Portrait de MAYUKWA Nathan Harysthote, fondateur d'OpenDoorsClass"
              width={640}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Identité + bio */}
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
            MAYUKWA Nathan Harysthote
          </h2>
          <p className="mt-1 font-display text-lg font-semibold text-gold-700">
            aka Mister Nathan
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-wider text-slate-500">
            Founder of OpenDoorsClass · English Coach &amp; Language Enthusiast
          </p>

          <div className="mt-7 space-y-4 text-[0.95rem] leading-relaxed text-slate-600">
            <p>
              I have always been deeply passionate about the English
              language, learning it, practising it, and most of all,
              passing it on. There is something I genuinely love about
              teaching: giving others what I have learned, and encouraging
              people who believe they simply &ldquo;are not capable&rdquo; of
              learning English.
            </p>
            <p>
              To me, English was never just a school subject. It is a
              communication tool. A professional tool. A door to the world.
              OpenDoorsClass was born directly from that belief.
            </p>
            <p>
              This project represents something bigger than a simple course
              website. It is meant to be an environment where every student
              is supported, encouraged, and pushed to keep progressing,
              one real conversation at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}