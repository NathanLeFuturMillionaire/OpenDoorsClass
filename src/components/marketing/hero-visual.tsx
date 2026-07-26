"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Video, CalendarCheck2, Award, TrendingUp } from "lucide-react";

/**
 * Signature visuelle de la page : un "fil de progression" en pointillé doré qui relie
 * trois cartes (session en direct → calendrier structuré → certificat), matérialisant
 * la promesse de la marque : une méthode qui mène quelque part, pas à pas.
 */
export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const cardTransition = (delay: number) =>
    reduceMotion
      ? { duration: 0 }
      : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md sm:max-w-lg lg:max-w-none">
      {/* Fil de progression en fond */}
      <svg
        viewBox="0 0 400 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <motion.path
          d="M 70 120 C 160 160, 140 260, 230 290 C 300 312, 260 380, 320 410"
          fill="none"
          stroke="#B8924A"
          strokeWidth="2"
          strokeDasharray="1 9"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 1.6, delay: 0.3, ease: "easeInOut" }
          }
        />
      </svg>

      {/* Carte : session en direct */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={cardTransition(0.1)}
        className="absolute left-0 top-[8%] w-[62%] rounded-2xl border border-white/60 bg-white/90 p-4 shadow-[0_20px_45px_-15px_rgba(10,15,30,0.25)] backdrop-blur-sm sm:w-[58%]"
      >
        <div className="flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-wider text-green-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-600" />
          </span>
          <span className="font-mono">Cours en direct</span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-950">
            <Video className="h-4.5 w-4.5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-navy-950">Coaching oral</p>
            <p className="text-xs text-slate-500">avec Mister Nathan</p>
          </div>
        </div>
      </motion.div>

      {/* Carte : calendrier structuré */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={cardTransition(0.28)}
        className="absolute right-[4%] top-[34%] w-[64%] rounded-2xl border border-white/60 bg-white/90 p-4 shadow-[0_20px_45px_-15px_rgba(10,15,30,0.25)] backdrop-blur-sm sm:w-[60%]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-slate-500">
            <CalendarCheck2 className="h-3 w-3" />
            <span className="font-mono">Semaine 12 / 32</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-7 gap-1.5">
          {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-[0.6rem] text-slate-400">{day}</span>
              <div
                className={`h-6 w-full rounded-md ${
                  i < 5 ? "bg-navy-950/90" : "bg-mist"
                } ${i === 3 ? "ring-2 ring-gold-600 ring-offset-1" : ""}`}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Carte : certificat */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={cardTransition(0.46)}
        className="absolute bottom-[6%] left-[8%] w-[58%] rounded-2xl border border-white/60 bg-white/90 p-4 shadow-[0_20px_45px_-15px_rgba(10,15,30,0.25)] backdrop-blur-sm sm:w-[54%]"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-50">
            <Award className="h-4.5 w-4.5 text-gold-700" />
          </div>
          <div>
            <p className="text-sm font-semibold text-navy-950">Certificat B2</p>
            <p className="text-xs text-slate-500">Délivré après validation</p>
          </div>
        </div>
      </motion.div>

      {/* Badge flottant : statistiques */}
      <motion.div
        initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={cardTransition(0.6)}
        className="absolute right-0 top-0 flex items-center gap-2 rounded-full bg-navy-950 px-3.5 py-2 shadow-lg"
      >
        <TrendingUp className="h-3.5 w-3.5 text-gold-400" />
        <span className="text-xs font-semibold text-white">+40% de fluidité</span>
      </motion.div>
    </div>
  );
}