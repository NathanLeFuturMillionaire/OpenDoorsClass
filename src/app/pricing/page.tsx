import type { Metadata } from "next";
import { PricingHero, PhilosophyRecap } from "@/components/pricing/pricing-hero";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { Header } from "@/components/layout/header";
import { WhichOfferSection } from "@/components/pricing/which-offer-section";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import {
  CertificationSection,
  InternationalSection,
} from "@/components/pricing/certification-and-international";

export const metadata: Metadata = {
  title: "Tarifs et formations d'anglais | OpenDoorsClass",
  description:
    "Découvrez les parcours Starter et Pro d'OpenDoorsClass et choisissez la formation d'anglais adaptée à vos objectifs.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <PricingHero />
      <PhilosophyRecap />
      <PricingCards />
      <ComparisonTable />
      <WhichOfferSection />
      <PricingFaq />
      <CertificationSection />
      <InternationalSection />
    </>
  );
}