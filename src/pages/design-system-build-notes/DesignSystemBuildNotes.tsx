import ArticleHero from '@/components/sections/ArticleHero';
import ArticleLayout from '@/components/sections/ArticleLayout';
import { BUILD_NOTES_META, BUILD_NOTES_SECTIONS } from '@/content/designSystemBuildNotes';
import { BUILD_NOTES_META_PAGE } from '@/content/pageMeta';
import {
  MotivationSection,
  ProblemSection,
  ApproachSection,
  KeyDecisionsSection,
  WinsSection,
  ChallengesSection,
  DemoSection,
  LearningsSection,
  NextStepsSection,
  SystemCoreSection,
} from '@/pages/design-system-build-notes/BuildNotesSections';

const DesignSystemBuildNotes = () => {
  return (
    <ArticleLayout
      tocSections={BUILD_NOTES_SECTIONS}
      tocScrollBehavior="instant"
      tocLabel="Build notes sidebar"
      hero={
        <ArticleHero
          breadcrumbs={BUILD_NOTES_META_PAGE.breadcrumbs}
          badge={BUILD_NOTES_META_PAGE.heroBadge}
          kicker={BUILD_NOTES_META_PAGE.heroKicker}
          title={BUILD_NOTES_META_PAGE.heroTitle}
          titleAccent={BUILD_NOTES_META_PAGE.heroTitleAccent}
          subtitle={BUILD_NOTES_META_PAGE.heroSubtitle}
          stats={BUILD_NOTES_META}
        />
      }
    >
      <MotivationSection />
      <ProblemSection />
      <ApproachSection />
      <KeyDecisionsSection />
      <WinsSection />
      <ChallengesSection />
      <DemoSection />
      <LearningsSection />
      <NextStepsSection />
      <SystemCoreSection />
    </ArticleLayout>
  );
};

export default DesignSystemBuildNotes;
