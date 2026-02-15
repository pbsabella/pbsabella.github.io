import { HTMLAttributes, ReactNode } from 'react';
import styles from './Tag.module.css';

export type TagVariant = 'default' | 'success' | 'warning' | 'info' | 'error';
export type TagSize = 'sm' | 'md' | 'lg';

const variantMap: Record<TagVariant, string> = {
  default: styles.tagDefault,
  success: styles.tagSuccess,
  warning: styles.tagWarning,
  info: styles.tagInfo,
  error: styles.tagError,
};

const sizeMap: Record<TagSize, string> = {
  sm: styles.tagSm,
  md: styles.tagMd,
  lg: styles.tagLg,
};

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
  const classNames = [
    styles.tag,
    variantMap[variant],
    sizeMap[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};

export default Tag;
