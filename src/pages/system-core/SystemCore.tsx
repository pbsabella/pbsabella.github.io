import { Fragment } from 'react';
import {
  Palette,
  Layers,
  Ruler,
  Type,
  Sparkles,
  Component,
  SquareMousePointer,
  PersonStanding,
} from 'lucide-react';
import Container from '@/components/layout/Container';
import TableOfContents from '@/components/ui/TableOfContents/TableOfContents';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { SYSTEM_CORE_SECTIONS } from '@/content/systemCore';
import styles from './SystemCore.module.css';
import ColorSystemSection from '@/pages/system-core/sections/ColorSystemSection';
import SemanticTokensSection from '@/pages/system-core/sections/SemanticTokensSection';
import SpacingSection from '@/pages/system-core/sections/SpacingSection';
import TypographySection from '@/pages/system-core/sections/TypographySection';
import ElevationSection from '@/pages/system-core/sections/ElevationSection';
import MotionSection from '@/pages/system-core/sections/MotionSection';
import InteractiveStatesSection from '@/pages/system-core/sections/InteractiveStatesSection';
import ComponentsSection from '@/pages/system-core/sections/ComponentsSection';
import AccessibilitySection from '@/pages/system-core/sections/AccessibilitySection';
import { SYSTEM_CORE_META } from '@/content/pageMeta';

const SystemCore = () => {
  const sections = [
    { key: 'color', element: <ColorSystemSection icon={<Palette size={24} />} />, dividerAfter: true },
    { key: 'semantic', element: <SemanticTokensSection icon={<Layers size={24} />} />, dividerAfter: true },
    { key: 'spacing', element: <SpacingSection icon={<Ruler size={24} />} />, dividerAfter: true },
    { key: 'type', element: <TypographySection icon={<Type size={24} />} />, dividerAfter: false },
    { key: 'elevation', element: <ElevationSection icon={<Layers size={24} />} />, dividerAfter: true },
    { key: 'motion', element: <MotionSection icon={<Sparkles size={24} />} />, dividerAfter: false },
    { key: 'interactive', element: <InteractiveStatesSection icon={<SquareMousePointer size={24} />} />, dividerAfter: true },
    { key: 'components', element: <ComponentsSection icon={<Component size={24} />} />, dividerAfter: true },
    { key: 'accessibility', element: <AccessibilitySection icon={<PersonStanding size={24} />} />, dividerAfter: false },
  ];

  return (
    <section className={styles.pageWrap}>
      <Container className={styles.page}>
        <div className={styles.pageLayout}>
          <div>
            <Breadcrumbs
              items={SYSTEM_CORE_META.breadcrumbs}
            />
            <h1 className={styles.pageTitle}>{SYSTEM_CORE_META.title}</h1>
            <p className={styles.pageDesc}>{SYSTEM_CORE_META.description}</p>

            <hr className={styles.sectionDivider} />

            {sections.map((section) => (
              <Fragment key={section.key}>
                {section.element}
                {section.dividerAfter && <hr className={styles.sectionDivider} />}
              </Fragment>
            ))}
          </div>

          <aside className={styles.tocAside} aria-label="System core table of contents">
            <div className={styles.tocWrap}>
              <TableOfContents sections={SYSTEM_CORE_SECTIONS} scrollBehavior="instant" isSticky={false} />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default SystemCore;
