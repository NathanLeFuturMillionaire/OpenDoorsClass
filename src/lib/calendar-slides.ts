export type ScheduleCategory = "grammar" | "speaking" | "vocabulary" | "practice";

export interface ScheduleSession {
  day: string;
  time: string;
  subject: string;
  category: ScheduleCategory;
}

export type CalendarSlideVariant =
  | "weekly"
  | "availability"
  | "progress"
  | "punctuality";

export interface CalendarSlide {
  id: string;
  badge: string;
  title: string;
  variant: CalendarSlideVariant;

  // "weekly"
  sessions?: ScheduleSession[];
  weeklyHours?: string;

  // "availability"
  availabilityDays?: { day: string; available: boolean }[];
  sessionLength?: string;
  sessionsPerWeek?: string;
  availabilityNote?: string;

  // "progress"
  weeks?: { label: string; done: boolean }[];
  weeklyLoad?: string;
  regularityNote?: string;

  // "punctuality"
  todaySession?: ScheduleSession;
  punctualityMessage?: string;
  punctualityNote?: string;
  highlightQuote?: string;
}

export const CATEGORY_LABELS: Record<ScheduleCategory, string> = {
  grammar: "Grammar",
  speaking: "Speaking",
  vocabulary: "Vocabulary",
  practice: "Practice",
};

// Palette volontairement restreinte : on reste sur navy / gold / mist,
// juste avec des dosages différents selon la catégorie.
export const CATEGORY_STYLES: Record<ScheduleCategory, string> = {
  grammar: "bg-navy-950/[0.06] text-navy-950",
  speaking: "bg-gold-600/10 text-gold-700",
  vocabulary: "bg-slate-500/10 text-slate-600",
  practice: "bg-mist text-slate-600",
};

export const CALENDAR_SLIDES: CalendarSlide[] = [
  {
    id: "hebdomadaire",
    badge: "Planning hebdomadaire",
    title: "3 rendez-vous pour faire progresser votre anglais",
    variant: "weekly",
    weeklyHours: "6 heures de formation / semaine",
    sessions: [
      { day: "Lundi", time: "18:00 → 20:00", subject: "English Grammar", category: "grammar" },
      { day: "Mercredi", time: "18:00 → 20:00", subject: "Speaking & Conversation", category: "speaking" },
      { day: "Samedi", time: "10:00 → 12:00", subject: "Vocabulary & Practice", category: "vocabulary" },
    ],
  },
  {
    id: "personnalise",
    badge: "Planning personnalisé",
    title: "Vos disponibilités deviennent votre calendrier d'apprentissage",
    variant: "availability",
    sessionLength: "2h par séance",
    sessionsPerWeek: "3 séances / semaine",
    availabilityDays: [
      { day: "Lundi", available: true },
      { day: "Mardi", available: false },
      { day: "Mercredi", available: true },
      { day: "Jeudi", available: false },
      { day: "Vendredi", available: true },
      { day: "Samedi", available: false },
      { day: "Dimanche", available: false },
    ],
    availabilityNote:
      "Nous construisons votre planning autour de vos disponibilités afin de vous permettre de suivre votre formation avec régularité.",
  },
  {
    id: "regularite",
    badge: "Progression régulière",
    title: "Chaque séance vous rapproche de votre objectif",
    variant: "progress",
    weeklyLoad: "3 séances × 2h = 6h de formation chaque semaine",
    weeks: [
      { label: "Semaine 01", done: true },
      { label: "Semaine 02", done: true },
      { label: "Semaine 03", done: true },
      { label: "Semaine 04", done: false },
    ],
    regularityNote:
      "La régularité permet de transformer les connaissances acquises en automatismes. Chaque rendez-vous compte.",
  },
  {
    id: "ponctualite",
    badge: "Une règle essentielle",
    title: "Respecter vos horaires, c'est respecter votre progression.",
    variant: "punctuality",
    todaySession: {
      day: "Aujourd'hui",
      time: "18:00 — 20:00",
      subject: "English Speaking Session",
      category: "speaking",
    },
    punctualityMessage: "Le respect des horaires est essentiel à votre progression.",
    punctualityNote:
      "Une séance de deux heures est un véritable rendez-vous pédagogique. Arriver à l'heure permet de profiter pleinement de la séance, de ne pas perturber le déroulement du cours et de maintenir une progression régulière.",
    highlightQuote: "Votre temps compte. Celui de votre coach aussi.",
  },
];