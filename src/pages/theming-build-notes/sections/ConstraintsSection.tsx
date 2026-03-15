import EditorialBlock from '@/components/sections/EditorialBlock';
import Alert from '@/components/ui/Alert/Alert';
import styles from '../ThemingBuildNotes.module.css';

const ConstraintsSection = () => (
  <EditorialBlock
    id="constraints"
    kicker="09. Constraints"
    title="Guardrails and trade-offs"
    rhythm="21"
  >
    <p>
      No architecture is a silver bullet. A system built on automated injection must occasionally
      negotiate between mathematical accessibility and brand expression. These are the known
      trade-offs.
    </p>

    <div className={styles.constraintItem}>
      <Alert variant="warning" title="The Contrast Compromise">
        The Editorial brand uses a vibrant orange that hits ~3.5:1 on light backgrounds — below
        the 4.5:1 WCAG AA standard. The system accepts this for large headings where visual weight
        compensates for lower contrast ratio. Inline body text is never set in the accent orange.
      </Alert>
    </div>

    <div className={styles.constraintItem}>
      <Alert variant="info" title="The Tag Guardrail">
        To handle edge cases like this, the Tag component was refactored with a{' '}
        <code className={styles.code}>primary</code> variant. It utilizes{' '}
        <code className={styles.code}>--sem-color-text-on-accent</code>, which automatically flips the text to dark if the
        brand primary is too light — such as Fintech Amber or Editorial Orange.
      </Alert>
    </div>

    <div className={styles.constraintItem}>
      <Alert variant="default" title="Browser Requirements">
        This architecture relies on <strong>CSS Relative Color Syntax</strong> and{' '}
        <strong>Cascade Layers</strong>. It targets modern evergreen browsers (2024+), trading
        legacy support for a codebase that requires significantly less maintenance. Both features
        have broad support in Chrome 111+, Firefox 113+, and Safari 16.4+.
      </Alert>
    </div>
  </EditorialBlock>
);

export default ConstraintsSection;
