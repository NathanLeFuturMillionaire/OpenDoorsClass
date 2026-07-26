"use client";

import { motion, useReducedMotion } from "framer-motion";

interface QuoteSectionProps {
  quote: string;
  author?: string;
  tone?: "light" | "dark";
}

export function QuoteSection({ quote, author, tone = "light" }: QuoteSectionProps) {
  const reduceMotion = useReducedMotion();
  const isDark = tone === "dark";

  return (
    <section className={isDark ? "bg-navy-950 py-20 sm:py-28" : "bg-mist/50 py-20 sm:py-28"}>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.blockquote
          initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`font-display text-2xl font-bold leading-snug tracking-tight sm:text-[1.85rem] ${
            isDark ? "text-white" : "text-navy-950"
          }`}
        >
          &ldquo;{quote}&rdquo;
        </motion.blockquote>
        {author && (
          <motion.p
            initial={reduceMotion ? undefined : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
            className={`mt-6 font-mono text-sm ${isDark ? "text-gold-400" : "text-gold-700"}`}
          >
            - {author}
          </motion.p>
        )}
      </div>
    </section>
  );
}