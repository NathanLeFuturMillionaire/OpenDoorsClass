import { AnnouncementBanner } from "@/components/layout/announcement-banner";
import { Header } from "@/components/layout/header";
import { Hero } from "@/app/(marketing)/hero";
import { CoachSection } from "@/components/marketing/coach-section";
import { ScheduleSection } from "@/components/marketing/schedule-section";
import { PathsSection } from '@/components/marketing/paths-section';


export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <Hero />
      <CoachSection />
      <PathsSection />
      <ScheduleSection />
    </>
  );
}