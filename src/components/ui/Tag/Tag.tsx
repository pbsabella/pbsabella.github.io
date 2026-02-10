import { HTMLAttributes, ReactNode } from 'react';
import styles from './Tag.module.css';

export type TagVariant = 'default' | 'success' | 'warning' | 'info' | 'error';
export type TagSize = 'sm' | 'md' | 'lg';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Content to display inside the tag */
  children: ReactNode;
  /** Visual variant that determines color scheme */
  variant?: TagVariant;
  /** Size of the tag, affects font-size and padding */
  size?: TagSize;
  className?: string;
}

/**
 * Tag Component
 *
 * A lightweight label or category indicator, typically used to describe:
 * - Status (success, warning, error, info)
 * - Type or category of an item
 * - Metadata or tags for items in a list
 *
 * --- Features ---
 * - **SEM-first**: All colors and borders come from semantic tokens.
 * - **Size control**: Adjusts font-size and padding via component tokens.
 * - **Themeable**: Colors can be overridden globally using CSS variables.
 * - **Tree-shakable**: Only included when imported, safe for multiple instances.
 *
 * --- Theming Example ---
 * ```css
 * [data-theme='brand'] {
 *   --sem-color-bg-success: #e6f7f2;
 *   --sem-color-text-success: #017e5b;
 *   --sem-color-border-success: #03b787;
 * }
 * ```
 *
 * --- Usage Example ---
 * ```tsx
 * <Tag variant="success" size="sm">Active</Tag>
 * <Tag variant="warning" size="md">Pending</Tag>
 * <Tag variant="error" size="lg">Failed</Tag>
 * ```
 *
 * --- Notes ---
 * - Prefer SEM tokens over direct colors for accessibility and theme consistency.
 * - Use `overrides` prop (if implemented) for per-instance theming without polluting global styles.
 * - Tags are ideal for textual labels; for numeric notifications, consider using a Badge component.
 */
const Tag = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: TagProps) => {
  const variantClass = styles[`tag${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const sizeClass = styles[`tag${size.charAt(0).toUpperCase() + size.slice(1)}`];
  const classNames = [styles.tag, variantClass, sizeClass, className].filter(Boolean).join(' ');

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

export default Tag;
