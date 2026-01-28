import { ReactNode } from 'react';
import styles from './Tag.module.css';

interface TagProps {
  children: ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return <span className={styles.tag}>{children}</span>;
};

export default Tag;
