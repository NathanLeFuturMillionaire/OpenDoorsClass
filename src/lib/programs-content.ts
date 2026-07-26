import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Dumbbell,
  MessageCircle,
  TrendingUp,
  Plane,
  Briefcase,
  Phone,
  Users,
  Presentation,
  MessagesSquare,
  GraduationCap,
  Globe2,
  Heart,
  Landmark,
  Ear,
  PenLine,
  Mic2,
  BadgeCheck,
} from "lucide-react";

/* 3. More than lessons */
export interface LearningStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
}

export const LEARNING_STEPS: LearningStep[] = [
  {
    number: "01",
    title: "Learn",
    tagline: "Understand the language.",
    description:
      "You learn the structures, rules, vocabulary and notions you actually need, nothing wasted on theory you won't use.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Practice",
    tagline: "Put your knowledge into action.",
    description:
      "Every notion studied is immediately used in practical exercises, so it becomes a reflex rather than a memory.",
    icon: Dumbbell,
  },
  {
    number: "03",
    title: "Speak",
    tagline: "Use English in real situations.",
    description:
      "Sessions are built around communication, real conversations, not one-way lectures.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "Improve",
    tagline: "Understand your mistakes and keep progressing.",
    description:
      "Corrections and feedback highlight exactly what to work on next, so progress stays visible and structured.",
    icon: TrendingUp,
  },
];

/* 4. CECRL levels */
export interface CecrlLevel {
  code: string;
  label: string;
  description: string;
  topics: string[];
}

export const CECRL_LEVELS: CecrlLevel[] = [
  {
    code: "A1",
    label: "Foundations",
    description: "Build your first solid foundations in English.",
    topics: [
      "Greetings and introductions",
      "Basic sentence structure",
      "Everyday vocabulary",
      "Basic grammar",
      "Pronunciation fundamentals",
      "Simple conversations",
    ],
  },
  {
    code: "A2",
    label: "Everyday English",
    description: "Start communicating confidently in familiar everyday situations.",
    topics: [
      "Daily conversations",
      "Common expressions",
      "Everyday vocabulary",
      "Past and future situations",
      "Listening fundamentals",
      "Practical speaking",
    ],
  },
  {
    code: "B1",
    label: "Independent English",
    description: "Become increasingly independent when communicating in English.",
    topics: [
      "Storytelling",
      "Expressing opinions",
      "Discussions",
      "Real-life situations",
      "More complex grammar",
      "Extended conversations",
    ],
  },
  {
    code: "B2",
    label: "Confident Communication",
    description: "Communicate with confidence in increasingly complex situations.",
    topics: [
      "Advanced conversations",
      "Argumentation",
      "Professional communication",
      "Complex grammar",
      "Idioms and phrasal verbs",
      "Presentations",
    ],
  },
  {
    code: "C1",
    label: "Advanced English",
    description: "Develop precision, flexibility and advanced communication skills.",
    topics: [
      "Nuanced communication",
      "Advanced vocabulary",
      "Complex argumentation",
      "Professional English",
      "Advanced writing",
      "Public speaking",
    ],
  },
  {
    code: "C2",
    label: "Language Mastery",
    description: "Refine your English towards exceptional fluency and precision.",
    topics: [
      "Sophisticated communication",
      "Advanced vocabulary",
      "Nuance",
      "High-level writing",
      "Professional communication",
      "Advanced speaking",
    ],
  },
];

/* 5. 8-month journey */
export interface JourneyMonth {
  month: string;
  title: string;
  topics: string[];
  goal: string;
}

export const JOURNEY_MONTHS: JourneyMonth[] = [
  {
    month: "Month 1",
    title: "Building the Foundations",
    topics: ["Grammar", "Pronunciation", "Vocabulary", "Basic speaking", "Sentence construction"],
    goal: "Build a reliable foundation for your English.",
  },
  {
    month: "Month 2",
    title: "Everyday Communication",
    topics: ["Daily English", "Listening", "Conversation", "Everyday vocabulary", "Practical situations"],
    goal: "Start using English in everyday situations.",
  },
  {
    month: "Month 3",
    title: "Speaking with Confidence",
    topics: ["Speaking", "Storytelling", "Real-life situations", "Conversation practice", "Pronunciation"],
    goal: "Become more comfortable expressing yourself.",
  },
  {
    month: "Month 4",
    title: "Expanding Your English",
    topics: ["Vocabulary development", "Grammar development", "Reading", "Writing", "Conversation"],
    goal: "Expand your ability to understand and express ideas.",
  },
  {
    month: "Month 5",
    title: "Professional English",
    topics: ["Workplace communication", "Emails", "Meetings", "Presentations", "Professional vocabulary", "Interviews"],
    goal: "Learn to communicate effectively in professional environments.",
  },
  {
    month: "Month 6",
    title: "Advanced Communication",
    topics: ["Debates", "Arguments", "Opinions", "Complex conversations", "Advanced structures"],
    goal: "Develop greater precision and confidence.",
  },
  {
    month: "Month 7",
    title: "Fluency & Precision",
    topics: ["Natural expressions", "Phrasal verbs", "Idioms", "Pronunciation", "Fluency", "Advanced vocabulary"],
    goal: "Make your communication more natural and precise.",
  },
  {
    month: "Month 8",
    title: "Mastery & Certification",
    topics: ["Final assessment", "Speaking", "Writing", "Listening", "Reading", "Real-world communication", "Certification"],
    goal: "Demonstrate the skills you have developed throughout your journey.",
  },
];

