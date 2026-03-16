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
      No architecture is a silver bullet. Even with a clean contract, automated injection has to
      negotiate between mathematical accessibility and brand expression. These are the known
      trade-offs.
    </p>

    <div className={styles.constraintItem}>
      <Alert variant="warning" title="The Contrast Compromise">
        Some brands push high-chroma primaries that land below 4.5:1 on light backgrounds. The
        system accepts that for large headings where visual weight compensates. Inline body text
        stays on neutral tokens and never inherits the accent color directly.
      </Alert>
    </div>

    <div className={styles.constraintItem}>
      <Alert variant="info" title="The On-Accent Guardrail">
        Accent surfaces (buttons, badges, hero CTAs) always use{' '}
        <code className={styles.codeInline}>--sem-color-accent-strong-on-bg</code>, which is wired to{' '}
        <code className={styles.codeInline}>--brand-on-accent</code>. If a brand primary is too light, we
        override that one anchor and keep contrast sane without touching components.
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
