import { ElementType } from 'react';
import Card from '@components/ui/Card/Card';
import Container from '@components/layout/Container';
import Tag from '@components/ui/Tag/Tag';
import { COLOR_GROUPS, SPACING_SCALE, TYPE_SCALE, FONT_WEIGHTS, ANIMATION, ELEVATIONS, A11Y_FEATURES } from '@/content/core';
import styles from './SystemCore.module.css';
import Badge from '@/components/ui/Badge/Badge';
import TableOfContents from '@components/ui/TableOfContents/TableOfContents'

const sections = [
  { id: 'color-system', label: 'Color System' },
  { id: 'spacing-scale', label: 'Spacing Scale' },
  { id: 'typography', label: 'Typography' },
  { id: 'elevation', label: 'Elevation' },
  { id: 'animations', label: 'Transitions & Motions' },
  { id: 'interactive-states', label: 'Interactive States' },
  { id: 'accessibility', label: 'Accessibility' },
];

const SystemCore = () => {
  return (
    <section>
      <Container className={styles.page}>
        <div className={styles.pageLayout}>
          <div>
            <h1 className={styles.pageTitle}>System Core</h1>
            <p className={styles.pageDesc}>
              A living reference of the design tokens, primitives, and components that <b>power this portfolio</b>. This system demonstrates a tiered token architecture (primitive → semantic → component) with a focus on maintainability, ensuring that the foundational elements used here translate directly into a cohesive and accessible user experience.
            </p>

            <hr />

            {/* COLORS */}
            <section id="color-system">
              <h2>Color System</h2>
              <p className={styles.sectionDesc}>
                This system utilizes a tiered architecture to decouple raw values from functional intent, ensuring that all UI elements adapt automatically to the active theme.
              </p>

              <h3 className={styles.subsectionTitle}>Primitives</h3>
              <p className={styles.sectionDesc}>
                The raw palette serves as the base source of truth, defining the full range of available hues and scales. These foundational values provide the depth necessary to populate the semantic layers without being used directly in component styles.
              </p>

              <h4 className={styles.subsectionTitle}>Green Scale (brand)</h4>
              <div className={`${styles.grid} ${styles.swatchGrid}`}>
                {COLOR_GROUPS.primitives.green.map((color, idx) => (
                  <div className={styles.swatch} key={idx}>
                    <div
                      className={styles.swatchBox}
                      style={{ backgroundColor: `var(${color.token})` }}
                    ></div>
                    <p>{color.name}</p>
                    <code>{color.token}</code>
                  </div>
                ))}
              </div>

              <h4 className={styles.subsectionTitle}>Neutral Scale (warm)</h4>
              <div className={`${styles.grid} ${styles.swatchGrid}`}>
                {COLOR_GROUPS.primitives.neutral.map((color, idx) => (
                  <div className={styles.swatch} key={idx}>
                    <div
                      className={`${styles.swatchBox} ${color.border ? styles.swatchBoxBorder : ''}`}
                      style={{ backgroundColor: `var(${color.token})` }}
                    ></div>
                    <p>{color.name}</p>
                    <code>{color.token}</code>
                  </div>
                ))}
              </div>

              <h4 className={styles.subsectionTitle}>Gray Scale (cool)</h4>
              <div className={`${styles.grid} ${styles.swatchGrid}`}>
                {COLOR_GROUPS.primitives.gray.map((color, idx) => (
                  <div className={styles.swatch} key={idx}>
                    <div
                      className={styles.swatchBox}
                      style={{ backgroundColor: `var(${color.token})` }}
                    ></div>
                    <p>{color.name}</p>
                    <code>{color.token}</code>
                  </div>
                ))}
              </div>

              <h4 className={styles.subsectionTitle}>Status Colors</h4>
              <div className={`${styles.grid} ${styles.swatchGrid}`}>
                {COLOR_GROUPS.primitives.status.map((color, idx) => (
                  <div className={styles.swatch} key={idx}>
                    <div
                      className={styles.swatchBox}
                      style={{ backgroundColor: `var(${color.token})` }}
                    ></div>
                    <p>{color.name}</p>
                    <code>{color.token}</code>
                  </div>
                ))}
              </div>

              {/* TODO */}
              {/* <h3 className={styles.subsectionTitle}>Semantic</h3>
          <p className={styles.sectionDesc}>
            These tokens adapt automatically based on the active theme. Toggle the theme to see them change.
          </p>
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
            {COLOR_GROUPS.semantic.core.map((color, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={`${styles.swatchBox} ${color.border ? styles.swatchBoxBorder : ''}`}
                  style={{ backgroundColor: `var(--${color.cssVar})` }}
                ></div>
                <p>{color.name}</p>
                <code>{color.token}</code>
              </div>
            ))}
            {COLOR_GROUPS.semantic.borders.map((color, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={`${styles.swatchBox} ${color.border ? styles.swatchBoxBorder : ''}`}
                  style={{ backgroundColor: `var(--${color.cssVar})` }}
                ></div>
                <p>{color.name}</p>
                <code>{color.token}</code>
              </div>
            ))}
          </div> */}
            </section>

            <hr />

            {/* SPACING */}
            <section id="spacing-scale">
              <h2>Spacing Scale</h2>
              <p className={styles.sectionDesc}>
                Consistent spacing creates visual rhythm and hierarchy. All spacing uses a 4px base unit for precise control and flexibility.
              </p>
              <div className={styles.spacingScale}>
                {SPACING_SCALE.map((item) => (
                  <div key={item.token}>
                    <div className={styles.spacingLabel}>
                      <code>{item.token}</code>
                      <span>{item.value}</span>
                    </div>
                    <div className={styles.spacingBar} style={{ width: item.value }}></div>
                  </div>
                ))}
              </div>
            </section>

            <hr />

            {/* TYPOGRAPHY */}
            <div id="typography">
              <h2>Typography</h2>
              <p className={styles.sectionDesc}>
                Type scale uses fluid sizing (clamp) for responsive typography without breakpoints.
              </p>

              <h3 className={styles.subsectionTitle}>Type Scale</h3>
              <div className={styles.typeExamples}>
                {TYPE_SCALE.map((type, idx) => {
                  const Element = type.element as ElementType;;
                  return (
                    <div key={idx}>
                      <Element>{type.text || `Heading Level ${idx + 1}`}</Element>
                      <code>{type.token} | {type.leading}</code>
                    </div>
                  );
                })}
              </div>

              <h3 className={styles.subsectionTitle}>Font Weights</h3>
              <div className={styles.grid}>
                {FONT_WEIGHTS.map((weight, idx) => (
                  <Card variant="flat" className={styles.cardContent} key={idx}>
                    <span style={{ fontWeight: weight.weight }}>{weight.label} ({weight.weight})</span>
                    <code>{weight.token}</code>
                  </Card>
                ))}
              </div>
            </div>

            <hr />

            {/* ELEVATION (SHADOWS) */}
            <section id="elevation">
              <h2>Elevation</h2>
              <p className={styles.sectionDesc}>
                Shadows create depth and hierarchy, defining how elements <em>float</em> above the background. Shadow intensity adapts to the active theme.
              </p>

              <div className={styles.grid}>
                {ELEVATIONS.map((elevation, idx) => (
                  <div className={`${styles.cardContent} ${styles[elevation.className]}`} key={idx}>
                    <b>{elevation.level}</b>
                    <code>{elevation.token}</code>
                    <small>{elevation.desc}</small>
                  </div>
                ))}
              </div>
            </section>

            <hr />

            {/* TRANSITIONS & EASING */}
            <section id="animations">
              <h2>Transitions & Motion</h2>
              <p className={styles.sectionDesc}>
                Animation timing is intentional: fast easing for UI feedback, smooth easing for interactive navigation.
              </p>

              <h3 className={styles.subsectionTitle}>Duration Scale</h3>
              <div className={styles.grid}>
                {ANIMATION.durations.map((duration, idx) => (
                  <Card variant="flat" className={styles.cardContent} key={idx}>
                    <b>{duration.name}</b>
                    <code>{duration.token}</code>
                    <small>{duration.desc}</small>
                  </Card>
                ))}
              </div>

              <h3 className={styles.subsectionTitle}>Easing Functions</h3>
              <div className={styles.grid}>
                {ANIMATION.easings.map((easing, idx) => (
                  <Card variant="flat" className={styles.cardContent} key={idx}>
                    <b>{easing.name}</b>
                    <code>{easing.token}</code>
                    <small>{easing.desc}</small>
                  </Card>
                ))}
              </div>
            </section>

            <hr />

            {/* INTERACTIVE STATES */}
            <section id="interactive-states">
              <h2>Interactive States</h2>
              <p className={styles.sectionDesc}>
                All interactive elements support hover, focus, and active states for accessibility and user feedback.
              </p>

              <h3 className={styles.subsectionTitle}>Link States</h3>
              <div className={styles.statesDemo}>
                <a className="link" href="#default">Default</a>
                <a className="link" href="#hover">Hover (underline)</a>
                <a
                  className="link"
                  href="#focus"
                  style={{
                    outline: '2px solid var(--sem-color-focus-ring)',
                    outlineOffset: 'var(--sem-focus-outline-offset)',
                    borderRadius: 'var(--sem-focus-outline-radius)'
                  }}
                >
                  Focus (outline)
                </a>
              </div>

              <h3 className={styles.subsectionTitle}>Focus Indicators</h3>
              <p className={styles.sectionDesc}>
                All focusable elements have a 2px brand-colored outline for keyboard navigation accessibility.
              </p>
            </section>

            <hr />

            {/* COMPONENTS */}
            <section id="components">
              <h2>Components</h2>
              <p className={styles.sectionDesc}>
                Encapsulated, reusable units that consume tokens to ensure consistent behavior and styling.
              </p>

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
                <Card variant="ghost">
                  <h4>Ghost</h4>
                  <p>
                    A low-emphasis variant, typically used to represent a placeholder or a state with reduced importance.
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
                <Tag variant="success">Sucess</Tag>
                <Tag variant="warning">Warning</Tag>
                <Tag variant="error">Error</Tag>
              </div>
              <div className={styles.tagsDemo}>
                <Tag size="sm">Small</Tag>
                <Tag size="md">Medium</Tag>
                <Tag size="lg">Large</Tag>
              </div>

              <h3 className={styles.subsectionTitle}>Badges</h3>
              <p className={styles.sectionDesc}>
                Small indicators used to show counts, statuses, or highlight information. Badges are ideal for notifications, item counts, or visual cues that require minimal space.
              </p>
              <div className={styles.tagsDemo}>
                <Badge variant="info" size="sm" />
                <Badge variant="success" size="sm" />
                <Badge variant="warning" size="sm" />
                <Badge variant="error" size="sm" />

                <Badge variant="info">1</Badge>
                <Badge variant="success">3</Badge>
                <Badge variant="warning" size="lg">9</Badge>
                <Badge variant="error" size="lg">99+</Badge>
              </div>

              <h3 className={styles.subsectionTitle}>Links</h3>
              <p className={styles.sectionDesc}>
                The primary element for text-based navigation. These include persistent hover states and transition effects to ensure clear affordance.
              </p>
              <div>
                <a className="link" href="#core">Standard Text Link</a>
              </div>
            </section>

            <hr />

            {/* ACCESSIBILITY */}
            <section id="accessibility">
              <h2>Accessibility</h2>
              <p className={styles.sectionDesc}>
                This design system prioritizes WCAG 2.1 AA compliance with semantic HTML, keyboard navigation, and sufficient color contrast.
              </p>

              <div className={styles.grid}>
                {A11Y_FEATURES.map((feature, idx) => (
                  <Card variant="flat" key={idx}>
                    <h3 className="h4">{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <aside>
            <TableOfContents sections={sections} scrollBehavior="instant" />
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default SystemCore;
