import { Link } from 'react-router-dom';
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
import { ROUTES } from '@/constants/routes';
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
const brandPrimary: Record<Brand, string> = {
  portfolio: 'oklch(67% 0.149 163deg)',
  fintech: 'oklch(38% 0.18 258deg)',
  saas: 'oklch(54% 0.29 308deg)',
  editorial: 'oklch(46% 0.19 24deg)',
  neon: 'oklch(54% 0.31 342deg)',
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

  return (
    <EditorialBlock
      id="playground"
      kicker="07. Playground"
      title="The brand layer in motion"
      rhythm="16"
    >
      <p>
        The original three-tier system flows COMP → SEM → PR
        (see {' '}<Link className={styles.link} to={`${ROUTES.DESIGN_SYSTEM_BUILD_NOTES}#demo`}>design system build notes</Link>).
        Adding a brand layer intercepts that chain: semantic tokens now read from brand anchors, and
        brands resolve to primitives.
      </p>

      <FigureBlock caption="Token traces and live components showing how the brand anchor sits between semantic intent and primitive value.">
        <MockupFrame variant="browser">
          <p className={styles.demo}>
            A tiny slice of the system in motion. Switch brands or themes to watch terminal values update in real time.
          </p>
          <div className={styles.flowThemeRow}>
            <p className={styles.flowHierarchy}>Revised trace flow: COMP → SEM → BRAND → PR</p>
            <BrandThemeToggle id="playground-brand-theme-toggle" />
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
                  <Tag variant="success" size="sm">Success</Tag>
                  <Tag variant="info" size="sm">Info</Tag>
                  <Badge variant="error" size="md">5</Badge>
                  <Badge variant="info" size="md">NEW</Badge>
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
                Primary button color derives from <code className={styles.code}>--brand-primary</code> via OKLCH relative color — no hardcoded values in the component.
              </p>
              <div className={styles.pipelines}>
                <div className={styles.pipelineTagRow}>
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                </div>
                <div className={styles.pipelineRow}>
                  <code className={styles.code}>--sem-color-action</code>
                  <PipelineConnector />
                  <code className={styles.code}>--brand-primary</code>
                  <PipelineConnector />
                  <code className={`${styles.code} ${styles.pipelineValue}`}>{primaryAnchor}</code>
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
