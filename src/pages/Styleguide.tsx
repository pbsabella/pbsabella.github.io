import Card from '@components/ui/Card';
import Container from '@components/layout/Container';
import Tag from '@components/ui/Tag';
import styles from './Styleguide.module.css';

const Styleguide = () => {
  const spacingTokens = [
    { name: 'XXXSmall', value: '4px', token: '--spacing-xxxsmall' },
    { name: 'XXSmall', value: '8px', token: '--spacing-xxsmall' },
    { name: 'XSmall', value: '12px', token: '--spacing-xsmall' },
    { name: 'Small', value: '16px', token: '--spacing-small' },
    { name: 'Medium', value: '24px', token: '--spacing-medium' },
    { name: 'Large', value: '44px', token: '--spacing-large' },
    { name: 'XLarge', value: '64px', token: '--spacing-xlarge' },
    { name: 'XXLarge', value: '84px', token: '--spacing-xxlarge' },
  ];

  return (
    <Container className={styles.main}>
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h1>Styleguide</h1>
          <p className={styles.description}>
            A living reference of design tokens, primitives, and components. This system
            demonstrates a tiered token architecture (primitive → semantic) with full theme support
            and accessibility compliance.
          </p>

          <hr className={styles.divider} />

          {/* COLORS */}
          <h2>Color System</h2>
          <p className={styles.sectionDesc}>
            Colors are organized by priority and semantic meaning, adapting automatically to the
            active theme.
          </p>

          <h3 className={styles.subsectionTitle}>Primary Colors</h3>
          <div className={styles.grid}>
            <div className={styles.swatch}>
              <div className={`${styles.swatchBox} ${styles.swatchPrimary}`}></div>
              <p>Primary</p>
              <code>--color-primary</code>
            </div>
            <div className={styles.swatch}>
              <div className={`${styles.swatchBox} ${styles.swatchPrimaryLight}`}></div>
              <p>Primary Light</p>
              <code>--color-primary-light</code>
            </div>
            <div className={styles.swatch}>
              <div className={`${styles.swatchBox} ${styles.swatchPrimaryXXLight}`}></div>
              <p>Primary XXLight</p>
              <code>--color-primary-xxlight</code>
            </div>
          </div>

          <h3 className={styles.subsectionTitle}>Neutral Colors</h3>
          <div className={styles.grid}>
            {[
              {
                name: 'Neutral XXLight',
                class: styles.swatchSecondaryXXLight,
                token: '--color-secondary-xxlight',
                border: true,
              },
              {
                name: 'Neutral XLight',
                class: styles.swatchSecondaryXLight,
                token: '--color-secondary-xlight',
                border: true,
              },
              {
                name: 'Neutral Light',
                class: styles.swatchSecondaryLight,
                token: '--color-secondary-light',
              },
              { name: 'Neutral', class: styles.swatchSecondary, token: '--color-secondary' },
              {
                name: 'Neutral Dark',
                class: styles.swatchSecondaryDark,
                token: '--color-secondary-dark',
              },
              {
                name: 'Neutral XDark',
                class: styles.swatchSecondaryXDark,
                token: '--color-secondary-xdark',
              },
              {
                name: 'Neutral XXDark',
                class: styles.swatchSecondaryXXDark,
                token: '--color-secondary-xxdark',
              },
            ].map((item, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={`${styles.swatchBox} ${item.class} ${item.border ? styles.swatchBoxBorder : ''}`}
                ></div>
                <p>{item.name}</p>
                <code>{item.token}</code>
              </div>
            ))}
          </div>

          <h3 className={styles.subsectionTitle}>Semantic Tokens</h3>
          <p className={styles.sectionDesc}>
            These tokens adapt automatically based on the active theme. Toggle the theme to see them
            change.
          </p>
          <div className={styles.grid}>
            {[
              { name: 'Background', class: styles.swatchBg, token: '--color-bg', border: true },
              { name: 'Card BG', class: styles.swatchCardBg, token: '--card-bg-color' },
              { name: 'Text', class: styles.swatchText, token: '--color-text' },
              { name: 'Border', class: styles.swatchBorder, token: '--color-border' },
            ].map((item, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={`${styles.swatchBox} ${item.class} ${item.border ? styles.swatchBoxBorder : ''}`}
                ></div>
                <p>{item.name}</p>
                <code>{item.token}</code>
              </div>
            ))}
          </div>

          <hr className={styles.divider} />

          {/* SPACING */}
          <h2>Spacing Scale</h2>
          <p className={styles.sectionDesc}>
            Consistent spacing creates visual rhythm and hierarchy. All spacing uses an 8px base
            grid (with 4px for micro-adjustments).
          </p>
          <div className={styles.spacingScale}>
            {spacingTokens.map((item, idx) => (
              <div className={styles.spacingItem} key={idx}>
                <div className={styles.spacingLabel}>
                  <code className={styles.spacingToken}>{item.token}</code>
                  <span className={styles.spacingValue}>{item.value}</span>
                </div>
                <div className={styles.spacingBar} style={{ width: item.value }}></div>
              </div>
            ))}
          </div>

          <hr className={styles.divider} />

          {/* TYPOGRAPHY */}
          <h2>Typography</h2>
          <p className={styles.sectionDesc}>
            Type scale uses fluid sizing (clamp) for responsive typography without breakpoints.
          </p>

          <h3 className={styles.subsectionTitle}>Type Scale</h3>
          <div className={styles.typeExamples}>
            <div className={styles.typeExample}>
              <h1>Heading Level 1</h1>
              <code>--text-h1 | --leading-tight</code>
            </div>
            <div className={styles.typeExample}>
              <h2>Heading Level 2</h2>
              <code>--text-h2 | --leading-normal</code>
            </div>
            <div className={styles.typeExample}>
              <h3>Heading Level 3</h3>
              <code>--text-h3 | --leading-normal</code>
            </div>
            <div className={styles.typeExample}>
              <p>This is body text. It defines the rhythm and readability of the page.</p>
              <code>--text-body | --leading-body-wide</code>
            </div>
          </div>

          <h3 className={styles.subsectionTitle}>Font Weights & Families</h3>
          <div className={styles.fontDetails}>
            <div className={styles.fontSample}>
              <p style={{ fontWeight: 300 }}>Light (300)</p>
              <code>--font-weight-light</code>
            </div>
            <div className={styles.fontSample}>
              <p style={{ fontWeight: 400 }}>Regular (400)</p>
              <code>--font-weight-regular</code>
            </div>
            <div className={styles.fontSample}>
              <p style={{ fontWeight: 500 }}>Medium (500)</p>
              <code>--font-weight-medium</code>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* ELEVATION */}
          <h2>Elevation</h2>
          <p className={styles.sectionDesc}>
            Shadows create depth and hierarchy. Currently using a single elevation level for cards.
          </p>
          <div className={styles.elevationGrid}>
            <div className={styles.elevationCard}>
              <p>Card Elevation</p>
              <code>--card-shadow</code>
            </div>
          </div>

          <hr className={styles.divider} />

          {/* INTERACTIVE STATES */}
          <h2>Interactive States</h2>
          <p className={styles.sectionDesc}>
            All interactive elements support hover, focus, and active states for accessibility and
            user feedback.
          </p>

          <h3 className={styles.subsectionTitle}>Link States</h3>
          <div className={styles.statesDemo}>
            <a className="link" href="#default">
              Default
            </a>
            <a className="link" href="#hover" style={{ textDecoration: 'underline' }}>
              Hover (underline)
            </a>
            <a
              className="link"
              href="#focus"
              style={{ outline: '2px solid var(--color-primary)', outlineOffset: '1px' }}
            >
              Focus (outline)
            </a>
          </div>

          <h3 className={styles.subsectionTitle}>Focus Indicators</h3>
          <p className={styles.sectionDesc}>
            All focusable elements have a 2px primary-colored outline for keyboard navigation
            accessibility.
          </p>

          <hr className={styles.divider} />

          {/* COMPONENTS */}
          <h2>Components</h2>
          <p className={styles.sectionDesc}>Reusable UI patterns showcased in this portfolio.</p>

          <h3 className={styles.subsectionTitle}>Cards</h3>
          <div className={styles.cardWrapper}>
            <Card>
              <h4>Card Component</h4>
              <p>
                Reusable card wrapper with consistent styling, hover effects, and theme support.
              </p>
            </Card>
          </div>

          <h3 className={styles.subsectionTitle}>Tags</h3>
          <div className={styles.tagsRow}>
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>CSS Modules</Tag>
            <Tag>Vite</Tag>
          </div>

          <h3 className={styles.subsectionTitle}>Links</h3>
          <div className={styles.buttonsRow}>
            <a className="link" href="#styleguide">
              Standard Text Link
            </a>
          </div>

          <hr className={styles.divider} />

          {/* ACCESSIBILITY */}
          <h2>Accessibility</h2>
          <p className={styles.sectionDesc}>
            This design system prioritizes WCAG 2.1 AA compliance with semantic HTML, keyboard
            navigation, and sufficient color contrast.
          </p>

          <div className={styles.a11yFeatures}>
            <div className={styles.a11yItem}>
              <h3>Keyboard Navigation</h3>
              <p>All interactive elements are keyboard accessible with visible focus indicators.</p>
            </div>
            <div className={styles.a11yItem}>
              <h3>Color Contrast</h3>
              <p>Text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text).</p>
            </div>
            <div className={styles.a11yItem}>
              <h3>Semantic HTML</h3>
              <p>Proper heading hierarchy, landmarks, and ARIA labels where needed.</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Styleguide;
