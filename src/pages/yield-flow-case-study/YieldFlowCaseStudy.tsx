import ArticleHero from '@/components/sections/ArticleHero';
import ArticleLayout from '@/components/sections/ArticleLayout';
import { YIELD_FLOW_META, YIELD_FLOW_SECTIONS } from '@/content/yieldFlowCaseStudy';
import { YIELD_FLOW_META_PAGE } from '@/content/pageMeta';
import {
  ItchSection,
  ProblemSection,
  PivotSection,
  BuildSection,
  DecisionsSection,
  CurrentStateSection,
  TakeawaySection,
} from './sections/YieldFlowSections';

const YieldFlowCaseStudy = () => {
  return (
    <ArticleLayout
      tocSections={YIELD_FLOW_SECTIONS}
      tocScrollBehavior="auto"
      tocLabel="Case study sidebar"
      hero={
        <ArticleHero
          breadcrumbs={YIELD_FLOW_META_PAGE.breadcrumbs}
          badge={YIELD_FLOW_META_PAGE.heroBadge}
          kicker={YIELD_FLOW_META_PAGE.heroKicker}
          title={YIELD_FLOW_META_PAGE.heroTitle}
          titleAccent={YIELD_FLOW_META_PAGE.heroTitleAccent}
          subtitle={YIELD_FLOW_META_PAGE.heroSubtitle}
          stats={YIELD_FLOW_META}
        />
      }
    >
      <ItchSection />
      <ProblemSection />
      <DecisionsSection />
      <PivotSection />
      <BuildSection />
      <CurrentStateSection />
      <TakeawaySection />
    </ArticleLayout>
  );
};

export default YieldFlowCaseStudy;
