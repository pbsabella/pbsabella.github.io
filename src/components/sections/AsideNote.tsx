import { ReactNode } from 'react';
import styles from './AsideNote.module.css';

interface AsideNoteProps {
  children: ReactNode;
  className?: string;
  italic?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const AsideNote = ({ children, className, italic = false, size = 'xs' }: AsideNoteProps) => {
  return (
    <p className={[
      styles.note,
      className,
      italic && styles.italic,
      size && styles[size]
    ].filter(Boolean).join(' ')}>
      {children}
    </p>
  );
};

export default AsideNote;
