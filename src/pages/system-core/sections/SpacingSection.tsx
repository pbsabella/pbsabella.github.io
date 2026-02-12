import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';
import { LayoutConstraintsTable, SpacingTable } from '@/pages/system-core/SystemCoreTables';

type SpacingSectionProps = {
  icon: ReactNode;
};

const SpacingSection = ({ icon }: SpacingSectionProps) => (
  <section id="spacing-scale">
    <div className={styles.sectionHeader}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2>Spacing Scale</h2>
    </div>
    <p className={styles.sectionDesc}>
      Consistent spacing creates visual rhythm and hierarchy. All spacing uses a 4px base unit for precise control and flexibility.
    </p>
    <SpacingTable />

    <h3 className={styles.subsectionTitle}>Layout Constraints</h3>
    <p className={styles.sectionDesc}>
      Layout tokens define readable measures and container boundaries. This prevents one-off width literals and keeps composition decisions consistent.
    </p>
    <LayoutConstraintsTable />
  </section>
);

export default SpacingSection;
