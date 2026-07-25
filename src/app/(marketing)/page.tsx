import { AnnouncementBanner } from "@/components/layout/announcement-banner";
import { Header } from "@/components/layout/header";
import { Hero } from "@/app/(marketing)/hero";

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />
      <Header />
      <Hero />
    </>
  );
}