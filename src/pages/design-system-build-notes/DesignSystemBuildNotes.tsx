import Container from '@/components/layout/Container';
import Tag from '@/components/ui/Tag/Tag';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import TableOfContents from '@components/ui/TableOfContents/TableOfContents';
import { BUILD_NOTES_META, BUILD_NOTES_SECTIONS, BUILD_NOTES_TAGS } from '@/content/designSystemBuildNotes';
import { BUILD_NOTES_META_PAGE } from '@/content/pageMeta';
import styles from './DesignSystemBuildNotes.module.css';
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
} from './BuildNotesSections';

const DesignSystemBuildNotes = () => {
  return (
    <section className={styles.pageWrap}>
      <Container className={styles.page}>
        <header className={styles.hero}>
          <Breadcrumbs items={BUILD_NOTES_META_PAGE.breadcrumbs} />
          <div className={styles.heroBadgeRow}>
            <Tag size="lg" variant="success">{BUILD_NOTES_META_PAGE.heroBadge}</Tag>
            <span className={styles.heroRule} />
            <span className={styles.heroMeta}>{BUILD_NOTES_META_PAGE.heroKicker}</span>
          </div>
          <h1 className={styles.title}>
            {BUILD_NOTES_META_PAGE.heroTitle} <br />
            <span className={styles.titleAccent}>{BUILD_NOTES_META_PAGE.heroTitleAccent}</span>
          </h1>
          <p className={styles.subtitle}>{BUILD_NOTES_META_PAGE.heroSubtitle}</p>
          <div className={styles.heroStats}>
            {BUILD_NOTES_META.map((item) => (
              <div key={item.label}>
                <p className={styles.heroStatLabel}>{item.label}</p>
                <p className={styles.heroStatValue}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className={styles.meta}>
            {BUILD_NOTES_TAGS.map((tag) => (
              <Tag key={tag.label} size="sm" variant={tag.variant}>{tag.label}</Tag>
            ))}
          </div>
        </header>

        <div className={styles.layout}>
          <div className={styles.content}>
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
          </div>

          <aside className={styles.sidebar} aria-label="Build notes sidebar">
            <div className={styles.sidebarGroup}>
              <TableOfContents sections={BUILD_NOTES_SECTIONS} scrollBehavior="instant" />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default DesignSystemBuildNotes;
