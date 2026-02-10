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
  /** Accessible label for dot-only badges */
  ariaLabel?: string;
  className?: string;
}

/**
 * Badge Component
 *
 * A compact indicator for counts, notifications, or status flags.
 *
 * --- Features ---
 * - **SEM-first**: Colors, borders, and backgrounds come from semantic tokens.
 * - **Size control**: Adjusts font-size, padding, and shape via component tokens.
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
 * <Badge variant="success" size="sm">3</Badge>
 * <Badge variant="warning" size="md">!</Badge>
 * <Badge variant="error" size="lg">99+</Badge>
 * ```
 *
 * --- Notes ---
 * - Use badges for numeric or short status indicators.
 * - Prefer badges for notifications; use tags for descriptive labels.
 * - All styling is controlled by semantic tokens for easy theming.
 */
const Badge = ({
  children,
  variant = 'info',
  size = 'md',
  ariaLabel,
  className,
  ...props
}: BadgeProps) => {
  const classNames = [styles.badge, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');
  const hasAriaLabelProp = 'aria-label' in props;
  const ariaHidden = size === 'sm' && !ariaLabel && !hasAriaLabelProp ? true : undefined;

  return (
    <span
      className={classNames}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      {...props}
    >
      {size !== 'sm' ? children : null}
    </span>
  );
};

export default Badge;
