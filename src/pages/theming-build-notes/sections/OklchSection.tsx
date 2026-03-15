import EditorialBlock from '@/components/sections/EditorialBlock';
import styles from '../ThemingBuildNotes.module.css';
import CodeBlock from './CodeBlock';

const SNIPPET = `@layer semantic {
  [data-theme='dark'] {
    /* Automatically derive a light version for text contrast */
    --sem-color-accent-strong: oklch(from var(--brand-primary) 75% c h);

    /* Derive a dark, punchy background for buttons */
    --sem-color-bg-accent: oklch(from var(--brand-primary) 35% 0.15 h);
  }
}
`;

const OklchSection = () => (
  <EditorialBlock
    id="oklch"
    kicker="05. OKLCH"
    title="Color with a brain"
    rhythm="21"
  >
    <div>
      <p>
        The migration to <code className={styles.code}>oklch()</code> provides perceptual uniformity — colors at the
        same lightness value look equally bright to the human eye, regardless of hue. This makes
        it safe to mathematically derive UI states without manual color tuning per brand.
      </p>
      <p>
        By utilizing <strong>Relative Color Syntax</strong>, the system auto-generates accessible
        variants without brand-specific overrides. The{' '}
        <code className={styles.code}>from var(--brand-primary)</code> syntax extracts the hue channel (<code className={styles.code}>h</code>)
        and reuses it while overriding lightness (<code className={styles.code}>l</code>) and chroma (<code className={styles.code}>c</code>)
        independently.
      </p>
      <p>
        One block of code now handles dark mode contrast for every brand. System complexity
        collapses:
      </p>
      <p className={styles.equation}>
        <span className={styles.equationAccent}>Brands</span>
        {' + '}
        <span className={styles.equationAccent}>Themes</span>
        {' = Total Work'}
      </p>
      <p>
        Adding a sixth brand requires zero dark mode work. The Semantic layer handles it
        automatically.
      </p>
    </div>
    <CodeBlock code={SNIPPET} label="CSS" />
  </EditorialBlock>
);

export default OklchSection;
