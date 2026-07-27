import type { LucideIcon } from "lucide-react";
import { BookOpen, Compass, Briefcase, Lightbulb } from "lucide-react";

export interface ContactTopic {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CONTACT_TOPICS: ContactTopic[] = [
  {
    icon: BookOpen,
    title: "Formation",
    description: "Vous souhaitez en savoir plus sur nos parcours d'apprentissage ?",
  },
  {
    icon: Compass,
    title: "Orientation",
    description:
      "Vous ne savez pas quel parcours correspond à votre niveau ou à votre objectif ?",
  },
  {
    icon: Briefcase,
    title: "Professionnel",
    description:
      "Vous souhaitez développer votre anglais pour votre carrière ou votre entreprise ?",
  },
  {
    icon: Lightbulb,
    title: "Suggestion",
    description: "Vous avez une idée ou une suggestion pour améliorer OpenDoorsClass ?",
  },
];

export interface RelatedLink {
  label: string;
  href: string;
}

export const RELATED_LINKS: RelatedLink[] = [
  { label: "Découvrir nos programmes", href: "/programs" },
  { label: "Voir nos offres", href: "/pricing" },
  { label: "En savoir plus sur OpenDoorsClass", href: "/about" },
];

export interface ContactFaqItem {
  question: string;
  answer: string;
}

export const CONTACT_FAQ: ContactFaqItem[] = [
  {
    question: "Comment choisir ma formation ?",
    answer:
      "Le plus simple est de partir de votre objectif : progresser pas à pas avec Starter, ou développer un anglais professionnel avec Pro. Notre test de niveau peut aussi vous aider à y voir clair.",
  },
  {
    question: "Puis-je apprendre l'anglais à mon propre rythme ?",
    answer:
      "Oui, le parcours Starter est justement pensé pour s'adapter à votre rythme, du niveau débutant vers les niveaux avancés.",
  },
  {
    question: "OpenDoorsClass propose-t-il des formations pour les professionnels ?",
    answer:
      "Oui, le parcours Pro est spécifiquement conçu pour la communication professionnelle, les simulations réelles et la préparation aux examens internationaux.",
  },
  {
    question: "Puis-je contacter un coach avant de m'inscrire ?",
    answer:
      "Oui, écrivez-nous simplement via ce formulaire ou sur WhatsApp : notre équipe pourra répondre à vos questions avant que vous ne commenciez.",
  },
];