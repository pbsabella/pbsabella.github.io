import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';
import Table from '@/components/ui/Table/Table';
import { ANIMATION } from '@/content/core';

type MotionSectionProps = {
  icon: ReactNode;
};

const renderAnimationTable = (rows: Array<{ name: string; token: string; desc: string }>) => (
  <div className={styles.tokenTable}>
    <Table
      variant="striped"
      columns={[
        { label: 'Name' },
        { label: 'Token' },
        { label: 'Notes' },
      ]}
      rows={rows.map((row) => [
        <span key={`${row.token}-name`}>{row.name}</span>,
        <code key={`${row.token}-token`}>{row.token}</code>,
        <span key={`${row.token}-desc`}>{row.desc}</span>,
      ])}
    />
  </div>
);

const MotionSection = ({ icon }: MotionSectionProps) => (
  <section id="animations">
    <div className={styles.sectionHeader}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2>Transitions & Motion</h2>
    </div>
    <p className={styles.sectionDesc}>
      Animation timing is intentional: fast easing for UI feedback, smooth easing for interactive navigation.
    </p>

    <h3 className={styles.subsectionTitle}>Duration Scale</h3>
    {renderAnimationTable(ANIMATION.durations)}

    <h3 className={styles.subsectionTitle}>Easing Functions</h3>
    {renderAnimationTable(ANIMATION.easings)}
  </section>
);

export default MotionSection;
