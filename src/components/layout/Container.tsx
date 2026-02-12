import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'wide';
}

const Container = ({
  children,
  className = '',
  variant = 'default',
}: ContainerProps) => {
  const classes = [
    styles.container,
    variant === 'wide' && styles.containerWide,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};

export default Container;
