import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfoColumn } from "@/components/contact/contact-info-column";
import { ContactForm } from "@/components/contact/contact-form";
import {
  RelatedLinksSection,
  ContactFaqSection,
} from "@/components/contact/related-links-and-faq";

export const metadata: Metadata = {
  title: "Contact | OpenDoorsClass",
  description:
    "Une question sur les formations OpenDoorsClass ? Contactez-nous et échangez avec notre équipe.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-paper pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
          <ContactInfoColumn />
          <ContactForm />
        </div>
      </section>

      <RelatedLinksSection />
      <ContactFaqSection />
    </>
  );
}