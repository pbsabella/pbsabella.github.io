import { useBrand } from '@context/BrandContext';
import { useTheme } from '@context/ThemeContext';
import type { Brand } from '@context/BrandContext';
import EditorialBlock from '@/components/sections/EditorialBlock';
import FigureBlock from '@/components/sections/FigureBlock';
import MockupFrame from '@/components/sections/MockupFrame';
import Button from '@/components/ui/Button/Button';
import Badge from '@/components/ui/Badge/Badge';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import BrandThemeToggle from '@/components/ui/BrandThemeToggle/BrandThemeToggle';
import { ArrowRight } from 'lucide-react';
import styles from './PlaygroundSection.module.css';

const bgPrimitiveLight = '--pr-color-neutral-100';
const bgPrimitiveDark: Record<Brand, string> = {
  portfolio: '--pr-color-gray-900',
  fintech: 'oklch(17% 0.07 258deg)',
  saas: 'oklch(17% 0.08 300deg)',
  editorial: 'oklch(19% 0.04 50deg)',
  neon: 'oklch(15% 0.12 295deg)',
};
const radiusPrimitive: Record<Brand, string> = {
  portfolio: '4px',
  fintech: '2px',
  saas: '6px',
  editorial: '0px',
  neon: '10px',
};
const tagRadiusPrimitive: Record<Brand, string> = {
  portfolio: '9999px',
  fintech: '9999px',
  saas: '9999px',
  editorial: '2px',
  neon: '9999px',
};
// --brand-primary is the single defined anchor per brand; it does not change with mode.
const brandPrimary: Record<Brand, string> = {
  portfolio: 'oklch(67% 0.149 163deg)',
  fintech: 'oklch(38% 0.18 258deg)',
  saas: 'oklch(54% 0.29 308deg)',
  editorial: 'oklch(46% 0.19 24deg)',
  neon: 'oklch(54% 0.31 342deg)',
};

// --sem-color-action is computed from --brand-primary via OKLCH relative color.
// Light: oklch(from var(--brand-primary) calc(l * 0.80) c h)
// Dark:  oklch(from var(--brand-primary) 53% c h)
const semColorAction: Record<Brand, { light: string; dark: string }> = {
  portfolio: { light: 'oklch(53.6% 0.149 163deg)', dark: 'oklch(53% 0.149 163deg)' },
  fintech: { light: 'oklch(30.4% 0.18 258deg)', dark: 'oklch(53% 0.18 258deg)' },
  saas: { light: 'oklch(43.2% 0.29 308deg)', dark: 'oklch(53% 0.29 308deg)' },
  editorial: { light: 'oklch(36.8% 0.19 24deg)', dark: 'oklch(53% 0.19 24deg)' },
  neon: { light: 'oklch(43.2% 0.31 342deg)', dark: 'oklch(53% 0.31 342deg)' },
};

const PipelineConnector = () => (
  <span className={styles.pipelineConnector}>
    <ArrowRight size={12} role="img" aria-label="to" />
  </span>
);

