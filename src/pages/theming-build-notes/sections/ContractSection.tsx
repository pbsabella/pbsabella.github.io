import EditorialBlock from '@/components/sections/EditorialBlock';
import Table from '@/components/ui/Table/Table';
import CodeBlock from '@/components/ui/CodeBlock/CodeBlock';
import styles from './ContractSection.module.css';

const SNIPPET = `/* Onboarding a new client: 'Acme Corp' */
@layer brand {
  [data-brand='acme'] {
    --brand-primary: oklch(from #c0392b l c h);  /* Hex in, OKLCH out */
    --brand-bg-base: #fcfcfc;                    /* Custom surface */
    --brand-font-display: 'Playfair Display', serif;
    --brand-radius-md: 0px;                        /* Sharp branding */
    --brand-on-accent: var(--pr-color-neutral-100);
  }
}`;

const CONTRACT_COLUMNS = [
  { label: 'Category' },
  { label: 'Anchor Slot' },
  { label: 'Purpose' },
];

const CONTRACT_ROWS = [
  [
    <span key="cat-palette" className={styles.categoryCell}>Palette</span>,
    <code key="tok-brand-primary" className={styles.tokenCell}>--brand-primary</code>,
    'Required. Drives buttons, active states, and focus rings.',
  ],
  [
    '',
    <code key="tok-brand-secondary" className={styles.tokenCell}>--brand-secondary</code>,
    'Secondary brand color for icons or decorative highlights.',
  ],
  [
    '',
    <code key="tok-brand-accent" className={styles.tokenCell}>--brand-accent</code>,
    'Optional. Decorative accent for charts or marketing surfaces (defaults to secondary).',
  ],
  [
    '',
    <code key="tok-brand-on-accent" className={styles.tokenCell}>--brand-on-accent</code>,
    'Manual override: text color on top of accent surfaces.',
  ],
  [
    <span key="cat-surfaces" className={styles.categoryCell}>Surfaces</span>,
    <code key="tok-brand-bg-canvas" className={styles.tokenCell}>--brand-bg-canvas</code>,
    'The ultimate page background (replaces neutral-100).',
  ],
  [
    '',
    <code key="tok-brand-bg-base" className={styles.tokenCell}>--brand-bg-base</code>,
    'The primary surface for containers and cards.',
  ],
  [
    '',
    <code key="tok-brand-bg-subtle" className={styles.tokenCell}>--brand-bg-subtle</code>,
    'A light accent surface for hover states and highlights.',
  ],
  [
    '',
    <code key="tok-brand-surface-tint" className={styles.tokenCell}>--brand-surface-tint</code>,
    'Hue used to derive subtle background washes and tints.',
  ],
  [
    <span key="cat-typography" className={styles.categoryCell}>Typography</span>,
    <code key="tok-brand-font-display" className={styles.tokenCell}>--brand-font-display</code>,
    'Font stack for headings and large display type.',
  ],
  [
    '',
    <code key="tok-brand-font-body" className={styles.tokenCell}>--brand-font-body</code>,
    'Font stack for body text and labels.',
  ],
  [
    <span key="cat-geometry" className={styles.categoryCell}>Geometry</span>,
    <code key="tok-brand-radius-sm" className={styles.tokenCell}>--brand-radius-sm</code>,
    'Radius for small elements like tags.',
  ],
  [
    '',
    <code key="tok-brand-radius-md" className={styles.tokenCell}>--brand-radius-md</code>,
    'Standard radius for buttons and inputs.',
  ],
  [
    '',
    <code key="tok-brand-radius-lg" className={styles.tokenCell}>--brand-radius-lg</code>,
    'Radius for cards and large containers.',
  ],
  [
    '',
    <code key="tok-brand-radius-pill" className={styles.tokenCell}>--brand-radius-pill</code>,
    'The factor for pills and badges.',
  ],
  [
    <span key="cat-status" className={styles.categoryCell}>Status</span>,
    <code key="tok-brand-success" className={styles.tokenCell}>--brand-success</code>,
    'Override for Success branding (bg, border, text).',
  ],
  [
    '',
    <code key="tok-brand-warning" className={styles.tokenCell}>--brand-warning</code>,
    'Override for Warning branding.',
  ],
  [
    '',
    <code key="tok-brand-error" className={styles.tokenCell}>--brand-error</code>,
    'Override for Error branding.',
  ],
  [
    '',
    <code key="tok-brand-info" className={styles.tokenCell}>--brand-info</code>,
    'Override for Info branding.',
  ],
];

const ContractSection = () => (
  <EditorialBlock
    id="the-contract"
    kicker="08. The Contract"
    title="A public API for visuals"
    rhythm="21"
  >
    <p>
      The playground is the proof. This is the public API of the design system. To onboard a new
      white-label client, developers only interact with the Brand layer. This is the only surface
      area needed to skin the entire UI, no component code, no semantic overrides.
    </p>

    <div className={styles.tableWrapper}>
      <Table
        label="Brand anchor slot reference"
        columns={CONTRACT_COLUMNS}
        rows={CONTRACT_ROWS}
        variant="striped"
        stacked={false}
      />
    </div>

    <CodeBlock code={SNIPPET} label="Acme Corp" />
  </EditorialBlock>
);

export default ContractSection;
