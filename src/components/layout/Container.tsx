import { ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'wide';
  flush?: boolean;
}

const Container = ({
  children,
  className = '',
  variant = 'default',
  flush = false,
}: ContainerProps) => {
  const classes = [
    styles.container,
    variant === 'wide' && styles.containerWide,
    flush && styles.containerFlush,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};

export default Container;
