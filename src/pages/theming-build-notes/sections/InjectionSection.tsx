import EditorialBlock from '@/components/sections/EditorialBlock';
import Alert from '@/components/ui/Alert/Alert';
import styles from '../ThemingBuildNotes.module.css';
import CodeBlock from './CodeBlock';

const SNIPPET = `/* Core setup: Semantic always wins because it is declared last */
@layer primitives, brand, semantic;

@layer brand {
  [data-brand='fintech'] {
    --brand-primary: oklch(49% 0.22 261);
    --brand-radius-md: 2px;
  }
}

@layer semantic {
  :root {
    /* Semantic layer consumes the anchor. It stays authoritative. */
    --sem-color-bg-accent: var(--brand-primary);
    --sem-radius-md: var(--brand-radius-md);
  }
}
`;

const InjectionSection = () => (
  <EditorialBlock
    id="injection"
    kicker="04. Injection"
    title="Working with the cascade, not against it"
    rhythm="21"
  >
    <p>
      The solution introduces a fourth tier: <strong>BRAND</strong>, managed via CSS Cascade
      Layers. The layer declaration order is the key insight — because{' '}
      <code className={styles.code}>@layer semantic</code> is declared last, it always wins the cascade over{' '}
      <code className={styles.code}>@layer brand</code>.
    </p>
    <CodeBlock code={SNIPPET} label="CSS" />
    <p>
      Brands only fill <em>anchor slots</em> in the middle layer. They cannot accidentally
      break system logic because the Semantic layer has the final word. Removing a brand is as
      simple as removing a single{' '}
      <code className={styles.code}>[data-brand]</code> block.
    </p>
    <Alert variant="info" title="Why layer order matters">
      CSS Cascade Layers resolve conflicts by declaration order, not specificity. A rule in{' '}
      <code className={styles.code}>@layer semantic</code> beats an identical rule in{' '}
      <code className={styles.code}>@layer brand</code> — even if the brand rule has a higher-specificity selector.
    </Alert>
    <p>
      This handles more than just color; it handles geometry. Components no longer touch
      primitive radius values. They consume <code className={styles.code}>--sem-radius-md</code>, which reads from a
      brand anchor. This allows the UI to shift from Pillowy (14px) to Sharp (0px) by changing
      one variable in the Brand layer.
    </p>
    <p className={styles.equation}>
      <span className={styles.equationAccent}>Brands</span>
      {' + '}
      <span className={styles.equationAccent}>Themes</span>
      {' = Total Work'}
    </p>
  </EditorialBlock>
);

export default InjectionSection;
