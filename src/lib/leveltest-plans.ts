export interface LevelTestPlan {
  id: "free" | "angel" | "god";
  name: string;
  badge: string;
  secondaryBadge?: string;
  basePrice: number;
  feeRate: number; // 0.15 = 15%
  credits: string;
  skillsCount: number;
  skills: string[];
  features: string[];
  ctaLabel: string;
  positioning: string;
}

function computeFee(basePrice: number, feeRate: number) {
  return Math.round(basePrice * feeRate);
}

const angelBase = 15000;
const godBase = 25000;
const feeRate = 0.15;

export const LEVELTEST_PLANS: LevelTestPlan[] = [
  {
    id: "free",
    name: "Free",
    badge: "Pour découvrir votre niveau",
    basePrice: 0,
    feeRate: 0,
    credits: "Accès gratuit",
    skillsCount: 1,
    skills: ["Grammar"],
    features: [
      "Évaluation Grammar uniquement",
      "Questions de grammaire",
      "Première estimation de votre niveau",
      "Expérience de découverte OpenDoorsClass Level Test",
    ],
    ctaLabel: "Commencer gratuitement",
    positioning: "« Je veux simplement découvrir mon niveau. »",
  },
  {
    id: "angel",
    name: "Angel",
    badge: "Évaluation approfondie",
    basePrice: angelBase,
    feeRate,
    credits: "5 crédits",
    skillsCount: 5,
    skills: ["Grammar", "Reading", "Listening", "Speaking", "Writing"],
    features: [
      "Grammar",
      "Reading",
      "Listening",
      "Speaking",
      "Writing",
      "Évaluation approfondie",
      "Analyse de plusieurs compétences",
      "Identification des points forts",
      "Identification des points faibles",
      "Recommandations personnalisées",
      "6 crédits",
      "Rapport de niveau plus complet",
      "Analyse de votre profil linguistique",
    ],
    ctaLabel: "Choisir Angel",
    positioning: "« Je veux une vraie évaluation de mes compétences. »",
  },
  {
    id: "god",
    name: "God",
    badge: "Évaluation complète",
    secondaryBadge: "Le plus complet",
    basePrice: godBase,
    feeRate,
    credits: "10 crédits",
    skillsCount: 7,
    skills: ["Grammar", "Orthography", "Vocabulary", "Speaking", "Listening", "Writing", "Reading"],
    features: [
      "Grammar",
      "Orthography",
      "Vocabulary",
      "Speaking",
      "Listening",
      "Writing",
      "Reading",
      "Évaluation multidimensionnelle",
      "Analyse approfondie des 7 compétences",
      "Évaluation de la précision linguistique",
      "Analyse du vocabulaire",
      "Analyse de la compréhension écrite",
      "Analyse de la compréhension orale",
      "Analyse de l'expression écrite",
      "Analyse de l'expression orale",
      "Identification des forces",
      "Identification des faiblesses",
      "Recommandations personnalisées",
      "Axes de progression",
      "Rapport détaillé",
      "14 crédits",
      "Expérience d'évaluation la plus complète d'OpenDoorsClass",
    ],
    ctaLabel: "Choisir God",
    positioning: "« Je veux une évaluation extrêmement complète et détaillée. »",
  },
];

export function getPlanPricing(plan: LevelTestPlan) {
  const fee = computeFee(plan.basePrice, plan.feeRate);
  const total = plan.basePrice + fee;
  return { basePrice: plan.basePrice, fee, total };
}