import Container from '@/components/layout/Container';
import Tag from '@/components/ui/Tag/Tag';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import TableOfContents from '@components/ui/TableOfContents/TableOfContents';
import { CASE_STUDY_META, CASE_STUDY_SECTIONS } from '@/content/designSystemCaseStudy';
import styles from './DesignSystemCaseStudy.module.css';
import { ROUTES } from '@/constants/routes';
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
          <Breadcrumbs
            items={[
              { label: 'Home', to: ROUTES.HOME },
              { label: 'Labs', to: ROUTES.LABS },
              { label: 'Design System Case Study' },
            ]}
          />
          <div className={styles.heroBadgeRow}>
            <Tag size="lg" variant="success">
              First React Project
            </Tag>
            <span className={styles.heroRule} />
            <span className={styles.heroMeta}>Case Study 01</span>
          </div>
          <h1 className={styles.title}>
            The Architecture <br />
            <span className={styles.titleAccent}>of Consistency</span>
          </h1>
          <p className={styles.subtitle}>
            Building a multi-tiered token architecture from scratch, then
            proving it in a real portfolio UI.
          </p>
          <div className={styles.heroStats}>
            {CASE_STUDY_META.map((item) => (
              <div key={item.label}>
                <p className={styles.heroStatLabel}>{item.label}</p>
                <p className={styles.heroStatValue}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className={styles.meta}>
            <Tag size="sm" variant="info">React</Tag>
            <Tag size="sm" variant="success">Tokens</Tag>
            <Tag size="sm" variant="warning">Case Study</Tag>
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
