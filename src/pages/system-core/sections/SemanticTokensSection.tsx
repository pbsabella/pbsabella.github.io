import { ReactNode } from 'react';
import styles from '../SystemCoreSections.module.css';
import { COLOR_GROUPS } from '@/content/core';
import { TokenTable } from '../SystemCoreTables';

type SemanticTokensSectionProps = {
  icon: ReactNode;
};

const SemanticTokensSection = ({ icon }: SemanticTokensSectionProps) => {
  const accentTokens = COLOR_GROUPS.semantic.state.filter((token) =>
    token.name.startsWith('Accent')
  );
  const stateTokens = COLOR_GROUPS.semantic.state.filter((token) =>
    !token.name.startsWith('Accent')
  );

  return (
    <section id="semantic-tokens">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIcon} aria-hidden="true">
          {icon}
        </span>
        <h2>Semantic Tokens</h2>
      </div>
      <p className={styles.sectionDesc}>
        Semantic tokens translate primitives into intent. Grouping them by surface, text, border, and state keeps naming consistent and theming predictable, mirroring how UI decisions are made.
      </p>

      <h3 className={styles.subsectionTitle}>Surface</h3>
      <TokenTable tokens={COLOR_GROUPS.semantic.surface} />

      <h3 className={styles.subsectionTitle}>Text</h3>
      <TokenTable tokens={COLOR_GROUPS.semantic.text} />

      <h3 className={styles.subsectionTitle}>Border</h3>
      <TokenTable tokens={COLOR_GROUPS.semantic.border} />

      <h3 className={styles.subsectionTitle}>Accent</h3>
      <TokenTable tokens={accentTokens} />

      <h3 className={styles.subsectionTitle}>State</h3>
      <TokenTable tokens={stateTokens} />
    </section>
  );
};

export default SemanticTokensSection;
