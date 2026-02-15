import { HTMLAttributes, ReactNode, useId } from 'react';
import styles from './Alert.module.css';
import { CircleAlert, CircleCheck, Info, LucideIcon, TriangleAlert } from 'lucide-react';

export type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

const variantMap: Record<AlertVariant, string> = {
  default: '',
  info: styles.alertInfo,
  success: styles.alertSuccess,
  warning: styles.alertWarning,
  error: styles.alertError,
}

const variantIconMap: Partial<Record<AlertVariant, LucideIcon>> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
};

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
  const role = props.role ?? (variant === 'error' ? 'alert' : 'status');
  const ariaLive = props['aria-live'] ?? (role === 'alert' ? 'assertive' : 'polite');
  const ariaAtomic = props['aria-atomic'] ?? 'true';

  const classNames = [styles.alert, variantMap[variant], className]
    .filter(Boolean)
    .join(' ');

  const Icon = variantIconMap[variant];

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
        <div className={styles.alertTitle}>
          {Icon && (
            <Icon
              className={styles.alertIcon}
              size={20}
              aria-hidden="true"
            />
          )}
          <span id={titleId}>{title}</span>
        </div>
      )}
      <div className={styles.alertBody}>{children}</div>
    </div>
  );
};

export default Alert;
