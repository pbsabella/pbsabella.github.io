import EditorialBlock from '@/components/sections/EditorialBlock';
import Alert from '@/components/ui/Alert/Alert';
import styles from '../ThemingBuildNotes.module.css';
import CodeBlock from '@/components/ui/CodeBlock/CodeBlock';
import CssCascadeLayer from './CssCascadeLayer';

const SNIPPET = `/* Core setup: Semantic always wins because it is declared last */
@layer primitives, brand, semantic;
@layer brand {
  [data-brand='fintech'] {
    --brand-primary: oklch(38% 0.18 258deg);
    --brand-radius-md: 2px;
  }
}
@layer semantic {
  :root {
    /* Semantic layer consumes anchors. It stays authoritative. */
    --sem-color-action: var(--brand-primary);
    --sem-radius-md: var(--brand-radius-md);
  }
}`;

const InjectionSection = () => (
  <EditorialBlock
    id="injection"
    kicker="04. Injection"
    title="Working with the cascade, not against it"
    rhythm="21"
  >
    <p>
      The fix was to add a fourth tier, <strong>BRAND</strong>, managed via CSS Cascade Layers.
      The layer declaration order is the key insight. Because{' '}
      <code className={styles.code}>@layer semantic</code> is declared last, it always wins the cascade over{' '}
      <code className={styles.code}>@layer brand</code>.
    </p>

    <CodeBlock code={SNIPPET} label="CSS" />

    <p>
      Brands only fill <em>anchor slots</em> in the middle layer. They cannot accidentally
      break system logic because the Semantic layer has the final word. Removing a brand is as
      simple as removing a single{' '}
      <code className={styles.codeInline}>[data-brand]</code> block.
    </p>
    <ul className={styles.list}>
      <li>Brand files only set <code className={styles.codeInline}>--brand-*</code> anchors, never <code className={styles.codeInline}>--pr-*</code> or <code className={styles.codeInline}>--sem-*</code>.</li>
      <li>Each brand lives in <code className={styles.codeInline}>src/styles/brands/*.css</code> and is toggled via <code className={styles.codeInline}>data-brand</code> on <code className={styles.codeInline}>html</code>.</li>
      <li>Semantic tokens and theme logic stay centralized in <code className={styles.codeInline}>tokens.css</code>.</li>
    </ul>

    <CssCascadeLayer />

    <div className={styles.alertContainer}>
      <Alert variant="info" title="Why layer order matters">
        CSS Cascade Layers resolve conflicts by declaration order, not specificity. A rule in{' '}
        <code className={styles.codeInline}>@layer semantic</code>{' '}beats an identical rule in{' '}
        <code className={styles.codeInline}>@layer brand</code>{' '}— even if the brand rule has a higher-specificity selector.
      </Alert>
    </div>

    <p>
      This handles more than just color; it handles geometry. Components no longer touch
      primitive radius values. They consume <code className={styles.codeInline}>--sem-radius-md</code>, which reads from a
      brand anchor. This allows the UI to shift from pillowy to sharp by changing one variable in
      the Brand layer.
    </p>
    <p>
      With the layering solved, the next leverage point is how color gets derived.
    </p>
  </EditorialBlock>
);

export default InjectionSection;
