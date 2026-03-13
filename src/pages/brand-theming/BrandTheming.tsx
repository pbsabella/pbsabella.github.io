import ArticleHero from '@/components/sections/ArticleHero';
import ArticleLayout from '@/components/sections/ArticleLayout';
import { BRAND_THEMING_SECTIONS } from '@/content/brandTheming';
import { BRAND_THEMING_META_PAGE } from '@/content/pageMeta';
import IntroSection from './sections/IntroSection';
import BrandSwitcherSection from './sections/BrandSwitcherSection';
import ComponentPreviewSection from './sections/ComponentPreviewSection';
import TokenArchitectureSection from './sections/TokenArchitectureSection';
import FolderStructureSection from './sections/FolderStructureSection';
import DarkModeSection from './sections/DarkModeSection';
import BrandableSlotsSection from './sections/BrandableSlotsSection';
import AnchorReferenceSection from './sections/AnchorReferenceSection';

const BrandTheming = () => {
  return (
    <ArticleLayout
      tocSections={BRAND_THEMING_SECTIONS}
      tocScrollBehavior="auto"
      tocLabel="Brand theming article sidebar"
      hero={
        <ArticleHero
          breadcrumbs={BRAND_THEMING_META_PAGE.breadcrumbs}
          badge={BRAND_THEMING_META_PAGE.heroBadge}
          kicker={BRAND_THEMING_META_PAGE.heroKicker}
          title={BRAND_THEMING_META_PAGE.heroTitle}
          titleAccent={BRAND_THEMING_META_PAGE.heroTitleAccent}
          subtitle={BRAND_THEMING_META_PAGE.heroSubtitle}
          stats={BRAND_THEMING_META_PAGE.heroStats}
        />
      }
    >
      <IntroSection />
      <BrandSwitcherSection />
      <ComponentPreviewSection />
      <TokenArchitectureSection />
      <FolderStructureSection />
      <DarkModeSection />
      <BrandableSlotsSection />
      <AnchorReferenceSection />
    </ArticleLayout>
  );
};

export default BrandTheming;
