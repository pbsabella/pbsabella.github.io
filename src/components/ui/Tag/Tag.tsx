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
 * Purpose:
 * - Lightweight text label for status, category, and metadata chips.
 *
 * Usage:
 * ```tsx
 * <Tag variant="success" size="sm">Active</Tag>
 * <Tag variant="warning" size="md">Pending</Tag>
 * <Tag variant="error" size="lg">Failed</Tag>
 * ```
 *
 * Theming example:
 * ```css
 * [data-theme='brand'] {
 *   --sem-color-border-success: var(--pr-color-success-600);
 *   --sem-color-text-success-emphasis: var(--pr-color-success-600);
 * }
 *
 * [data-theme='dark'] {
 *   --sem-color-border-success: var(--pr-color-success-500);
 *   --sem-color-text-success-emphasis: var(--pr-color-success-500);
 * }
 * ```
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
