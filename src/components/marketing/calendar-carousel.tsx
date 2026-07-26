"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CALENDAR_SLIDES } from "@/lib/calendar-slides";
import { CalendarSlideCard } from "@/components/marketing/calendar-slide-card";

const AUTOPLAY_DELAY = 5000;
const SWIPE_THRESHOLD = 60;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    scale: 0.98,
  }),
};

export function CalendarCarousel() {
  const reduceMotion = useReducedMotion();
  const total = CALENDAR_SLIDES.length;

  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Autoplay désactivé pour les personnes qui préfèrent réduire les animations
  // un carrousel qui défile tout seul est une source connue de gêne (WCAG 2.2.2).
  const autoplayEnabled = !reduceMotion;
  const isPaused = isHovering || isDragging || !autoplayEnabled;

  const goTo = useCallback(
    (nextIndex: number, dir: number) => {
      setSlide([(nextIndex + total) % total, dir]);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Cycle d'autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => goNext(), AUTOPLAY_DELAY);
    return () => clearTimeout(timer);
  }, [index, isPaused, goNext]);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      goNext();
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      goPrev();
    }
    // Petit délai avant de laisser l'auto-play reprendre, pour ne pas "arracher"
    // le slide des mains de l'utilisateur juste après son geste.
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsDragging(false), 500);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carrousel"
      aria-label="Exemples de calendriers de formation"
      tabIndex={0}
    >
      {/* Barre supérieure : index + progression + navigation manuelle */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="font-mono text-xs font-medium tabular-nums text-slate-500">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>

        <div className="h-1 flex-1 overflow-hidden rounded-full bg-mist">
          {!reduceMotion ? (
            <div
              key={`${index}-${isPaused}`}
              className="h-full rounded-full bg-gold-600"
              style={{
                animationName: "calendar-carousel-progress",
                animationDuration: `${AUTOPLAY_DELAY}ms`,
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
                animationPlayState: isPaused ? "paused" : "running",
              }}
            />
          ) : (
            <div className="h-full w-full rounded-full bg-gold-600/40" />
          )}
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Calendrier précédent"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-slate-500 transition-colors hover:border-navy-950/20 hover:text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-700/50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Calendrier suivant"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-slate-500 transition-colors hover:border-navy-950/20 hover:text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-700/50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Viewport du slide actif */}
      <div className="relative h-[420px] overflow-hidden sm:h-[380px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={CALENDAR_SLIDES[index].id}
            custom={direction}
            variants={reduceMotion ? undefined : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.35}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <CalendarSlideCard slide={CALENDAR_SLIDES[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Titre + badge du slide actif, sous la carte */}
      <div className="mt-6 text-center">
        <span className="inline-flex items-center rounded-full border border-gold-700/25 bg-gold-50 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-gold-700">
          {CALENDAR_SLIDES[index].badge}
        </span>
        <p className="mx-auto mt-3 max-w-lg font-display text-lg font-bold text-navy-950">
          {CALENDAR_SLIDES[index].title}
        </p>
      </div>
    </div>
  );
}