"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { PathFeature } from "@/lib/paths-content";

interface FeatureItemProps {
  feature: PathFeature;
  tone?: "light" | "dark";
}

export function FeatureItem({ feature, tone = "light" }: FeatureItemProps) {
  const [open, setOpen] = useState(false);
  const Icon = feature.icon;
  const isDark = tone === "dark";

  return (
    <div
      className={`group rounded-xl border px-4 py-3.5 transition-colors duration-200 ${
        isDark
          ? "border-white/10 hover:bg-white/[0.05]"
          : "border-black/5 hover:bg-mist/60"
      }`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 text-left"
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
            isDark ? "bg-gold-400/15" : "bg-gold-50"
          }`}
        >
          <Icon className={`h-4 w-4 ${isDark ? "text-gold-400" : "text-gold-700"}`} />
        </span>
        <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-navy-950"}`}>
          {feature.title}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className={`mt-2.5 pl-11 text-[0.83rem] leading-relaxed ${
                isDark ? "text-white/60" : "text-slate-500"
              }`}
            >
              {feature.description}
            </p>
            {feature.tags && (
              <div className="mt-2.5 flex flex-wrap gap-1.5 pl-11">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-2.5 py-0.5 text-[0.7rem] font-medium ${
                      isDark ? "bg-white/10 text-white/70" : "bg-mist text-slate-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}