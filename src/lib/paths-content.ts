import type { LucideIcon } from "lucide-react";
import {
  BookOpenCheck,
  Video,
  Brain,
  Target,
  BarChart3,
  Sparkles,
  Award,
  UserCog,
  Briefcase,
  Mic,
  Handshake,
  PenSquare,
  GraduationCap,
  LineChart,
} from "lucide-react";

export interface PathStep {
  number: string;
  label: string;
}

export const STARTER_STEPS: PathStep[] = [
  { number: "01", label: "Vous commencez par votre niveau" },
  { number: "02", label: "Vous suivez votre parcours" },
  { number: "03", label: "Vous pratiquez" },
  { number: "04", label: "Vous mesurez vos progrès" },
  { number: "05", label: "Vous avancez vers le niveau suivant" },
];

export const PRO_STEPS: PathStep[] = [
  { number: "01", label: "Nous identifions votre niveau" },
  { number: "02", label: "Nous définissons vos objectifs professionnels" },
  { number: "03", label: "Vous développez votre anglais professionnel" },
  { number: "04", label: "Vous pratiquez dans des situations réelles" },
  { number: "05", label: "Vous recevez des retours personnalisés" },
  { number: "06", label: "Vous vous préparez à performer à l'international" },
];

export interface PathFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
}

export const STARTER_FEATURES: PathFeature[] = [
  {
    icon: BookOpenCheck,
    title: "Un parcours structuré",
    description:
      "Un parcours progressif qui permet de construire ses compétences depuis les bases jusqu'aux niveaux avancés.",
  },
  {
    icon: Video,
    title: "Des leçons accessibles à tout moment",
    description:
      "Cours, explications, ressources et activités accessibles depuis la plateforme, à votre propre rythme.",
  },
  {
    icon: Brain,
    title: "Une progression complète",
    description: "Le parcours couvre Grammar, Vocabulary, Pronunciation, Reading, Listening, Writing et Speaking.",
    tags: ["Grammar", "Vocabulary", "Pronunciation", "Reading", "Listening", "Writing", "Speaking"],
  },
  {
    icon: Target,
    title: "Beaucoup de pratique",
    description:
      "L'objectif n'est pas de mémoriser des règles : répondre, écrire, écouter, parler, répéter, résoudre des situations réelles.",
  },
  {
    icon: BarChart3,
    title: "Une progression visible",
    description:
      "Progression du parcours, compétences acquises, résultats aux exercices, activités terminées, évolution du niveau.",
  },
  {
    icon: Sparkles,
    title: "Une assistance intelligente",
    description:
      "Une aide pour comprendre ses erreurs et identifier les notions à retravailler en priorité.",
  },
  {
    icon: Award,
    title: "Une certification finale",
    description:
      "À la fin du parcours, un certificat OpenDoorsClass selon les conditions prévues par la plateforme.",
  },
];

export const PRO_FEATURES: PathFeature[] = [
  {
    icon: UserCog,
    title: "Un accompagnement plus personnalisé",
    description:
      "Au-delà de l'apprentissage autonome : davantage de pratique, de retours et de suivi individuel.",
  },
  {
    icon: Briefcase,
    title: "Professional English",
    description: "Le vocabulaire et les situations de la communication professionnelle au quotidien.",
    tags: [
      "Business English",
      "Meetings",
      "Presentations",
      "Emails",
      "Phone calls",
      "Networking",
      "Negotiation",
      "Leadership",
    ],
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Prise de parole, fluidité, argumentation et présentation professionnelle.",
    tags: ["Fluidité", "Confiance", "Argumentation", "Storytelling", "Improvisation"],
  },
  {
    icon: Handshake,
    title: "Simulations professionnelles",
    description: "Des situations réalistes pour utiliser l'anglais, pas seulement l'étudier.",
    tags: [
      "Lead a meeting",
      "Present an idea",
      "Handle a customer",
      "Negotiate with a client",
      "Job interview",
    ],
  },
  {
    icon: PenSquare,
    title: "Communication professionnelle écrite",
    description: "Emails, rapports, CV, lettres de motivation et communication formelle.",
    tags: ["Emails", "Rapports", "CV", "Lettres de motivation"],
  },
  {
    icon: GraduationCap,
    title: "Préparation aux examens internationaux",
    description: "Une préparation structurée selon vos objectifs.",
    tags: ["TOEFL", "TOEIC", "IELTS"],
  },
  {
    icon: LineChart,
    title: "Analyse et feedback",
    description: "Des retours personnalisés sur chaque dimension de votre anglais professionnel.",
    tags: ["Grammar", "Fluency", "Pronunciation", "Writing", "Speaking"],
  },
];

export const STARTER_COMPARISON: string[] = [
  "Apprentissage autonome",
  "Parcours progressif",
  "A1 → niveaux avancés",
  "Cours et ressources",
  "Exercices pratiques",
  "Speaking",
  "Listening",
  "Reading",
  "Writing",
  "Suivi de progression",
  "Certification finale",
];

export const PRO_COMPARISON: string[] = [
  "Tout ce qui est inclus dans Starter",
  "Accompagnement plus personnalisé",
  "Professional English",
  "Business communication",
  "Public Speaking",
  "Simulations professionnelles",
  "Communication écrite professionnelle",
  "Préparation TOEFL",
  "Préparation TOEIC",
  "Préparation IELTS",
  "Feedback personnalisé",
];