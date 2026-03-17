import ArticleHero from '@/components/sections/ArticleHero';
import ArticleLayout from '@/components/sections/ArticleLayout';
import FigureBlock from '@/components/sections/FigureBlock';
import { THEMING_BUILD_NOTES_SECTIONS } from '@/content/themingBuildNotes';
import { THEMING_BUILD_NOTES_META_PAGE } from '@/content/pageMeta';
import IntroSection from './sections/IntroSection';
import BaselineSection from './sections/BaselineSection';
import BreakingPointSection from './sections/BreakingPointSection';
import InjectionSection from './sections/InjectionSection';
import OklchSection from './sections/OklchSection';
import BrandSwitcherSection from './sections/BrandSwitcherSection';
import PlaygroundSection from './sections/PlaygroundSection';
import ContractSection from './sections/ContractSection';
import ConstraintsSection from './sections/ConstraintsSection';
import TokenCascadeAnimation from './sections/TokenCascadeAnimation';
import styles from './ThemingBuildNotes.module.css';

const ThemingBuildNotes = () => {
  return (
    <ArticleLayout
      tocSections={THEMING_BUILD_NOTES_SECTIONS}
      tocScrollBehavior="auto"
      tocLabel="Brand theming article sidebar"
      hero={
        <ArticleHero
          breadcrumbs={THEMING_BUILD_NOTES_META_PAGE.breadcrumbs}
          badge={THEMING_BUILD_NOTES_META_PAGE.heroBadge}
          kicker={THEMING_BUILD_NOTES_META_PAGE.heroKicker}
          title={THEMING_BUILD_NOTES_META_PAGE.heroTitle}
          titleAccent={THEMING_BUILD_NOTES_META_PAGE.heroTitleAccent}
          subtitle={THEMING_BUILD_NOTES_META_PAGE.heroSubtitle}
          stats={THEMING_BUILD_NOTES_META_PAGE.heroStats}
        />
      }
    >
      <div className={styles.blockContainer}>
        <p className={styles.tlDrTitle}>TL;DR</p>
        <p className={styles.tlDrContent}>Four cascade layers. One injection point. Derived tokens.</p>
      </div>

      <FigureBlock className={styles.blockContainer} caption="Illustration of the four-layer token cascade architecture, with a single brand anchor feeding into the semantic layer's color math to generate a full palette.">
        <TokenCascadeAnimation playback="static" />
      </FigureBlock>
      <IntroSection />
      <BaselineSection />
      <BreakingPointSection />
      <InjectionSection />
      <OklchSection />
      <BrandSwitcherSection />
      <PlaygroundSection />
      <ContractSection />
      <ConstraintsSection />
    </ArticleLayout>
  );
};

export default ThemingBuildNotes;
