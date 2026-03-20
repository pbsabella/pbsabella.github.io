import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Callout.module.css';

interface CalloutProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  /** Optional kicker label above content (e.g. "TL;DR", "Note") */
  label?: string;
  /** Main callout content */
  children: ReactNode;
  /** Optional action slot rendered below the body (buttons, links) */
  actions?: ReactNode;
  /** Polymorphic element — defaults to <aside> */
  as?: ElementType;
  className?: string;
}

/**
 * Callout Component
 *
 * Purpose:
 * - Blockquote-style pull-out with a left accent border and subtle surface shading.
 * - Adapts automatically to brand and light/dark theme via semantic tokens.
 *
 * Usage:
 * ```tsx
 * <Callout label="TL;DR" actions={<Button>View prototype</Button>}>
 *   Five banks, overlapping maturities, one spreadsheet I kept patching.
 * </Callout>
 * ```
 *
 * Accessibility:
 * - Defaults to `<aside>` so screen readers can identify it as supplementary content.
 * - Override `as` when a different semantic element is more appropriate (e.g. `blockquote`).
 */
const Callout = ({
  label,
  children,
  actions,
  as: Tag = 'aside',
  className,
  ...props
}: CalloutProps) => {
  const classNames = [styles.callout, className].filter(Boolean).join(' ');

  return (
    <Tag className={classNames} {...props}>
      {label && <p className={styles.calloutLabel}>{label}</p>}
      <div className={styles.calloutBody}>{children}</div>
      {actions && <div className={styles.calloutActions}>{actions}</div>}
    </Tag>
  );
};

export default Callout;
