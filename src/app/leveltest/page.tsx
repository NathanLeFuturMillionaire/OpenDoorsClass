import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { LevelTestHero } from "@/components/leveltest/leveltest-hero";
import {
  WhyTestSection,
  SkillsGridSection,
} from "@/components/leveltest/why-and-skills-sections";
import { SkillsInteractiveSection } from "@/components/leveltest/skills-interactive-section";
import { CefrSection } from "@/components/leveltest/cefr-section";
import { HowItWorksSection } from "@/components/leveltest/how-it-works-section";
import {
  ExperienceSection,
  AntiFraudSection,
} from "@/components/leveltest/experience-and-antifraud-sections";
import {
  BrandSection,
  FounderMiniSection,
} from "@/components/leveltest/brand-and-founder-sections";
import {
  LevelTestFaqSection,
  LevelTestFinalCta,
} from "@/components/leveltest/leveltest-faq-and-cta";
import { LevelTestPricingSection } from "@/components/leveltest/leveltest-pricing-section";
import { LevelTestFooter } from "@/components/leveltest/leveltest-footer";

const title = "Test de niveau d'anglais | OpenDoorsClass";
const description =
  "Découvrez votre niveau d'anglais avec le Level Test OpenDoorsClass et identifiez vos forces et vos axes de progression.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/leveltest",
    siteName: "OpenDoorsClass",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function LevelTestPage() {
  return (
    <>
      <Header />
      <LevelTestHero />
      <WhyTestSection />
      <SkillsGridSection />
      <SkillsInteractiveSection />
      <CefrSection />
      <HowItWorksSection />
      <ExperienceSection />
      <AntiFraudSection />
      <BrandSection />
      <FounderMiniSection />
      <LevelTestPricingSection />
      <LevelTestFaqSection />
      <LevelTestFinalCta />
      <LevelTestFooter />
    </>
  );
}