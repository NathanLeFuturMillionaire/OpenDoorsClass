"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden bg-navy-950 text-white"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-center text-[0.8rem] sm:text-sm">
            <p className="text-white/85">
              <span aria-hidden="true">🌍</span> OpenDoorsClass accueille des
              étudiants du monde entier. Paiements sécurisés via Mobile Money
              et cartes bancaires en toute sérénité.
            </p>
            <a
              href="/a-propos"
              className="hidden shrink-0 font-medium text-gold-400 underline-offset-4 hover:underline sm:inline"
            >
              En savoir plus
            </a>
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Fermer la bannière"
              className="ml-1 shrink-0 rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}