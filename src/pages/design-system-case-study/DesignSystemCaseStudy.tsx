import Container from '@/components/layout/Container';
import Tag from '@/components/ui/Tag/Tag';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import TableOfContents from '@components/ui/TableOfContents/TableOfContents';
import { CASE_STUDY_META, CASE_STUDY_SECTIONS, CASE_STUDY_TAGS } from '@/content/designSystemCaseStudy';
import { CASE_STUDY_META_PAGE } from '@/content/pageMeta';
import styles from './DesignSystemCaseStudy.module.css';
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
} from './CaseStudySections';

const DesignSystemCaseStudy = () => {
  return (
    <section className={styles.pageWrap}>
      <Container className={styles.page}>
        <header className={styles.hero}>
          <Breadcrumbs items={CASE_STUDY_META_PAGE.breadcrumbs} />
          <div className={styles.heroBadgeRow}>
            <Tag size="lg" variant="success">{CASE_STUDY_META_PAGE.heroBadge}</Tag>
            <span className={styles.heroRule} />
            <span className={styles.heroMeta}>{CASE_STUDY_META_PAGE.heroKicker}</span>
          </div>
          <h1 className={styles.title}>
            {CASE_STUDY_META_PAGE.heroTitle} <br />
            <span className={styles.titleAccent}>{CASE_STUDY_META_PAGE.heroTitleAccent}</span>
          </h1>
          <p className={styles.subtitle}>{CASE_STUDY_META_PAGE.heroSubtitle}</p>
          <div className={styles.heroStats}>
            {CASE_STUDY_META.map((item) => (
              <div key={item.label}>
                <p className={styles.heroStatLabel}>{item.label}</p>
                <p className={styles.heroStatValue}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className={styles.meta}>
            {CASE_STUDY_TAGS.map((tag) => (
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
            <hr className={styles.sectionDivider} />
            <ChallengesSection />
            <DemoSection />
            <LearningsSection />
            <NextStepsSection />
            <SystemCoreSection />
          </div>

          <aside className={styles.sidebar} aria-label="Case study sidebar">
            <div className={styles.sidebarGroup}>
              <TableOfContents sections={CASE_STUDY_SECTIONS} scrollBehavior="instant" />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default DesignSystemCaseStudy;
