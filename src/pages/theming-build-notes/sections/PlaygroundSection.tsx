import EditorialBlock from '@/components/sections/EditorialBlock';
import Alert from '@/components/ui/Alert/Alert';
import Button from '@/components/ui/Button/Button';
import Tag from '@/components/ui/Tag/Tag';
import Badge from '@/components/ui/Badge/Badge';
import Card from '@/components/ui/Card/Card';
import styles from './PlaygroundSection.module.css';

const PlaygroundSection = () => (
  <EditorialBlock
    id="playground"
    kicker="07. Playground"
    title="Remap in real time"
    rhythm="21"
  >
    <p>
      After picking a preset, flip the brand + mode controls and watch the semantic layer remap
      in real time. These components are intentionally stable; only the tokens shift, so the same
      UI expresses a new mood without a redesign pass.
    </p>

    <div className={styles.showcase}>

      <div className={styles.showcaseGroup}>
        <span className={styles.groupLabel}>Buttons</span>
        <div className={styles.row}>
          <Button variant="primary" size="md">Primary Action</Button>
          <Button variant="secondary" size="md">Secondary</Button>
          <Button variant="primary" size="sm">Small</Button>
        </div>
      </div>

      <div className={styles.showcaseGroup}>
        <span className={styles.groupLabel}>Status Markers</span>
        <div className={styles.row}>
          <Tag variant="default">Default</Tag>
          <Tag variant="primary">Primary</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="info">Info</Tag>
          <Tag variant="error">Error</Tag>
          <Badge variant="success">Live</Badge>
          <Badge variant="warning">Beta</Badge>
          <Badge variant="info">12</Badge>
          <Badge variant="error">99+</Badge>
        </div>
      </div>

      <div className={styles.showcaseGroup}>
        <span className={styles.groupLabel}>Alerts</span>
        <div className={styles.stack}>
          <Alert variant="info" title="Semantic refresh">
            Accent anchors recalculated for this brand.
          </Alert>
          <Alert variant="success" title="Contrast pass">
            Primary text clears 4.6:1 against base surfaces.
          </Alert>
          <Alert variant="warning" title="Brand drift">
            Secondary hue shifted +8 degrees after palette tuning.
          </Alert>
        </div>
      </div>

      <div className={styles.showcaseGroup}>
        <span className={styles.groupLabel}>Cards</span>
        <div className={styles.row}>
          <Card variant="elevated" isInteractive={true}>
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>Elevated</span>
              <span className={styles.cardMeta}>Floating emphasis</span>
              <div className={styles.cardRow}>
                <Tag variant="primary" size="sm">Primary</Tag>
                <Tag variant="info" size="sm">Surface</Tag>
              </div>
            </div>
          </Card>
          <Card variant="flat">
            <div className={styles.cardBody}>
              <span className={styles.cardTitle}>Flat</span>
              <span className={styles.cardMeta}>Quiet structure</span>
              <div className={styles.cardRow}>
                <Tag variant="default" size="sm">Neutral</Tag>
                <Tag variant="success" size="sm">Stable</Tag>
              </div>
            </div>
          </Card>
          <Card variant="panel" tone="dashed">
            <div className={styles.panelBody}>
              <div className={styles.cardBody}>
                <span className={styles.cardTitle}>Panel</span>
                <span className={styles.cardMeta}>Structured stack</span>
                <div className={styles.cardRow}>
                  <Tag variant="warning" size="sm">Contrast</Tag>
                  <Tag variant="error" size="sm">Edge</Tag>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </EditorialBlock>
);

export default PlaygroundSection;
