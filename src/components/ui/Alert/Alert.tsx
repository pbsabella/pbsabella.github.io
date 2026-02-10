import { HTMLAttributes, ReactNode } from 'react';
import styles from './Alert.module.css';

type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
  variant?: AlertVariant;
  className?: string;
}

const Alert = ({
  children,
  title,
  variant = 'default',
  className,
  ...props
}: AlertProps) => {
  const variantClass = styles[`alert${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const classNames = [styles.alert, variantClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="alert" aria-live="polite" data-component="alert" {...props}>
      {title && <p className={styles.alertTitle}>{title}</p>}
      <div className={styles.alertBody}>{children}</div>
    </div>
  );
};

export default Alert;
