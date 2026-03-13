import EditorialBlock from '@/components/sections/EditorialBlock';
import Table from '@/components/ui/Table/Table';

const ANCHOR_TABLE_COLUMNS = [
  { label: 'Anchor' },
  { label: 'Required' },
  { label: 'Default' },
  { label: 'Purpose' },
];

const ANCHOR_TABLE_ROWS = [
  [
    '--brand-primary',
    'Yes',
    '#03b787',
    'Primary accent - drives accent surfaces, text, borders, and focus rings',
  ],
  [
    '--brand-primary-bg',
    'No',
    '#02855f',
    'Darker variant for filled surfaces (buttons, pills). Omit it and semantic auto-darkens primary by 15%.',
  ],
  [
    '--brand-surface-tint',
    'No',
    '#e6f7f2',
    'Fallback hue for bg-tint-1/2 derivation when explicit palette-4/5 values are not set',
  ],
  [
    '--brand-palette-1, 2, 4, 5',
    'No',
    'Orange / Yellow / Green-200 / Gray-100',
    'Explicit accent palette slots — overrides the formula-derived tints; each brand defines its own set',
  ],
  ['--brand-font-display', 'No', 'DM Serif Display', 'Heading font stack'],
  ['--brand-font-body', 'No', 'Heebo', 'Body font stack'],
  [
    '--brand-radius-sm/md/base/lg/pill',
    'No',
    '3 / 4 / 5 / 8 / 9999px',
    'Border radius per step',
  ],
  [
    '--brand-on-accent',
    'No',
    'White',
    'Text on accent surfaces - override when the accent is light',
  ],
  ['--brand-info-*', 'No', 'Blue info default', 'Info status mapping'],
  ['--brand-warning-*', 'No', 'Yellow warning default', 'Warning status mapping'],
  ['--brand-success-*', 'No', 'Green success default', 'Success status mapping'],
  ['--brand-error-*', 'No', 'Red error default', 'Error status mapping'],
];

const AnchorReferenceSection = () => (
  <EditorialBlock
    id="anchor-reference"
    kicker="08. Brand Anchor Reference"
    title="The Contract"
  >
    <p>
      These are the supported anchor slots. If a brand does not provide a value, the system falls
      back to the portfolio defaults.
    </p>
    <Table
      variant="striped"
      caption="Supported brand anchor slots and their defaults"
      columns={ANCHOR_TABLE_COLUMNS}
      rows={ANCHOR_TABLE_ROWS}
    />
  </EditorialBlock>
);

export default AnchorReferenceSection;
