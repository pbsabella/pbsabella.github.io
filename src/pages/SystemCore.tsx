import Card from '@components/ui/Card';
import Container from '@components/layout/Container';
import Tag from '@components/ui/Tag';
import { SPACING_TOKENS } from '@/content/core';
import styles from './SystemCore.module.css';

const SystemCore = () => {
  return (
    <section>
      <Container className={styles.page}>
        <div>
          <h1>System Core</h1>
          <p className={styles.pageDesc}>
            A living reference of the design tokens, primitives, and components that <b>power this portfolio</b>. This system demonstrates a tiered token architecture (primitive → semantic) with a focus on type-safety, ensuring that the foundational elements used here translate directly into a cohesive and accessible user experience.
          </p>

          <hr />

          {/* COLORS */}
          <h2>Color System</h2>
          <p className={styles.sectionDesc}>
            Colors are organized by priority and semantic meaning, adapting automatically to the
            active theme.
          </p>

          <h3 className={styles.subsectionTitle}>Primary Colors</h3>
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
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
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
            {[
              {
                name: 'Neutral XXLight',
                class: styles.swatchNeutralXXLight,
                token: '--color-neutral-xxlight',
                border: true,
              },
              {
                name: 'Neutral XLight',
                class: styles.swatchNeutralXLight,
                token: '--color-neutral-xlight',
                border: true,
              },
              {
                name: 'Neutral Light',
                class: styles.swatchNeutralLight,
                token: '--color-neutral-light',
              },
              { name: 'Neutral', class: styles.swatchNeutral, token: '--color-neutral' },
              {
                name: 'Neutral Dark',
                class: styles.swatchNeutralDark,
                token: '--color-neutral-dark',
              },
              {
                name: 'Neutral XDark',
                class: styles.swatchNeutralXDark,
                token: '--color-neutral-xdark',
              },
              {
                name: 'Neutral XXDark',
                class: styles.swatchNeutralXXDark,
                token: '--color-neutral-xxdark',
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

          <h3 className={styles.subsectionTitle}>Accent Colors</h3>
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
            {[
              { name: 'Yellow', class: styles.swatchAccentYellow, token: '--color-accent-yellow' },
              { name: 'Orange', class: styles.swatchAccentOrange, token: '--color-accent-orange' },
              { name: 'Cyan Light', class: styles.swatchAccentCyanLight, token: '--color-accent-cyan-light' },
              { name: 'Ice', class: styles.swatchAccentIce, token: '--color-accent-ice' },
            ].map((item, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={`${styles.swatchBox} ${item.class}`}
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
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
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

          <hr />

          {/* SPACING */}
          <h2>Spacing Scale</h2>
          <p className={styles.sectionDesc}>
            Consistent spacing creates visual rhythm and hierarchy. All spacing uses an 8px base
            grid (with 4px for micro-adjustments).
          </p>
          <div className={styles.spacingScale}>
            {SPACING_TOKENS.map((item) => (
              <div key={item.token}>
                <div className={styles.spacingLabel}>
                  <code>{item.token}</code>
                  <span>{item.value}</span>
                </div>
                <div className={styles.spacingBar} style={{ width: item.value }}></div>
              </div>
            ))}
          </div>

          <hr />

          {/* TYPOGRAPHY */}
          <h2>Typography</h2>
          <p className={styles.sectionDesc}>
            Type scale uses fluid sizing (clamp) for responsive typography without breakpoints.
          </p>

          <h3 className={styles.subsectionTitle}>Type Scale</h3>
          <div className={styles.typeExamples}>
            <div>
              <h1>Heading Level 1</h1>
              <code>--text-h1 | --leading-tight</code>
            </div>
            <div>
              <h2>Heading Level 2</h2>
              <code>--text-h2 | --leading-normal</code>
            </div>
            <div>
              <h3>Heading Level 3</h3>
              <code>--text-h3 | --leading-normal</code>
            </div>
            <div>
              <h4>Heading Level 4</h4>
              <code>--text-h4 | --leading-normal</code>
            </div>
            <div>
              <p>This is body text. It defines the rhythm and readability of the page.</p>
              <code>--text-body | --leading-normal</code>
            </div>
          </div>

          <h3 className={styles.subsectionTitle}>Font Weights & Families</h3>
          <div className={styles.grid}>
            <Card variant="flat" className={styles.cardContent}>
              <span style={{ fontWeight: 300 }}>Light (300)</span>
              <code>--font-weight-light</code>
            </Card>
            <Card variant="flat" className={styles.cardContent}>
              <span style={{ fontWeight: 400 }}>Regular (400)</span>
              <code>--font-weight-regular</code>
            </Card>
            <Card variant="flat" className={styles.cardContent}>
              <span style={{ fontWeight: 500 }}>Medium (500)</span>
              <code>--font-weight-medium</code>
            </Card>
          </div>

          <hr />

          {/* ELEVATION (SHADOWS) */}
          <h2>Elevation</h2>
          <p className={styles.sectionDesc}>
            Shadows create depth and hierarchy, defining how elements <em>float</em> above the background.
          </p>

          <div className={styles.grid}>
            <Card variant="flat" className={`${styles.cardContent} ${styles.elevationLow}`}>
              <b>Low</b>
              <code>--elevation-low</code>
              <small>Best for: Cards, small buttons</small>
            </Card>

            <Card variant="flat" className={`${styles.cardContent} ${styles.elevationMedium}`}>
              <b>Medium</b>
              <code>--elevation-medium</code>
              <small>Best for: Hover states, dropdowns</small>
            </Card>

            <Card variant="flat" className={`${styles.cardContent} ${styles.elevationHigh}`}>
              <b>High</b>
              <code>--elevation-high</code>
              <small>Best for: Modals, fixed tooltips</small>
            </Card>
          </div>

          <hr />

          {/* TRANSITIONS & EASING */}
          <h2>Transitions & Motion</h2>
          <p className={styles.sectionDesc}>
            Animation timing is intentional: fast easing for UI feedback, smooth easing for interactive navigation.
          </p>

          <h3 className={styles.subsectionTitle}>Duration Scale</h3>
          <div className={styles.grid}>
            <Card variant="flat" className={styles.cardContent}>
              <b>Fast</b>
              <code>--transition-fast: 0.2s</code>
              <small>Quick feedback (hover, button states)</small>
            </Card>
            <Card variant="flat" className={styles.cardContent}>
              <b>Base</b>
              <code>--transition-base: 0.3s</code>
              <small>Standard interactions (slides, fades)</small>
            </Card>
            <Card variant="flat" className={styles.cardContent}>
              <b>Slow</b>
              <code>--transition-slow: 0.4s</code>
              <small>Deliberate animations (theme toggle)</small>
            </Card>
          </div>

          <h3 className={styles.subsectionTitle}>Easing Functions</h3>
          <div className={styles.grid}>
            <Card variant="flat" className={styles.cardContent}>
              <b>Ease-out</b>
              <code>--easing-out: ease-out</code>
              <small>UI reactions (instant start, smooth finish) — appears, responds, closes</small>
            </Card>
            <Card variant="flat" className={styles.cardContent}>
              <b>Ease in-out</b>
              <code>--easing-in-out: ease-in-out</code>
              <small>User navigation (smooth acceleration/deceleration) — drawers, overlays, sliding</small>
            </Card>
          </div>

          <hr />

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
            <a className="link" href="#hover">
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

          <hr />

          {/* COMPONENTS */}
          <h2>Components</h2>
          <p className={styles.sectionDesc}>Reusable UI patterns showcased in this portfolio.</p>

          <h3 className={styles.subsectionTitle}>Cards</h3>
          <p className={styles.sectionDesc}>Reusable card wrapper with consistent styling, hover effects, and theme support.</p>
          <div className={`${styles.grid} ${styles.gridWide}`}>
            <Card isInteractive={true}>
              <h4>Elevated</h4>
              <p>
                The standard container style, using depth and shadow to create
                visual separation from the page background.
              </p>
            </Card>
            <Card variant="flat">
              <h4>Flat</h4>
              <p>
                A bordered variant for structural grouping. Provides containment
                without depth, ideal for nested content or layout sections.
              </p>
            </Card>
            <Card variant="ghost">
              <h4>Ghost</h4>
              <p>
                A low-emphasis variant, typically used to represent a placeholder or a state with reduced importance.
              </p>
            </Card>
          </div>

          <h3 className={styles.subsectionTitle}>Tags</h3>
          <p className={styles.sectionDesc}>Compact labels used to categorize content or display metadata. These are designed to provide quick visual recognition of attributes or topics.</p>
          <div className={styles.tagsDemo}>
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>CSS Modules</Tag>
            <Tag>Vite</Tag>
          </div>

          <h3 className={styles.subsectionTitle}>Links</h3>
          <p className={styles.sectionDesc}>The primary element for text-based navigation. These include persistent hover states and transition effects to ensure clear affordance.</p>
          <div>
            <a className="link" href="#core">
              Standard Text Link
            </a>
          </div>

          <hr />

          {/* ACCESSIBILITY */}
          <h2>Accessibility</h2>
          <p className={styles.sectionDesc}>
            This design system prioritizes WCAG 2.1 AA compliance with semantic HTML, keyboard
            navigation, and sufficient color contrast.
          </p>

          <div className={styles.grid}>
            <Card variant="flat">
              <h3 className="h4">Keyboard Navigation</h3>
              <p>All interactive elements are keyboard accessible with visible focus indicators.</p>
            </Card>
            <Card variant="flat">
              <h3 className="h4">Color Contrast</h3>
              <p>Text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text).</p>
            </Card>
            <Card variant="flat">
              <h3 className="h4">Semantic HTML</h3>
              <p>Proper heading hierarchy, landmarks, and ARIA labels where needed.</p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SystemCore;
