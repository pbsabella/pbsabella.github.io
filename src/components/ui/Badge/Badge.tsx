import { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'success' | 'warning' | 'info' | 'error';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Content to display inside the badge, usually a number or short label */
  children?: ReactNode; // optional for sm size dots
  /** Visual variant that determines background and text colors */
  variant?: BadgeVariant;
  /** Size of the badge; affects font-size, padding, and border-radius */
  size?: BadgeSize;
  className?: string;
}

/**
 * Badge Component
 *
 * Purpose:
 * - Compact status/count indicator.
 *
 * Usage:
 * ```tsx
 * <Badge variant="success" size="sm" aria-label="3 unread notifications" />
 * <Badge variant="success" size="md">3</Badge>
 * <Badge variant="warning" size="md">!</Badge>
 * <Badge variant="error" size="lg">99+</Badge>
 * ```
 *
 * Theming example:
 * ```css
 * [data-theme='brand'] {
 *   --sem-color-bg-success: var(--pr-color-success-600);
 *   --sem-color-text-success: var(--pr-color-neutral-100);
 * }
 * ```
 *
 * Accessibility:
 * - `size="sm"` renders a dot (no text content).
 * - Dot badges are hidden from assistive tech unless an explicit `aria-label` is provided.
 * - Labeled dot badges get `role="img"` to satisfy ARIA role/attribute validity.
 */
const Badge = ({
  children,
  variant = 'info',
  size = 'md',
  'aria-label': ariaLabel,
  role,
  className,
  ...props
}: BadgeProps) => {
  const variantClass = styles[`badge${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const sizeClass = styles[`badge${size.charAt(0).toUpperCase() + size.slice(1)}`];
  const classNames = [styles.badge, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');
  const ariaHidden = size === 'sm' && !ariaLabel ? true : undefined;
  const resolvedRole = role ?? (size === 'sm' && ariaLabel ? 'img' : undefined);

  return (
    <span
      className={classNames}
      role={resolvedRole}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...props}
    >
      {size !== 'sm' ? children : null}
    </span>
  );
};

export default Badge;
