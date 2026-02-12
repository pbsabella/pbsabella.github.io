import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';

type InteractiveStatesSectionProps = {
  icon: ReactNode;
};

const InteractiveStatesSection = ({ icon }: InteractiveStatesSectionProps) => (
  <section id="interactive-states">
    <div className={styles.sectionHeader}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2>Interactive States</h2>
    </div>
    <p className={styles.sectionDesc}>
      All interactive elements support hover, focus, and active states for accessibility and user feedback.
    </p>

    <h3 className={styles.subsectionTitle}>Link States</h3>
    <div className={styles.statesDemo}>
      <a className="link" href="#default">Default</a>
      <a className="link" href="#hover">Hover (underline)</a>
      <a
        className="link"
        href="#focus"
        style={{
          outline: '2px solid var(--sem-color-focus-ring)',
          outlineOffset: 'var(--sem-focus-outline-offset)',
          borderRadius: 'var(--sem-focus-outline-radius)',
        }}
      >
        Focus (outline)
      </a>
    </div>

    <h3 className={styles.subsectionTitle}>Focus Indicators</h3>
    <p className={styles.sectionDesc}>
      All focusable elements have a 2px brand-colored outline for keyboard navigation accessibility.
    </p>
  </section>
);

export default InteractiveStatesSection;
