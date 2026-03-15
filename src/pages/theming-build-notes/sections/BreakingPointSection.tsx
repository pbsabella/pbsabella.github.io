import EditorialBlock from '@/components/sections/EditorialBlock';
import styles from '../ThemingBuildNotes.module.css';
import CodeBlock from './CodeBlock';

const SNIPPET = `/* BEFORE: Combinatorial complexity */
[data-brand='fintech'][data-theme='dark'] {
  --sem-color-bg-accent: var(--pr-color-blue-600);
}
`;

const BreakingPointSection = () => (
  <EditorialBlock
    id="breaking-point"
    kicker="03. Breaking Point"
    title="Death by a thousand overrides"
    rhythm="21"
  >
    <p>
      Previously, semantic tokens mapped directly to primitives. Supporting a new brand meant the
      semantic tier had to be manually redefined. This created a maintenance nightmare when combined
      with dark mode.
    </p>
    <p>
      To support a Fintech brand in dark mode, a specific compound selector was required to ensure
      the accent color remained accessible on dark surfaces.
    </p>

    <CodeBlock code={SNIPPET} label="BEFORE" />

    <p>
      Every new brand added a new set of manual overrides. The result is a combinatorial explosion:
    </p>
    <p className={styles.equation}>
      <span className={styles.equationAccent}>Brands</span>
      {' × '}
      <span className={styles.equationAccent}>Themes</span>
      {' = Total Work'}
    </p>
    <p>
      This is not a scalable model. Adding a fifth brand or a third theme means the override
      surface doubles again.
    </p>

    <ul className={styles.list}>
      <li>Each brand requires its own semantic redefinition block.</li>
      <li>Dark mode multiplies that work by the number of brands.</li>
      <li>Removing a brand means hunting for compound selectors scattered across the stylesheet.</li>
    </ul>
  </EditorialBlock>
);

export default BreakingPointSection;