const PlaygroundSection = () => {
  const { brand } = useBrand();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgPrimitive = isDark ? bgPrimitiveDark[brand] : bgPrimitiveLight;
  const radius = radiusPrimitive[brand];
  const tagRadius = tagRadiusPrimitive[brand];
  const primaryAnchor = brandPrimary[brand];
  const semAction = isDark ? semColorAction[brand].dark : semColorAction[brand].light;
  const semActionFormula = isDark
    ? 'oklch(from … 53% c h)'
    : 'oklch(from … calc(l × 0.80) c h)';

  return (
    <EditorialBlock
      id="playground"
      kicker="07. Playground"
      title="The brand layer in motion"
      rhythm="16"
    >
      <p>
        This portfolio serves as a reference implementation of the injection model.
        It is configured to demonstrate the interaction between brand anchors and
        semantic logic across various design profiles.
      </p>

      <FigureBlock caption="Token traces and live components showing how the brand anchor sits between semantic intent and primitive value.">
        <MockupFrame variant="browser">
          <p className={styles.demo}>
            Switch brands or themes to watch terminal values update in real time.
          </p>
          <div className={styles.flowThemeRow}>
            <p className={styles.flowHierarchy}>Revised trace flow: COMP → SEM → BRAND → PR</p>
            <BrandThemeToggle id="playground-brand-theme-toggle" lockScroll />
          </div>

          <div className={styles.demoShowcase}>
            <Card isInteractive={true}>
              <div className={styles.flowTitle}>Surface</div>
              <p className={styles.flowMeta}>
                Background resolves through a brand surface anchor, enabling tinted dark surfaces per brand.
              </p>
              <div className={styles.pipelines}>
                <div className={styles.pipelineRow}>
                  <code className={styles.code}>--comp-card-bg</code>
                  <PipelineConnector />
                  <code className={styles.code}>--sem-color-bg-base</code>
                  <PipelineConnector />
                  <code className={styles.code}>--brand-bg-base</code>
                  <PipelineConnector />
                  <code className={`${styles.code} ${styles.pipelineValue}`}>{bgPrimitive}</code>
                </div>
              </div>
            </Card>

            <Card variant="flat">
              <div className={styles.flowTitle}>Radius</div>
              <p className={styles.flowMeta}>
                Corner radius resolves through a brand geometry anchor, giving each brand its own shape personality.
              </p>
              <div className={styles.pipelines}>
                <div className={styles.pipelineRow}>
                  <code className={styles.code}>--comp-card-radius</code>
                  <PipelineConnector />
                  <code className={styles.code}>--sem-radius-md</code>
                  <PipelineConnector />
                  <code className={styles.code}>--brand-radius-md</code>
                  <PipelineConnector />
                  <code className={`${styles.code} ${styles.pipelineValue}`}>{radius}</code>
                </div>
              </div>
            </Card>

            <Card variant="flat">
              <div className={styles.flowTitle}>Status pill</div>
              <p className={styles.flowMeta}>
                Tags and badges default to pill shape via <code className={styles.code}>--brand-radius-pill</code>. Brands can override to suppress the pill entirely.
              </p>
              <div className={styles.pipelines}>
                <div className={styles.pipelineTagRow}>
                  <Tag variant="primary" size="sm">Primary</Tag>
                  <Tag variant="info" size="sm">Info</Tag>
                  <Tag variant="success" size="sm">Success</Tag>
                  <Tag variant="warning" size="sm">Warning</Tag>
                  <Tag variant="error" size="sm">Error</Tag>
                </div>

                <div className={styles.pipelineTagRow}>
                  <Badge variant="info" size="md">NEW</Badge>
                  <Badge variant="success" size="md">3</Badge>
                  <Badge variant="warning" size="md">5</Badge>
                  <Badge variant="error" size="md">99</Badge>
                </div>
                <div className={styles.pipelineRow}>
                  <code className={styles.code}>--comp-tag-radius</code>
                  <PipelineConnector />
                  <code className={styles.code}>--sem-radius-pill</code>
                  <PipelineConnector />
                  <code className={styles.code}>--brand-radius-pill</code>
                  <PipelineConnector />
                  <code className={`${styles.code} ${styles.pipelineValue}`}>{tagRadius}</code>
                </div>
              </div>
            </Card>

            <Card variant="flat">
              <div className={styles.flowTitle}>Button action</div>
              <p className={styles.flowMeta}>
                Only <code className={styles.code}>--brand-primary</code> is defined per brand. <code className={styles.code}>--sem-color-action</code> is computed from it — lightness adjusted per mode, chroma and hue preserved.
              </p>
              <div className={styles.pipelines}>
                <div className={styles.pipelineTagRow}>
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                </div>
                <div className={styles.pipelineRow}>
                  <code className={styles.code}>--brand-primary</code>
                  <PipelineConnector />
                  <code className={`${styles.code} ${styles.pipelineValue}`}>{primaryAnchor}</code>
                  <span className={styles.pipelineLabel}>1 token defined</span>
                </div>
                <div className={styles.pipelineRow}>
                  <code className={styles.code}>--sem-color-action</code>
                  <PipelineConnector />
                  <code className={styles.code}>{semActionFormula}</code>
                  <PipelineConnector />
                  <code className={`${styles.code} ${styles.pipelineValue}`}>{semAction}</code>
                </div>
              </div>
            </Card>
          </div>
        </MockupFrame>
      </FigureBlock>
    </EditorialBlock>
  );
};

export default PlaygroundSection;
