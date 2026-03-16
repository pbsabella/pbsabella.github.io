import EditorialBlock from '@/components/sections/EditorialBlock';
import styles from '../ThemingBuildNotes.module.css';
import CodeBlock from '@/components/ui/CodeBlock/CodeBlock';
import OklchInteractiveAnchor from '@/components/oklch/OklchInteractiveAnchor';

const RELATIVE_SNIPPET = `/* Borrow identity, force specific lightness for semantic scales */
--sem-color-accent-base: var(--brand-primary); /* borders, nav indicators, active states */
--sem-color-accent-strong: oklch(from var(--brand-primary) calc(l * 0.78) c h); /* text emphasis */`;

const SNIPPET = `@layer semantic {
  [data-theme='dark'] {
    /* Automatically derive a light version for text contrast */
    --sem-color-accent-strong: oklch(from var(--brand-primary) 75% c h);
    /* Derive a dark, punchy background for buttons */
    --sem-color-action: oklch(from var(--brand-primary) 53% c h);
  }
}`;

const OklchSection = () => (
  <EditorialBlock
    id="oklch"
    kicker="05. OKLCH"
    title="Perceptual color math"
    rhythm="21"
  >
    <div>
      <p>
        The bottleneck was manual labor. To scale these presets, I originally
        had to hand-pick every shade and audit contrast for both light and dark modes.
        It was a fragile process that collapsed under dynamic expansion.
      </p>
      <p>
        I switched to <code className={styles.code}>oklch()</code> to automate this logic.
        Unlike Hex or RGB, OKLCH is a perceptually uniform color space. It maps
        directly to how the human eye perceives brightness and saturation, making
        color relationships mathematically predictable.
      </p>

      <span className={styles.subtitle}>The Mental Model</span>
      <p>
        After a decade in hex and RGB, the switch felt alien. I had to recalibrate my intuition around three coordinates:
      </p>

      <OklchInteractiveAnchor />

      <span className={styles.subtitle}>The Engine: Relative Color Syntax</span>
      <p>
        The breakthrough was using relative color syntax to perform programmatic adjustments.
        By borrowing a brand hue while dynamically adjusting lightness, the system derives
        an entire palette on the fly. This allows the playground to swap presets instantly
        without manual color picking.
      </p>
      <CodeBlock code={RELATIVE_SNIPPET} label="Semantic scale" />

      <span className={styles.subtitle}>When the math is not mathing</span>
      <p>
        Mathematical perfection, however, does not always equal visual balance.
        Using a flat multiplier for both vivid primaries and soft neutrals can
        lead to weight imbalances. A vivid green and a neutral gray might share
        75% lightness but carry completely different visual weight due to chroma
        differences.
      </p>

      <span className={styles.subtitle}>The Architectural Advantage</span>
      <p>
        The payoff remains massive: the <strong>semantic logic </strong> acts as a theme-agnostic engine,
        and your <strong>brand tokens </strong> serve as the fuel. Define the brand identity once, and
        the system’s math <strong>auto-derives the full palette</strong>—light mode, dark mode, and interactive states—on the fly.
        The math builds the foundation; a final human pass ensures the perfect vibe.
      </p>
      <CodeBlock code={SNIPPET} label="Dark mode derivation" />
    </div>
  </EditorialBlock>
);

export default OklchSection;
