import EditorialBlock from '@/components/sections/EditorialBlock';

const BrandableSlotsSection = () => (
  <EditorialBlock
    id="brandable-slots"
    kicker="07. Supported Brandable Slots"
    title="What Brands Can Actually Touch"
  >
    <p>
      The system exposes specific semantic intents to the brand layer. Brands can influence the
      vibe and messaging surfaces of the UI without touching a single semantic token.
    </p>
    <ul>
      <li>
        <strong>Typography:</strong> Separate heading and body stacks via{' '}
        <code>--brand-font-display</code> and <code>--brand-font-body</code>.
      </li>
      <li>
        <strong>Geometry:</strong> Global radius factors (<code>sm/md/base/lg/pill</code>) so a
        brand can go sharp, rounded, or pillowy.
      </li>
      <li>
        <strong>Accent palette:</strong> Set <code>--brand-primary</code> and optionally{' '}
        <code>--brand-primary-bg</code> (auto-darkened if omitted). Use{' '}
        <code>--brand-surface-tint</code> and <code>--brand-palette-*</code> slots for background tints.
      </li>
      <li>
        <strong>Functional overrides:</strong> Map Info and Warning intents to brand-specific hues
        with <code>--brand-info-*</code> and <code>--brand-warning-*</code>. Success and Error are
        anchored too, but keep universal defaults unless a brand has a strong reason to move them.
      </li>
    </ul>
  </EditorialBlock>
);

export default BrandableSlotsSection;
