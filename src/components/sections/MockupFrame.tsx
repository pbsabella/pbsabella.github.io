import { ReactNode } from 'react';
import styles from './MockupFrame.module.css';

export type MockupFrameVariant = 'browser' | 'terminal';

interface MockupFrameProps {
  variant?: MockupFrameVariant;
  headerContent?: ReactNode;
  children: ReactNode;
  className?: string;
}

const MockupFrame = ({
  variant = 'browser',
  headerContent,
  children,
  className,
}: MockupFrameProps) => {
  return (
    <div className={[styles.frame, className].filter(Boolean).join(' ')}>
      <div
        className={[
          styles.header,
          variant === 'terminal' && styles.headerTerminal,
        ].filter(Boolean).join(' ')}
      >
        <div className={styles.dots} aria-hidden="true">
          <span className={`${styles.dot} ${styles.dotError}`} />
          <span className={`${styles.dot} ${styles.dotWarning}`} />
          <span className={`${styles.dot} ${styles.dotSuccess}`} />
        </div>
        {headerContent}
      </div>
      <div
        className={[
          styles.body,
          variant === 'terminal' && styles.bodyTerminal,
        ].filter(Boolean).join(' ')}
      >
        {children}
      </div>
    </div>
  );
};

export default MockupFrame;
