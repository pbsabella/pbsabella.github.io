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
import { ROUTES } from '@/constants/routes';
import styles from './SystemCore.module.css';
import ColorSystemSection from './sections/ColorSystemSection';
import SemanticTokensSection from './sections/SemanticTokensSection';
import SpacingSection from './sections/SpacingSection';
import TypographySection from './sections/TypographySection';
import ElevationSection from './sections/ElevationSection';
import MotionSection from './sections/MotionSection';
import InteractiveStatesSection from './sections/InteractiveStatesSection';
import ComponentsSection from './sections/ComponentsSection';
import AccessibilitySection from './sections/AccessibilitySection';

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
              items={[
                { label: 'Home', to: ROUTES.HOME },
                { label: 'Labs', to: ROUTES.LABS },
                { label: 'System Core' },
              ]}
            />
            <h1 className={styles.pageTitle}>System Core</h1>
            <p className={styles.pageDesc}>
              A living reference of the design tokens, primitives, and components that <b>power this portfolio</b>. This system demonstrates a tiered token architecture (primitive → semantic → component) with a focus on maintainability, ensuring that the foundational elements used here translate directly into a cohesive and accessible user experience.
            </p>

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
