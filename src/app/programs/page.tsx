import type { Metadata } from "next";
import { ProgramsHero } from "@/components/programs/programs-hero";
import {
  MoreThanLessonsSection,
  LearningLevelsSection,
} from "@/components/programs/methods-and-levels";
import { JourneyTimelineSection } from "@/components/programs/journey-timeline-section";
import {
  ThreeSessionsSection,
  LessonFlowSection,
} from "@/components/programs/sessions-and-lesson-flow";
import {
  SpeakingFirstSection,
  SkillsSection,
} from "@/components/programs/speaking-and-skills";
import {
  ProgressDashboardSection,
  LearningGoalsSection,
} from "@/components/programs/progress-and-goals";
import {
  ProfessionalEnglishSection,
  CertificationSection,
} from "@/components/programs/professional-and-certification";
import { ProgramsCta } from "@/components/programs/programs-cta";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "English Programs | OpenDoorsClass",
  description:
    "Discover the structured English learning programs at OpenDoorsClass, combining lessons, real practice, speaking, coaching and consistent progress.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <ProgramsHero />
      <MoreThanLessonsSection />
      <LearningLevelsSection />
      <JourneyTimelineSection />
      <ThreeSessionsSection />
      <LessonFlowSection />
      <SpeakingFirstSection />
      <SkillsSection />
      <ProgressDashboardSection />
      <LearningGoalsSection />
      <ProfessionalEnglishSection />
      <CertificationSection />
      <ProgramsCta />
    </>
  );
}