import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';
import { COLOR_GROUPS } from '@/content/core';
import { TokenTable } from '@/pages/system-core/SystemCoreTables';

type ColorSystemSectionProps = {
  icon: ReactNode;
};

const ColorSystemSection = ({ icon }: ColorSystemSectionProps) => (
  <section id="color-system">
    <div className={styles.sectionHeader}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2>Color System</h2>
    </div>
    <p className={styles.sectionDesc}>
      Primitives define the raw palette that powers everything else. These foundational values never ship directly to components.
    </p>

    <h3 className={styles.subsectionTitle}>Primitives</h3>
    <p className={styles.sectionDesc}>
      The raw palette serves as the base source of truth, defining the full range of available hues and scales. These foundational values provide the depth necessary to populate the semantic layers without being used directly in component styles.
    </p>

    <h4 className={styles.subsectionTitle}>Green Scale (brand)</h4>
    <TokenTable tokens={COLOR_GROUPS.primitives.green} showValue />

    <h4 className={styles.subsectionTitle}>Neutral Scale (warm)</h4>
    <TokenTable tokens={COLOR_GROUPS.primitives.neutral} showValue />

    <h4 className={styles.subsectionTitle}>Gray Scale (cool)</h4>
    <TokenTable tokens={COLOR_GROUPS.primitives.gray} showValue />

    <h4 className={styles.subsectionTitle}>Accent</h4>
    <TokenTable tokens={COLOR_GROUPS.primitives.accent} showValue />

    <h4 className={styles.subsectionTitle}>Status</h4>
    <TokenTable tokens={COLOR_GROUPS.primitives.status} showValue />
  </section>
);

export default ColorSystemSection;
