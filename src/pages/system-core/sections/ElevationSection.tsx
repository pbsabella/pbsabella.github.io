import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';
import { ELEVATIONS } from '@/content/core';

type ElevationSectionProps = {
  icon: ReactNode;
};

const ElevationSection = ({ icon }: ElevationSectionProps) => (
  <section id="elevation">
    <div className={styles.sectionHeader}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2>Elevation</h2>
    </div>
    <p className={styles.sectionDesc}>
      Shadows create depth and hierarchy, defining how elements <em>float</em> above the background. Shadow intensity adapts to the active theme.
    </p>

    <div className={styles.grid}>
      {ELEVATIONS.map((elevation) => (
        <div className={`${styles.cardContent} ${styles[elevation.className]}`} key={elevation.token}>
          <b>{elevation.level}</b>
          <code>{elevation.token}</code>
          <small>{elevation.desc}</small>
        </div>
      ))}
    </div>
  </section>
);

export default ElevationSection;
