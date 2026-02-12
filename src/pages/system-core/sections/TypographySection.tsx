import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';
import { TypeScaleTable, FontWeightTable } from '@/pages/system-core/SystemCoreTables';

type TypographySectionProps = {
  icon: ReactNode;
};

const TypographySection = ({ icon }: TypographySectionProps) => (
  <section id="typography">
    <div className={styles.sectionHeader}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2>Typography</h2>
    </div>
    <p className={styles.sectionDesc}>
      Type scale uses fluid sizing (clamp) for responsive typography without breakpoints.
    </p>

    <h3 className={styles.subsectionTitle}>Type Scale</h3>
    <TypeScaleTable />

    <h3 className={styles.subsectionTitle}>Font Weights</h3>
    <FontWeightTable />
  </section>
);

export default TypographySection;
