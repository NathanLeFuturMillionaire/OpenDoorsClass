import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { Header } from "@/components/layout/header";
import { FounderSection } from "@/components/about/founder-section";
import { QuoteSection } from "@/components/about/quote-section";
import { PhilosophySection } from "@/components/about/philosophy-section";
import {
  WhyExistsSection,
  NameMeaningSection,
} from "@/components/about/why-and-name-sections";
import {
  MissionSection,
  AfricanRootsSection,
} from "@/components/about/mission-and-roots-sections";
import {
  FeelingsSection,
  JourneySection,
} from "@/components/about/feelings-and-journey-sections";
import {
  FounderMessageSection,
  AboutCta,
} from "@/components/about/founder-message-and-cta";

export const metadata: Metadata = {
  title: "About OpenDoorsClass | Meet Mr Nathan",
  description:
    "Discover the story, philosophy and vision behind OpenDoorsClass, founded by MAYUKWA Nathan Harysthote, aka Mister Nathan.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <AboutHero />
      <FounderSection />

      <QuoteSection
        quote="I don't simply want to teach English. I want to help people discover what becomes possible when they are no longer afraid to speak it."
        author="Mr Nathan"
      />

      <PhilosophySection />
      <WhyExistsSection />
      <NameMeaningSection />
      <MissionSection />
      <AfricanRootsSection />
      <FeelingsSection />
      <JourneySection />
      <FounderMessageSection />
      <AboutCta />
    </>
  );
}