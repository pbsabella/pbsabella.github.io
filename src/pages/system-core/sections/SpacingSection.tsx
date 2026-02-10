import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';
import { SpacingTable } from '../SystemCoreTables';

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
  </section>
);

export default SpacingSection;
