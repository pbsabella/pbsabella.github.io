import { ReactNode } from 'react';
import styles from './EditorialBlock.module.css';

interface EditorialBlockProps {
  id: string;
  kicker: string;
  title: string;
  className?: string;
  children: ReactNode;
  rhythm?: '16' | '21';
  variant?: 'twoCol';
}

const EditorialBlock = ({ id, kicker, title, className, children, rhythm, variant }: EditorialBlockProps) => {
  const sectionClasses = [
    styles.section,
    rhythm === '16' && styles.sectionRhythm16,
    rhythm === '21' && styles.sectionRhythm21,
    variant === 'twoCol' && styles.sectionTwoCol,
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses}>
      <p className={`kicker ${styles.sectionKicker}`}>{kicker}</p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={`flow ${styles.sectionContent}`}>
        {children}
      </div>
    </section>
  );
};

export default EditorialBlock;
