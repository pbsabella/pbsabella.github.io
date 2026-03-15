import EditorialBlock from '@/components/sections/EditorialBlock';
import Button from '@/components/ui/Button/Button';
import Tag from '@/components/ui/Tag/Tag';
import Badge from '@/components/ui/Badge/Badge';
import Card from '@/components/ui/Card/Card';
import styles from './PlaygroundSection.module.css';

const PlaygroundSection = () => (
  <EditorialBlock
    id="playground"
    kicker="07. Playground"
    title="Seeing is believing"
    rhythm="21"
  >
    <p>
      The playground renders curated components: Buttons, Tags, Cards, and Badges. When a brand
      is switched above, the anchors update and the Semantic layer re-evaluates. The components
      themselves never change — they simply reflect the new logic.
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
        <span className={styles.groupLabel}>Tags</span>
        <div className={styles.row}>
          <Tag variant="default">Default</Tag>
          <Tag variant="primary">Primary</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="info">Info</Tag>
          <Tag variant="error">Error</Tag>
        </div>
      </div>

      <div className={styles.showcaseGroup}>
        <span className={styles.groupLabel}>Badges</span>
        <div className={styles.row}>
          <Badge variant="success">3</Badge>
          <Badge variant="warning">!</Badge>
          <Badge variant="info">12</Badge>
          <Badge variant="error">99+</Badge>
        </div>
      </div>

      <div className={styles.showcaseGroup}>
        <span className={styles.groupLabel}>Cards</span>
        <div className={styles.row}>
          <Card variant="elevated">
            <p className={styles.miniCard}>Elevated surface</p>
          </Card>
          <Card variant="flat">
            <p className={styles.miniCard}>Flat surface</p>
          </Card>
          <Card variant="panel">
            <p className={styles.miniCard}>Panel surface</p>
          </Card>
        </div>
      </div>
    </div>
  </EditorialBlock>
);

export default PlaygroundSection;
