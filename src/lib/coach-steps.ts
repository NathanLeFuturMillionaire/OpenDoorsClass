import type { LucideIcon } from "lucide-react";
import { LineChart, MessageCircle, Sparkles } from "lucide-react";

export interface CoachStep {
  id: string;
  badge: string;
  title: string;
  paragraph: string;
  cta: string;
  href: string;
  icon: LucideIcon;
}

export const COACH_STEPS: CoachStep[] = [
  {
    id: "suivi",
    badge: "Suivi personnalisé",
    title: "Votre progression est suivie chaque semaine.",
    paragraph:
      "Votre coach analyse vos difficultés, corrige vos erreurs et adapte ses conseils pour vous aider à progresser plus rapidement. Chaque séance est une nouvelle occasion d'améliorer votre anglais avec un accompagnement humain et bienveillant.",
    cta: "Découvrir le suivi",
    href: "/programs#follow-up",
    icon: LineChart,
  },
  {
    id: "pratique",
    badge: "Pratique réelle",
    title: "Vous pratiquez l'anglais dans de vraies situations.",
    paragraph:
      "Nos séances sont centrées sur la communication. Vous échangez, participez à des mises en situation, répondez à des questions et développez progressivement votre aisance à l'oral dans un environnement rassurant.",
    cta: "Voir une séance",
    href: "/programs#practice",
    icon: MessageCircle,
  },
  {
    id: "confiance",
    badge: "Confiance retrouvée",
    title: "Chaque réussite renforce votre confiance.",
    paragraph:
      "Au fil des mois, vous prenez naturellement confiance en vos capacités. Vous osez parler, comprendre et interagir en anglais avec davantage de fluidité, jusqu'à atteindre vos objectifs personnels ou professionnels.",
    cta: "Commencer ma progression",
    href: "/start",
    icon: Sparkles,
  },
];