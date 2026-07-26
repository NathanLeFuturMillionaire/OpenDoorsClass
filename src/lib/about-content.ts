import {
  Repeat2,
  MessagesSquare,
  UserRoundCheck,
  Sparkle,
  CalendarClock,
  Dumbbell,
  type LucideIcon,
} from "lucide-react";

export interface PhilosophyPillar {
  number: string;
  title: string;
  quote: string;
  description: string;
  icon: LucideIcon;
}

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    number: "01",
    title: "Practice",
    quote: "Knowledge becomes useful when you can use it.",
    description:
      "Reading rules is not the same as using them. Every lesson is built around real practice, not passive memorisation.",
    icon: Dumbbell,
  },
  {
    number: "02",
    title: "Consistency",
    quote: "Small progress, repeated consistently, becomes transformation.",
    description:
      "One brilliant session means little on its own. Showing up week after week is what actually changes how you speak.",
    icon: Repeat2,
  },
  {
    number: "03",
    title: "Real Communication",
    quote: "English is meant to be spoken, not simply studied.",
    description:
      "Conversations, real situations, real hesitations that is where fluency is actually built.",
    icon: MessagesSquare,
  },
  {
    number: "04",
    title: "Coaching",
    quote: "Having someone who guides you can completely change your learning journey.",
    description:
      "A coach notices what you cannot see yet: the pattern behind your mistakes, and the fastest way through them.",
    icon: UserRoundCheck,
  },
  {
    number: "05",
    title: "Confidence",
    quote: "Your English should give you confidence, not fear.",
    description:
      "The goal was never to make you sound perfect. It was to make you feel capable of speaking at all.",
    icon: Sparkle,
  },
  {
    number: "06",
    title: "Discipline",
    quote: "Progress requires commitment.",
    description:
      "This is why OpenDoorsClass is built around a structured calendar discipline is part of the method, not an afterthought.",
    icon: CalendarClock,
  },
];

export const FEELING_WORDS = [
  "Confidence",
  "Clarity",
  "Discipline",
  "Courage",
  "Communication",
  "Opportunity",
  "Growth",
];

export interface JourneyStep {
  label: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { label: "Discover" },
  { label: "Learn" },
  { label: "Practice" },
  { label: "Improve" },
  { label: "Speak" },
  { label: "Open Doors" },
];