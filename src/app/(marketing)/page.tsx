import { AnnouncementBanner } from "@/components/layout/announcement-banner";
import { Header } from "@/components/layout/header";
import { Hero } from "@/app/(marketing)/hero";
import { CoachSection } from "@/components/marketing/coach-section";

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <Hero />
      <CoachSection />
    </>
  );
}