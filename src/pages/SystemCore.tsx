import { ElementType } from 'react';
import Card from '@components/ui/Card';
import Container from '@components/layout/Container';
import Tag from '@components/ui/Tag';
import { COLOR_GROUPS, SPACING_SCALE, TYPE_SCALE, FONT_WEIGHTS, DURATIONS, EASINGS, ELEVATIONS, A11Y_FEATURES } from '@/content/core';
import styles from './SystemCore.module.css';

const SystemCore = () => {
  return (
    <section>
      <Container className={styles.page}>
        <div>
          <h1>System Core</h1>
          <p className={styles.pageDesc}>
            A living reference of the design tokens, primitives, and components that <b>power this portfolio</b>. This system demonstrates a tiered token architecture (primitive → semantic → component) with a focus on maintainability, ensuring that the foundational elements used here translate directly into a cohesive and accessible user experience.
          </p>

          <hr />

          {/* COLORS */}
          <h2>Color System</h2>
          <p className={styles.sectionDesc}>
            Colors follow a three-tier architecture: primitives (raw palette values), semantic tokens (usage-based), and component tokens (specific implementations). All semantic colors adapt automatically to the active theme.
          </p>

          <h3 className={styles.subsectionTitle}>Primitives</h3>

          <h4 className={styles.subsectionTitle}>Green scale (brand)</h4>
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
            {COLOR_GROUPS.primitives.green.map((color, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={styles.swatchBox}
                  style={{ backgroundColor: `var(--${color.cssVar})` }}
                ></div>
                <p>{color.name}</p>
                <code>{color.token}</code>
              </div>
            ))}
          </div>

          <h4 className={styles.subsectionTitle}>Neutral Scale (Warm)</h4>
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
            {COLOR_GROUPS.primitives.neutral.map((color, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={`${styles.swatchBox} ${color.border ? styles.swatchBoxBorder : ''}`}
                  style={{ backgroundColor: `var(--${color.cssVar})` }}
                ></div>
                <p>{color.name}</p>
                <code>{color.token}</code>
              </div>
            ))}
          </div>

          <h4 className={styles.subsectionTitle}>Gray Scake (Cool)</h4>
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
            {COLOR_GROUPS.primitives.gray.map((color, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={styles.swatchBox}
                  style={{ backgroundColor: `var(--${color.cssVar})` }}
                ></div>
                <p>{color.name}</p>
                <code>{color.token}</code>
              </div>
            ))}
          </div>

          <h4 className={styles.subsectionTitle}>Accent Colors</h4>
          <div className={`${styles.grid} ${styles.swatchGrid}`}>
            {COLOR_GROUPS.primitives.accent.map((color, idx) => (
              <div className={styles.swatch} key={idx}>
                <div
                  className={styles.swatchBox}
                  style={{ backgroundColor: `var(--${color.cssVar})` }}
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

          <hr />

          {/* SPACING */}
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

          <hr />

          {/* TYPOGRAPHY */}
          <h2>Typography</h2>
          <p className={styles.sectionDesc}>
            Type scale uses fluid sizing (clamp) for responsive typography without breakpoints. Numeric naming (100-900) reflects scale hierarchy rather than specific HTML elements.
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

          <hr />

          {/* ELEVATION (SHADOWS) */}
          <h2>Elevation</h2>
          <p className={styles.sectionDesc}>
            Shadows create depth and hierarchy, defining how elements <em>float</em> above the background. Shadow intensity adapts to the active theme.
          </p>

          <div className={styles.grid}>
            {ELEVATIONS.map((elevation, idx) => (
              <Card variant="flat" className={`${styles.cardContent} ${styles[elevation.className]}`} key={idx}>
                <b>{elevation.level}</b>
                <code>{elevation.token}</code>
                <small>{elevation.desc}</small>
              </Card>
            ))}
          </div>

          <hr />

          {/* TRANSITIONS & EASING */}
          <h2>Transitions & Motion</h2>
          <p className={styles.sectionDesc}>
            Animation timing is intentional: fast easing for UI feedback, smooth easing for interactive navigation.
          </p>

          <h3 className={styles.subsectionTitle}>Duration Scale</h3>
          <div className={styles.grid}>
            {DURATIONS.map((duration, idx) => (
              <Card variant="flat" className={styles.cardContent} key={idx}>
                <b>{duration.name}</b>
                <code>{duration.token}</code>
                <small>{duration.desc}</small>
              </Card>
            ))}
          </div>

          <h3 className={styles.subsectionTitle}>Easing Functions</h3>
          <div className={styles.grid}>
            {EASINGS.map((easing, idx) => (
              <Card variant="flat" className={styles.cardContent} key={idx}>
                <b>{easing.name}</b>
                <code>{easing.token}</code>
                <small>{easing.desc}</small>
              </Card>
            ))}
          </div>

          <hr />

          {/* INTERACTIVE STATES */}
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
                outline: '2px solid var(--color-text-brand)',
                outlineOffset: '1px'
              }}
            >
              Focus (outline)
            </a>
          </div>

          <h3 className={styles.subsectionTitle}>Focus Indicators</h3>
          <p className={styles.sectionDesc}>
            All focusable elements have a 2px brand-colored outline for keyboard navigation accessibility.
          </p>

          <hr />

          {/* COMPONENTS */}
          <h2>Components</h2>
          <p className={styles.sectionDesc}>
            Reusable UI patterns showcased in this portfolio. Component tokens reference semantic tokens, which cascade from primitives.
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
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Design Tokens</Tag>
            <Tag>CSS Variables</Tag>
          </div>

          <h3 className={styles.subsectionTitle}>Links</h3>
          <p className={styles.sectionDesc}>
            The primary element for text-based navigation. These include persistent hover states and transition effects to ensure clear affordance.
          </p>
          <div>
            <a className="link" href="#core">Standard Text Link</a>
          </div>

          <hr />

          {/* ACCESSIBILITY */}
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
        </div>
      </Container>
    </section>
  );
};

export default SystemCore;
