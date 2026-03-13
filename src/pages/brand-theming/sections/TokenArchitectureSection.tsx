import { Box, Cpu, Layers, Plug } from 'lucide-react';
import EditorialBlock from '@/components/sections/EditorialBlock';
import IconList from '@/components/sections/IconList';
import CodeBlock from './CodeBlock';
import sectionStyles from '../../system-core/SystemCoreSections.module.css';

const LAYER_SNIPPET = `/* tokens.css */
@layer primitives, brand, semantic;

@layer brand {
  :root {
    --brand-primary:      #03b787;
    --brand-primary-bg:   #02855f;
    --brand-surface-tint: #e6f7f2;
  }
}

@layer semantic {
  :root {
    --sem-color-bg-accent:
      var(--brand-primary-bg, oklch(from var(--brand-primary, #ff5e32) calc(l * 0.85) c h));
  }
}`;

const TokenArchitectureSection = () => (
  <EditorialBlock id="token-architecture" kicker="04. Token Architecture" title="The Logic of Identity">
    <p>
      The refactor introduces a fourth named tier: <strong>Brand Anchors</strong> (
      <code>--brand-*</code>). CSS Cascade Layers enforce the contract. The semantic layer is still
      the last word, but now it reads through brand anchors instead of hardcoding a single accent.
    </p>
    <p>
      The declaration <code>@layer primitives, brand, semantic</code> in the core file locks the
      order. Because layers are declared up front, any brand file imported later automatically
      slots into the <code>brand</code> layer at the right cascade position.
    </p>

    <CodeBlock code={LAYER_SNIPPET} label="tokens.css - cascade order" />

    <h3 className={sectionStyles.subsectionTitle}>Token tiers</h3>
    <IconList
      variant="grid"
      items={[
        {
          icon: <Box size={20} />,
          title: 'PR (Primitives)',
          description: 'Raw scale values. The warehouse.',
        },
        {
          icon: <Plug size={20} />,
          title: 'BRAND (Anchors)',
          description: 'The injection interface. Brands fill these slots.',
        },
        {
          icon: <Layers size={20} />,
          title: 'SEM (Semantic)',
          description: 'The logic engine. Reads anchors to calculate intent and themes.',
        },
        {
          icon: <Cpu size={20} />,
          title: 'COMP (Component)',
          description: 'Local implementation scoped within CSS Modules.',
        },
      ]}
    />
  </EditorialBlock>
);

export default TokenArchitectureSection;
