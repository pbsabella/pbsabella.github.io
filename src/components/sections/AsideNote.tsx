import { ReactNode } from 'react';
import styles from './AsideNote.module.css';

interface AsideNoteProps {
  children: ReactNode;
  className?: string;
}

const AsideNote = ({ children, className }: AsideNoteProps) => {
  return (
    <p className={[styles.note, className].filter(Boolean).join(' ')}>
      {children}
    </p>
  );
};

export default AsideNote;
