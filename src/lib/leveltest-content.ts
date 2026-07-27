import type { LucideIcon } from "lucide-react";
import {
  SpellCheck2,
  BookOpenText,
  Headphones,
  PenLine,
  Mic,
} from "lucide-react";

export interface TestSkill {
  number: string;
  title: string;
  description: string;
  measures: string;
  whyItMatters: string;
  canDo: string;
  icon: LucideIcon;
}

export const TEST_SKILLS: TestSkill[] = [
  {
    number: "01",
    title: "Grammar",
    description:
      "Mesurez votre capacité à utiliser correctement les structures grammaticales anglaises.",
    measures: "Votre maîtrise des structures, des temps et des règles de construction de phrases.",
    whyItMatters:
      "Une base grammaticale solide rend votre communication plus claire et plus fiable.",
    canDo: "Construire des phrases justes, à l'oral comme à l'écrit, sans s'appuyer sur la mémorisation seule.",
    icon: SpellCheck2,
  },
  {
    number: "02",
    title: "Reading",
    description: "Évaluez votre compréhension de textes de différents niveaux.",
    measures: "Votre capacité à comprendre des textes variés, du plus simple au plus nuancé.",
    whyItMatters:
      "Comprendre l'écrit est essentiel pour les études, le travail et la vie quotidienne.",
    canDo: "Lire un texte et en extraire l'information essentielle sans tout traduire mentalement.",
    icon: BookOpenText,
  },
  {
    number: "03",
    title: "Listening",
    description: "Testez votre capacité à comprendre l'anglais parlé.",
    measures: "Votre compréhension de l'anglais oral, à différents rythmes et accents.",
    whyItMatters:
      "La compréhension orale est souvent la compétence la plus utile en situation réelle.",
    canDo: "Suivre une conversation ou un enregistrement sans dépendre de sous-titres.",
    icon: Headphones,
  },
  {
    number: "04",
    title: "Writing",
    description: "Analysez votre capacité à organiser et exprimer vos idées à l'écrit.",
    measures: "Votre capacité à structurer une idée claire et cohérente en anglais écrit.",
    whyItMatters:
      "Savoir écrire clairement est indispensable dans un cadre académique ou professionnel.",
    canDo: "Rédiger un texte structuré, avec une idée principale et des arguments cohérents.",
    icon: PenLine,
  },
  {
    number: "05",
    title: "Speaking",
    description: "Évaluez votre capacité à vous exprimer oralement avec fluidité et précision.",
    measures: "Votre aisance à parler, formuler vos idées et réagir en anglais.",
    whyItMatters:
      "C'est souvent la compétence qui donne le plus confiance — et qui fait le plus peur.",
    canDo: "Vous exprimer sur un sujet donné sans trop hésiter ni traduire mot à mot.",
    icon: Mic,
  },
];

export interface CefrLevel {
  code: string;
  label: string;
  description: string;
}

export const CEFR_LEVELS: CefrLevel[] = [
  { code: "A1", label: "Débutant", description: "Premiers mots, phrases simples, besoins essentiels." },
  { code: "A2", label: "Élémentaire", description: "Situations familières et échanges simples du quotidien." },
  { code: "B1", label: "Intermédiaire", description: "Autonomie croissante dans la plupart des situations courantes." },
  { code: "B2", label: "Intermédiaire supérieur", description: "Communication claire, y compris sur des sujets plus complexes." },
  { code: "C1", label: "Avancé", description: "Aisance, nuance et flexibilité dans l'expression." },
  { code: "C2", label: "Maîtrise", description: "Précision et naturel proches d'un niveau natif." },
];

export interface ProcessStep {
  number: string;
  title: string;
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  { number: "01", title: "Créez votre compte" },
  { number: "02", title: "Préparez votre environnement" },
  { number: "03", title: "Passez les différentes parties du test" },
  { number: "04", title: "Recevez votre évaluation" },
  { number: "05", title: "Découvrez vos axes de progression" },
];

export const BEFORE_START_CHECKLIST: string[] = [
  "Installez-vous dans un endroit calme.",
  "Vérifiez votre connexion Internet.",
  "Utilisez un microphone fonctionnel lorsque cela est nécessaire.",
  "Prévoyez suffisamment de temps.",
  "Restez concentré pendant toute l'évaluation.",
  "Répondez personnellement aux questions.",
];

export interface LevelTestFaqItem {
  question: string;
  answer: string;
}

export const LEVELTEST_FAQ: LevelTestFaqItem[] = [
  {
    question: "À quoi sert le Level Test ?",
    answer:
      "Il vous aide à situer précisément votre niveau d'anglais actuel et à identifier vos forces et vos axes de progression.",
  },
  {
    question: "Quels niveaux sont évalués ?",
    answer: "L'évaluation couvre l'échelle CECRL, de A1 (débutant) à C2 (maîtrise).",
  },
  {
    question: "Quelles compétences sont évaluées ?",
    answer: "Grammar, Reading, Listening, Writing et Speaking.",
  },
  {
    question: "Combien de temps faut-il prévoir ?",
    answer:
      "Prévoyez suffisamment de temps pour passer l'ensemble des parties sans être interrompu.",
  },
  {
    question: "Dois-je créer un compte ?",
    answer: "Oui, un compte est nécessaire pour passer le test et retrouver votre évaluation.",
  },
  {
    question: "Puis-je passer le test sur téléphone ?",
    answer:
      "La plateforme est pensée pour fonctionner aussi bien sur ordinateur que sur mobile.",
  },
  {
    question: "Comment dois-je me préparer ?",
    answer:
      "Installez-vous dans un endroit calme, avec une bonne connexion, et restez concentré pendant toute la durée du test.",
  },
  {
    question: "Le résultat représente-t-il un niveau CECRL ?",
    answer:
      "Le résultat du test vous aide à situer votre niveau selon le CECRL — ce n'est pas une certification officielle externe.",
  },
];

export interface FooterLink {
  label: string;
  href: string;
}

export const LEVELTEST_FOOTER_LINKS: FooterLink[] = [
  { label: "Level Test", href: "/leveltest" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "#faq" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "Conditions d'utilisation", href: "/conditions" },
];