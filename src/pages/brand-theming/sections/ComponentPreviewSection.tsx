import EditorialBlock from '@/components/sections/EditorialBlock';
import Alert from '@/components/ui/Alert/Alert';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import Card from '@/components/ui/Card/Card';
import pageStyles from '../BrandTheming.module.css';
import sectionStyles from '../../system-core/SystemCoreSections.module.css';

const ComponentPreviewSection = () => (
  <EditorialBlock id="component-preview" kicker="03. Component Preview" title="See It Shift Live">
    <div className={pageStyles.previewHeader}>
      <p>
        Every component below reads <code>--sem-*</code> only. Switch a brand or toggle theme and
        the whole stack updates in real time. Status tokens route through{' '}
        <code>--brand-*</code> anchors, so info and warning can follow the brand when it makes
        sense.
      </p>
    </div>

    <h3 className={sectionStyles.subsectionTitle}>Accent and geometry</h3>
    <div className={sectionStyles.grid}>
      <Card variant="elevated" isInteractive>
        <div className={sectionStyles.cardContent}>
          <strong>Elevated Card</strong>
          <span>Accent surfaces and radius shift with the active brand.</span>
          <Button variant="primary" size="sm">
            Commit Changes
          </Button>
        </div>
      </Card>
      <div className={pageStyles.previewStack}>
        <div className={sectionStyles.buttonDemo}>
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="primary" size="sm">
            Small Primary
          </Button>
        </div>
        <p className={pageStyles.previewNote}>
          Buttons consume accent tokens. The border radius tracks{' '}
          <code>--brand-radius-*</code> anchors.
        </p>
      </div>
    </div>

    <h3 className={sectionStyles.subsectionTitle}>Status and messaging</h3>
    <div className={sectionStyles.alertDemo}>
      <Alert variant="success" title="Success">
        Action completed successfully.
      </Alert>
      <Alert variant="info" title="Info">
        Neutral system information.
      </Alert>
      <Alert variant="warning" title="Warning">
        Proceed with caution.
      </Alert>
      <Alert variant="error" title="Error">
        Something went wrong.
      </Alert>
    </div>

    <div className={sectionStyles.tagsDemo}>
      <Badge variant="success">Success</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  </EditorialBlock>
);

export default ComponentPreviewSection;
