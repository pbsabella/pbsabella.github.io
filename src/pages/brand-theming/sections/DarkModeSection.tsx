import EditorialBlock from '@/components/sections/EditorialBlock';
import CodeBlock from './CodeBlock';

const DARK_MODE_SNIPPET = `/* tokens.css - semantic layer */
[data-theme='dark'] {
  --sem-color-text-accent:
    oklch(from var(--brand-primary, oklch(67% 0.149 163deg)) 75% c h);
  --sem-color-bg-accent:
    oklch(from var(--brand-primary, oklch(67% 0.149 163deg)) 35% 0.15 h);
}`;

const DarkModeSection = () => (
  <EditorialBlock id="dark-mode" kicker="06. Universal Dark Mode" title="Dark Mode, One Rule">
    <p>
      The brand layer lets dark mode work across every identity for the first time. Without it,
      each brand would need its own compound selector like{' '}
      <code>[data-brand=&apos;fintech&apos;][data-theme=&apos;dark&apos;]</code> just to fix contrast.
    </p>
    <p>
      The new architecture uses CSS Relative Color Syntax. It takes the hue from whatever brand is
      active and forces lightness to a readable value. That means any new brand gets dark mode for
      free - no extra overrides, no manual hex hunting.
    </p>
    <CodeBlock code={DARK_MODE_SNIPPET} label="relative color syntax" />
  </EditorialBlock>
);

export default DarkModeSection;
