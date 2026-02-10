import { ReactNode } from 'react';
import styles from './Alert.module.css';

type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  children: ReactNode;
  title?: string;
  variant?: AlertVariant;
}

const Alert = ({
  children,
  title,
  variant = 'default',
}: AlertProps) => {
  const classNames = [styles.alert, styles[variant]]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="alert" aria-live="polite" data-component="alert">
      {title && <p className={styles.title}>{title}</p>}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Alert;
