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
        The bottleneck was manual labor. To scale the presets for this playground,
        I originally had to hand-pick every shade and audit contrast for both light
        and dark modes. It was a fragile process that did not allow for dynamic
        expansion.
      </p>
      <p>
        I switched to <code className={styles.code}>oklch()</code> to automate this logic. Unlike hex, OKLCH is a
        perceptually uniform color space. It maps to how the human eye actually sees, making the
        relationship between brightness and saturation mathematically predictable.
      </p>

      <span className={styles.subtitle}>The Mental Model</span>
      <p>
        After a decade in hex and RGB, the switch felt alien. I had to recalibrate my intuition around three coordinates:
      </p>

      <OklchInteractiveAnchor />

      <span className={styles.subtitle}>The Engine: Relative Color Syntax</span>
      <p>
        The breakthrough was using it to perform programmatic adjustments. By borrowing the brand hue while forcing a fixed lightness, the
        system derives a full palette on the fly. This allows the playground to swap presets
        instantly without manual color picking.
      </p>
      <CodeBlock code={RELATIVE_SNIPPET} label="Semantic scale" />

      <span className={styles.subtitle}>When the math is not mathing</span>
      <p>
        Mathematical perfection does not always equal visual balance. This is most apparent when using the same multiplier
        for bold colors and neutrals. A vivid green and a neutral gray might both land at 75%
        lightness, but the green often feels heavier because of its high chroma.
      </p>
      <p>
        The payoff is still massive: one block of code now handles dark mode for every brand. It
        just requires a final human pass to fine-tune the intensity.
      </p>
      <CodeBlock code={SNIPPET} label="Dark mode derivation" />
    </div>
  </EditorialBlock>
);

export default OklchSection;
