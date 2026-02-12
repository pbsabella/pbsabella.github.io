import { HTMLAttributes, ReactNode, useId } from 'react';
import styles from './Alert.module.css';

type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Main alert content */
  children: ReactNode;
  /** Optional heading shown above body content */
  title?: ReactNode;
  /** Semantic intent variant */
  variant?: AlertVariant;
  className?: string;
}

/**
 * Alert Component
 *
 * Purpose:
 * - Inline contextual messaging container.
 *
 * Usage:
 * ```tsx
 * <Alert variant="warning" title="Heads up">Token update in progress.</Alert>
 * ```
 *
 * Accessibility:
 * - Defaults to `role="status"` with polite announcements for non-error variants
 * - Uses `role="alert"` with assertive announcements for `variant="error"`
 * - Supports explicit `role`/`aria-live` overrides when needed
 */
const Alert = ({
  children,
  title,
  variant = 'default',
  className,
  ...props
}: AlertProps) => {
  const titleId = useId();
  const variantClass =
    variant === 'default'
      ? undefined
      : styles[`alert${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const role = props.role ?? (variant === 'error' ? 'alert' : 'status');
  const ariaLive = props['aria-live'] ?? (role === 'alert' ? 'assertive' : 'polite');
  const ariaAtomic = props['aria-atomic'] ?? 'true';
  const classNames = [styles.alert, variantClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      role={role}
      aria-live={ariaLive}
      aria-atomic={ariaAtomic}
      aria-labelledby={title ? titleId : undefined}
      {...props}
    >
      {title && (
        <p id={titleId} className={styles.alertTitle}>
          {title}
        </p>
      )}
      <div className={styles.alertBody}>{children}</div>
    </div>
  );
};

export default Alert;
