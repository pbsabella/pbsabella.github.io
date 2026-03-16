import EditorialBlock from '@/components/sections/EditorialBlock';
import styles from '../ThemingBuildNotes.module.css';
import CodeBlock from '@/components/ui/CodeBlock/CodeBlock';

const SNIPPET = `/* Linear flow: Primitive to Semantic to Component */
:root {
  --pr-color-green-600: #02855f;
  --sem-color-action: var(--pr-color-green-600);
}
.buttonPrimary {
  background-color: var(--sem-color-action);
}`

const BaselineSection = () => (
  <EditorialBlock id="baseline" kicker="02. Baseline" title="The standard three-tier struggle">
    <p>
      The baseline was a standard three-tier hierarchy.
      Values flowed linearly from raw data to the UI.
      A primary action color was just a semantic alias of a primitive.
    </p>
    <ul className={styles.list}>
      <li><strong>PR (Primitives):</strong> Raw, intent-neutral values (e.g. <code className={styles.code}>--pr-color-green-500</code>).</li>
      <li><strong>SEM (Semantic):</strong> Intent-driven tokens that read primitives and calculate themes (e.g. <code className={styles.code}>--sem-color-success</code>).</li>
      <li><strong>COMP (Component):</strong> Local implementation scoped within CSS Modules.</li>
    </ul>

    <CodeBlock code={SNIPPET} />
    <p>
      This structure feels clean until multiple brands and themes arrive, then the overrides
      start to stack.
    </p>
  </EditorialBlock>
);

export default BaselineSection;
