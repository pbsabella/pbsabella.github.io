import EditorialBlock from '@/components/sections/EditorialBlock';
import styles from '../ThemingBuildNotes.module.css';
import CodeBlock from './CodeBlock';

const SNIPPET = `/* Linear flow: Primitive to Semantic to Component */
:root {
  --pr-color-green-600: #02855f;
  --sem-color-bg-accent: var(--pr-color-green-600);
}

.buttonPrimary {
  background-color: var(--sem-color-bg-accent);
}
`

const BaselineSection = () => (
  <EditorialBlock id="baseline" kicker="02. Baseline" title="The standard three-tier struggle">
    <p>
      The system originally relied on a standard three-tier hierarchy.
      Values flowed linearly from raw data to the UI.
    </p>
    <ul className={styles.list}>
      <li><strong>PR (Primitives):</strong> Raw, intent-neutral values (e.g. <code className={styles.code}>--pr-color-green-500</code>).</li>
      <li><strong>SEM (Semantic):</strong> Intent-driven tokens that read primitives and calculate themes (e.g. <code className={styles.code}>--sem-color-success</code>).</li>
      <li><strong>COMP (Component):</strong> Local implementation scoped within CSS Modules.</li>
    </ul>

    <CodeBlock code={SNIPPET} />
  </EditorialBlock>
);

export default BaselineSection;