/* 6. Three sessions */
export interface WeekSession {
  day: string;
  title: string;
  goal: string;
}

export const WEEK_SESSIONS: WeekSession[] = [
  {
    day: "Day 1",
    title: "Grammar & Structure",
    goal: "Understand how English works and learn to build accurate sentences.",
  },
  {
    day: "Day 2",
    title: "Vocabulary & Communication",
    goal: "Develop useful vocabulary and learn how to use it naturally.",
  },
  {
    day: "Day 3",
    title: "Speaking & Real Practice",
    goal: "Use English actively through guided conversations and practical situations.",
  },
];

/* 7. 2-hour lesson flow */
export interface LessonBeat {
  time: string;
  label: string;
}

export const LESSON_FLOW: LessonBeat[] = [
  { time: "00:00", label: "Warm-up" },
  { time: "00:10", label: "Lesson" },
  { time: "00:40", label: "Guided Practice" },
  { time: "01:10", label: "Real-life Practice" },
  { time: "01:40", label: "Speaking Challenge" },
  { time: "01:55", label: "Feedback & Homework" },
  { time: "02:00", label: "Session Complete" },
];

/* 8. Speaking first */
export interface SpeakingContext {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SPEAKING_CONTEXTS: SpeakingContext[] = [
  { icon: Plane, title: "Travel", description: "Order, ask, navigate - confidently, anywhere." },
  { icon: Briefcase, title: "Job Interview", description: "Present yourself clearly under real pressure." },
  { icon: Phone, title: "Phone Calls", description: "Communicate without the help of body language." },
  { icon: Users, title: "Business Meetings", description: "Follow, contribute, and be understood." },
  { icon: Presentation, title: "Presentations", description: "Structure ideas and speak with confidence." },
  { icon: MessagesSquare, title: "Everyday Conversations", description: "Talk naturally, without translating in your head." },
];

/* 9. Skills */
export interface SkillItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SKILLS: SkillItem[] = [
  { icon: Landmark, title: "Grammar", description: "Build accurate, reliable sentence structures." },
  { icon: BookOpen, title: "Vocabulary", description: "Acquire the words you'll actually use." },
  { icon: Ear, title: "Listening", description: "Understand native speed and real accents." },
  { icon: Mic2, title: "Speaking", description: "Develop fluency, confidence and natural expression." },
  { icon: GraduationCap, title: "Reading", description: "Understand texts with growing ease." },
  { icon: PenLine, title: "Writing", description: "Express ideas clearly in written English." },
  { icon: MessageCircle, title: "Pronunciation", description: "Be understood clearly, the first time." },
  { icon: Briefcase, title: "Professional English", description: "Communicate effectively in work settings." },
];

/* 10. Progress dashboard */
export interface ProgressMetric {
  label: string;
  value: number;
}

export const PROGRESS_METRICS: ProgressMetric[] = [
  { label: "Speaking", value: 72 },
  { label: "Vocabulary", value: 81 },
  { label: "Grammar", value: 68 },
  { label: "Listening", value: 76 },
];

/* 11. Learning goals */
export interface LearningGoal {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const LEARNING_GOALS: LearningGoal[] = [
  { icon: Plane, title: "Travel", description: "Communicate confidently while travelling." },
  { icon: Briefcase, title: "Career", description: "Develop English skills for your professional life." },
  { icon: GraduationCap, title: "Studies", description: "Improve your English for academic environments." },
  { icon: Globe2, title: "International Communication", description: "Connect with people from around the world." },
  { icon: Heart, title: "Confidence", description: "Feel more comfortable speaking English." },
  { icon: BadgeCheck, title: "Business", description: "Communicate more effectively in business situations." },
];

/* 12. Professional English */
export const PROFESSIONAL_TOPICS: string[] = [
  "Meetings",
  "Presentations",
  "Negotiations",
  "Emails",
  "Interviews",
  "Networking",
  "Business vocabulary",
  "Public speaking",
];