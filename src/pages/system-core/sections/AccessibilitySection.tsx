import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';
import Card from '@/components/ui/Card/Card';
import { A11Y_FEATURES } from '@/content/core';

type AccessibilitySectionProps = {
  icon: ReactNode;
};

const AccessibilitySection = ({ icon }: AccessibilitySectionProps) => (
  <section id="accessibility">
    <div className={styles.sectionHeader}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2>Accessibility</h2>
    </div>
    <p className={styles.sectionDesc}>
      This design system prioritizes WCAG 2.1 AA compliance with semantic HTML, keyboard navigation, and sufficient color contrast.
    </p>

    <div className={styles.grid}>
      {A11Y_FEATURES.map((feature) => (
        <Card variant="flat" key={feature.title}>
          <h3 className="h4">{feature.title}</h3>
          <p>{feature.desc}</p>
        </Card>
      ))}
    </div>
  </section>
);

export default AccessibilitySection;
