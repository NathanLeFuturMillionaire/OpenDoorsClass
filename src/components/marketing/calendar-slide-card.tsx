"use client";

import { motion } from "framer-motion";
import { Clock, Check, CalendarDays, Flame } from "lucide-react";
import {
  CALENDAR_SLIDES,
  CATEGORY_LABELS,
  CATEGORY_STYLES,
  type CalendarSlide,
} from "@/lib/calendar-slides";

interface CalendarSlideCardProps {
  slide: CalendarSlide;
}

export function CalendarSlideCard({ slide }: CalendarSlideCardProps) {
  switch (slide.variant) {
    case "weekly":
      return <WeeklyCard slide={slide} />;
    case "availability":
      return <AvailabilityCard slide={slide} />;
    case "progress":
      return <ProgressCard slide={slide} />;
    case "punctuality":
      return <PunctualityCard slide={slide} />;
  }
}

const cardBase =
  "h-full w-full rounded-2xl border border-black/5 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(10,15,30,0.18)] sm:p-8";

function WeeklyCard({ slide }: CalendarSlideCardProps) {
  return (
    <div className={cardBase}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-slate-500">
          <CalendarDays className="h-3.5 w-3.5" />
          Cette semaine
        </div>
        {slide.weeklyHours && (
          <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
            {slide.weeklyHours}
          </span>
        )}
      </div>

      <div className="mt-6 space-y-3">
        {slide.sessions?.map((session, i) => (
          <motion.div
            key={session.day}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
            className="flex items-center justify-between rounded-xl border border-black/5 bg-paper px-4 py-3.5"
          >
            <div>
              <p className="text-sm font-semibold text-navy-950">{session.day}</p>
              <p className="mt-0.5 text-xs text-slate-500">{session.time}</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-[0.7rem] font-medium ${CATEGORY_STYLES[session.category]}`}
            >
              {session.subject}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AvailabilityCard({ slide }: CalendarSlideCardProps) {
  return (
    <div className={cardBase}>
      <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-slate-500">
        <CalendarDays className="h-3.5 w-3.5" />
        Vos disponibilités
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1.5 sm:gap-2">
        {slide.availabilityDays?.map((item, i) => (
          <div key={item.day} className="flex flex-col items-center gap-2">
            <span className="hidden text-[0.65rem] text-slate-400 sm:block">
              {item.day.slice(0, 3)}
            </span>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              className={`flex h-9 w-9 items-center justify-center rounded-lg sm:h-11 sm:w-11 ${
                item.available ? "bg-navy-950" : "bg-mist"
              }`}
            >
              {item.available && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.35 + i * 0.08 }}
                >
                  <Check className="h-4 w-4 text-gold-400" />
                </motion.div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {slide.sessionLength && (
          <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-slate-600">
            {slide.sessionLength}
          </span>
        )}
        {slide.sessionsPerWeek && (
          <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
            {slide.sessionsPerWeek}
          </span>
        )}
      </div>

      {slide.availabilityNote && (
        <p className="mt-5 text-sm leading-relaxed text-slate-500">{slide.availabilityNote}</p>
      )}
    </div>
  );
}

function ProgressCard({ slide }: CalendarSlideCardProps) {
  const total = slide.weeks?.length ?? 1;
  const doneCount = slide.weeks?.filter((w) => w.done).length ?? 0;
  const ratio = doneCount / total;

  return (
    <div className={cardBase}>
      <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-slate-500">
        <Flame className="h-3.5 w-3.5" />
        Suivi mensuel
      </div>

      <div className="mt-6 space-y-3">
        {slide.weeks?.map((week, i) => (
          <motion.div
            key={week.label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + i * 0.1 }}
            className="flex items-center justify-between rounded-xl border border-black/5 bg-paper px-4 py-3"
          >
            <span className="text-sm font-medium text-navy-950">{week.label}</span>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                week.done ? "bg-gold-600" : "bg-mist"
              }`}
            >
              {week.done && <Check className="h-3.5 w-3.5 text-white" />}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Ligne de progression globale */}
      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-mist">
        <motion.div
          className="h-full rounded-full bg-gold-600"
          initial={{ width: 0 }}
          animate={{ width: `${ratio * 100}%` }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        />
      </div>

      {slide.weeklyLoad && (
        <p className="mt-5 text-sm font-semibold text-navy-950">{slide.weeklyLoad}</p>
      )}
      {slide.regularityNote && (
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{slide.regularityNote}</p>
      )}
    </div>
  );
}

function PunctualityCard({ slide }: CalendarSlideCardProps) {
  const session = slide.todaySession;
  return (
    <div className={`${cardBase} bg-navy-950 text-white`}>
      <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-white/50">
        <Clock className="h-3.5 w-3.5" />
        Prochain rendez-vous
      </div>

      {session && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-5"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-gold-400">
            {session.day}
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight">{session.time}</p>
          <p className="mt-1.5 text-sm text-white/70">{session.subject}</p>
        </motion.div>
      )}

      {slide.punctualityMessage && (
        <p className="mt-6 text-[0.95rem] font-semibold leading-snug">
          {slide.punctualityMessage}
        </p>
      )}
      {slide.punctualityNote && (
        <p className="mt-3 text-sm leading-relaxed text-white/60">{slide.punctualityNote}</p>
      )}

      {slide.highlightQuote && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-5 border-t border-white/10 pt-4 text-sm font-medium text-gold-400"
        >
          {slide.highlightQuote}
        </motion.p>
      )}
    </div>
  );
}

// Ré-export pratique pour les tests/Storybook éventuels
export { CALENDAR_SLIDES };