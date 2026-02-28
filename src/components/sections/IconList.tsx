import { ReactNode } from 'react';
import styles from './IconList.module.css';

export interface IconListItem {
  icon: ReactNode;
  title?: string;
  description: ReactNode;
}

interface IconListProps {
  items: IconListItem[];
  variant?: 'list' | 'grid';
  className?: string;
}

const IconList = ({ items, variant, className }: IconListProps) => {
  const listClasses = [
    styles.list,
    variant === 'grid' && styles.listGrid,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ul className={listClasses}>
      {items.map((item, index) => (
        <li key={index} className={styles.item}>
          <span className={styles.icon} aria-hidden="true">
            {item.icon}
          </span>
          <div className={styles.body}>
            {item.title && <strong>{item.title}</strong>}
            {item.description && <p>{item.description}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default IconList;
