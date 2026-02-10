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
import ColorSystemSection from './system-core/sections/ColorSystemSection';
import SemanticTokensSection from './system-core/sections/SemanticTokensSection';
import SpacingSection from './system-core/sections/SpacingSection';
import TypographySection from './system-core/sections/TypographySection';
import ElevationSection from './system-core/sections/ElevationSection';
import MotionSection from './system-core/sections/MotionSection';
import InteractiveStatesSection from './system-core/sections/InteractiveStatesSection';
import ComponentsSection from './system-core/sections/ComponentsSection';
import AccessibilitySection from './system-core/sections/AccessibilitySection';

const SystemCore = () => {
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

            <ColorSystemSection icon={<Palette size={24} />} />

            <hr className={styles.sectionDivider} />

            <SemanticTokensSection icon={<Layers size={24} />} />

            <hr className={styles.sectionDivider} />

            <SpacingSection icon={<Ruler size={24} />} />

            <hr className={styles.sectionDivider} />

            <TypographySection icon={<Type size={24} />} />

            <ElevationSection icon={<Layers size={24} />} />

            <hr className={styles.sectionDivider} />

            <MotionSection icon={<Sparkles size={24} />} />

            <InteractiveStatesSection icon={<SquareMousePointer size={24} />} />

            <hr className={styles.sectionDivider} />

            <ComponentsSection icon={<Component size={24} />} />

            <hr className={styles.sectionDivider} />

            <AccessibilitySection icon={<PersonStanding size={24} />} />
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
