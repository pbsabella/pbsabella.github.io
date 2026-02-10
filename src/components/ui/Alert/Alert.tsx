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
  const classNames = [styles.alert, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="alert" aria-live="polite" data-component="alert" {...props}>
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Alert;
