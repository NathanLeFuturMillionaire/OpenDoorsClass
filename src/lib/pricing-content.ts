import type { LucideIcon } from "lucide-react";
import { Globe2, Briefcase, Plane, Handshake, GraduationCap, Rocket } from "lucide-react";

export interface PricingStep {
  number: string;
  label: string;
}

export const STARTER_HOW_IT_WORKS: PricingStep[] = [
  { number: "01", label: "Évaluez votre niveau" },
  { number: "02", label: "Suivez votre parcours" },
  { number: "03", label: "Pratiquez régulièrement" },
  { number: "04", label: "Progressez vers votre objectif" },
];

export const STARTER_FEATURES: string[] = [
  "Parcours structuré de l'apprentissage de l'anglais",
  "Progression du niveau débutant vers les niveaux avancés",
  "Apprentissage à son propre rythme",
  "Cours accessibles depuis la plateforme",
  "Leçons de grammaire",
  "Vocabulaire",
  "Prononciation",
  "Reading",
  "Listening",
  "Writing",
  "Speaking",
  "Exercices interactifs",
  "Activités pratiques",
  "Exercices de compréhension",
  "Exercices de production écrite",
  "Exercices de pratique orale",
  "Suivi de progression",
  "Tableau de bord personnel",
  "Évaluations régulières",
  "Challenges d'apprentissage",
  "Assistance pédagogique intelligente lorsque disponible",
  "Accès à la communauté OpenDoorsClass",
  "Certificat OpenDoorsClass en fin de formation, selon les conditions du programme",
];

export const PRO_FEATURES: string[] = [
  "Tout ce qui est inclus dans Starter",
  "Accompagnement plus personnalisé",
  "Suivi individuel",
  "Professional English",
  "Business English",
  "Professional vocabulary",
  "Business communication",
  "Meetings",
  "Presentations",
  "Professional emails",
  "Phone calls",
  "Networking",
  "Negotiation",
  "Customer communication",
  "Leadership communication",
  "Public Speaking",
  "Storytelling",
  "Argumentation",
  "Prise de parole professionnelle",
  "Simulations professionnelles",
  "Simulations d'entretiens d'embauche",
  "Simulations de réunions",
  "Simulations de négociations",
  "Communication professionnelle écrite",
  "Corrections personnalisées",
  "Feedback personnalisé",
  "Analyse des compétences",
  "Préparation TOEFL",
  "Préparation TOEIC",
  "Préparation IELTS",
  "Exercices spécifiques aux examens",
  "Tests blancs",
  "Stratégies de passage des examens",
  "Analyse des erreurs",
  "Préparation à la communication internationale",
  "Certificat OpenDoorsClass en fin de formation, selon les conditions du programme",
];

export interface ComparisonRow {
  label: string;
  starter: boolean;
  pro: boolean;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Apprentissage autonome", starter: true, pro: true },
  { label: "Parcours progressif", starter: true, pro: true },
  { label: "Cours d'anglais général", starter: true, pro: true },
  { label: "Grammar", starter: true, pro: true },
  { label: "Vocabulary", starter: true, pro: true },
  { label: "Pronunciation", starter: true, pro: true },
  { label: "Reading", starter: true, pro: true },
  { label: "Listening", starter: true, pro: true },
  { label: "Writing", starter: true, pro: true },
  { label: "Speaking", starter: true, pro: true },
  { label: "Exercices interactifs", starter: true, pro: true },
  { label: "Suivi de progression", starter: true, pro: true },
  { label: "Communauté OpenDoorsClass", starter: true, pro: true },
  { label: "Certification", starter: true, pro: true },
  { label: "Professional English", starter: false, pro: true },
  { label: "Business English", starter: false, pro: true },
  { label: "Public Speaking", starter: false, pro: true },
  { label: "Simulations professionnelles", starter: false, pro: true },
  { label: "Coaching / accompagnement personnalisé", starter: false, pro: true },
  { label: "Feedback personnalisé", starter: false, pro: true },
  { label: "Préparation TOEFL", starter: false, pro: true },
  { label: "Préparation TOEIC", starter: false, pro: true },
  { label: "Préparation IELTS", starter: false, pro: true },
  { label: "Tests blancs", starter: false, pro: true },
  { label: "Préparation aux situations professionnelles", starter: false, pro: true },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const PRICING_FAQ: FaqItem[] = [
  {
    question: "Quelle est la différence entre Starter et Pro ?",
    answer:
      "Starter vous accompagne dans un apprentissage progressif de l'anglais général, des bases vers les niveaux avancés. Pro va plus loin : il ajoute la communication professionnelle, le public speaking, les simulations réelles et la préparation aux examens internationaux.",
  },
  {
    question: "Puis-je commencer Starter si je suis débutant complet ?",
    answer:
      "Oui. Starter est justement pensé pour construire vos bases depuis le début, à votre propre rythme.",
  },
  {
    question: "Puis-je passer de Starter à Pro ?",
    answer:
      "Oui, il est possible d'évoluer vers Pro dès que vous ressentez le besoin d'un accompagnement plus poussé ou d'objectifs professionnels.",
  },
  {
    question: "Pro est-il adapté aux professionnels ?",
    answer:
      "Oui, Pro est spécifiquement conçu pour les personnes qui souhaitent utiliser l'anglais dans un cadre professionnel : réunions, entretiens, présentations, négociations et communication internationale.",
  },
  {
    question: "La préparation TOEFL est-elle incluse dans Pro ?",
    answer: "Oui, la préparation TOEFL fait partie du parcours Pro.",
  },
  {
    question: "La préparation TOEIC est-elle incluse dans Pro ?",
    answer: "Oui, la préparation TOEIC fait partie du parcours Pro.",
  },
  {
    question: "La préparation IELTS est-elle incluse dans Pro ?",
    answer: "Oui, la préparation IELTS fait partie du parcours Pro.",
  },
  {
    question: "Vais-je recevoir un certificat ?",
    answer:
      "À la fin de votre parcours, OpenDoorsClass peut délivrer un certificat attestant de votre formation, selon les conditions du programme suivi.",
  },
  {
    question: "Puis-je apprendre depuis mon téléphone ?",
    answer:
      "Oui, la plateforme OpenDoorsClass est conçue pour être utilisée aussi bien sur ordinateur que sur mobile.",
  },
  {
    question: "Comment savoir quelle offre choisir ?",
    answer:
      "Si vous voulez construire votre anglais progressivement, Starter est fait pour vous. Si vous avez déjà une base et visez un usage professionnel ou un examen international, Pro est la formule adaptée.",
  },
];

export interface InternationalPoint {
  icon: LucideIcon;
  label: string;
}

export const INTERNATIONAL_POINTS: InternationalPoint[] = [
  { icon: GraduationCap, label: "Études" },
  { icon: Briefcase, label: "Travail" },
  { icon: Plane, label: "Voyage" },
  { icon: Globe2, label: "Communication internationale" },
  { icon: Handshake, label: "Examens" },
  { icon: Rocket, label: "Entrepreneuriat" },
];