import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from '../SystemCoreSections.module.css';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import Badge from '@/components/ui/Badge/Badge';
import Alert from '@/components/ui/Alert/Alert';
import Button from '@/components/ui/Button/Button';
import Table from '@/components/ui/Table/Table';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';

// TODO: Add a dedicated Link component under ui/ and document it in this section
type ComponentsSectionProps = {
  icon: ReactNode;
};

const ComponentsSection = ({ icon }: ComponentsSectionProps) => (
  <section id="components">
    <div className={styles.sectionHeader}>
      <span className={styles.sectionIcon} aria-hidden="true">
        {icon}
      </span>
      <h2>Components</h2>
    </div>
    <p className={styles.sectionDesc}>
      Encapsulated, reusable units that consume tokens to ensure consistent behavior and styling.
    </p>

    <h3 className={styles.subsectionTitle}>Alerts</h3>
    <p className={styles.sectionDesc}>
      Contextual messaging with semantic variants. Alerts are theme-aware and keep contrast consistent across modes.
    </p>
    <div className={styles.alertDemo}>
      <Alert variant="info" title="Info">
        Use for neutral system updates.
      </Alert>
      <Alert variant="success" title="Success">
        Confirm completed actions.
      </Alert>
      <Alert variant="warning" title="Warning">
        Highlight risky or destructive actions.
      </Alert>
      <Alert variant="error" title="Error">
        Communicate failures or blocked states.
      </Alert>
    </div>

    <h3 className={styles.subsectionTitle}>Cards</h3>
    <p className={styles.sectionDesc}>
      Reusable card wrapper with consistent styling, hover effects, and theme support.
    </p>
    <div className={`${styles.grid} ${styles.gridWide}`}>
      <Card isInteractive={true}>
        <h4>Elevated</h4>
        <p>
          The standard container style, using depth and shadow to create visual separation from the page background.
        </p>
      </Card>
      <Card variant="flat">
        <h4>Flat</h4>
        <p>
          A bordered variant for structural grouping. Provides containment without depth, ideal for nested content or layout sections.
        </p>
      </Card>
      <Card variant="flat" tone="dashed">
        <h4>Flat Dashed</h4>
        <p>
          A low-emphasis tone for placeholders or provisional containers while preserving the flat card surface model.
        </p>
      </Card>
    </div>

    <h3 className={styles.subsectionTitle}>Tags</h3>
    <p className={styles.sectionDesc}>
      Compact labels used to categorize content or display metadata. These are designed to provide quick visual recognition of attributes or topics.
    </p>
    <div className={styles.tagsDemo}>
      <Tag>Default</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
    </div>

    <h3 className={styles.subsectionTitle}>Buttons</h3>
    <p className={styles.sectionDesc}>
      Action triggers with distinct treatments to signal hierarchy and emphasis.
    </p>
    <div className={styles.buttonDemo}>
      <Button>Primary Md</Button>
      <Button variant="secondary" as="a" href="#">Secondary Md</Button>
      <Button size="sm">Primary Sm</Button>
      <Button variant="secondary" size="sm" as={Link} to="/">Secondary Sm</Button>
    </div>

    <h3 className={styles.subsectionTitle}>Badges</h3>
    <p className={styles.sectionDesc}>
      Small indicators used to show counts, statuses, or highlight information. Badges are ideal for notifications, item counts, or visual cues that require minimal space.
    </p>
    <div className={styles.tagsDemo}>
      <Badge variant="info" size="sm" />
      <Badge variant="success" size="sm" />
      <Badge variant="warning" size="sm" />
      <Badge variant="error" size="sm" aria-label="Error status dot" />

      <Badge variant="info">1</Badge>
      <Badge variant="success">3</Badge>
      <Badge variant="warning" size="lg">9</Badge>
      <Badge variant="error" size="lg">99+</Badge>
    </div>

    <h3 className={styles.subsectionTitle}>Breadcrumbs</h3>
    <p className={styles.sectionDesc}>
      A secondary navigation aid that helps users understand their location within a hierarchical structure.
    </p>
    <div>
      <Breadcrumbs
        items={[
          { label: 'Home', to: '/' },
          { label: 'Labs', to: '/' },
          { label: 'Design System Build Notes' },
        ]}
      />
    </div>

    <h3 className={styles.subsectionTitle}>Tables</h3>
    <p className={styles.sectionDesc}>An interface for organizing and displaying dense sets of structured data.</p>
    <div className={styles.tokenTable}>
      <Table
        variant="striped"
        columns={[
          { label: 'Component' },
          { label: 'Intent' },
        ]}
        rows={[
          ['Alerts', 'Feedback + status'],
          ['Cards', 'Structure + layout'],
          ['Buttons', 'Primary actions'],
          ['Tags', 'Meta labels'],
          ['Badges', 'Counts + status'],
          ['Breadcrumbs', 'Hierarchical navigation'],
        ]}
      />
    </div>
  </section>
);

export default ComponentsSection;
