import { ReactNode } from 'react';
import Grid from '@/components/ui/Grid/Grid';
import styles from './IconList.module.css';

export interface IconListItem {
  icon: ReactNode;
  title?: string;
  description: ReactNode;
}

interface IconListProps {
  items: IconListItem[];
  variant?: 'list' | 'grid';
  iconPlacement?: 'left' | 'top';
  className?: string;
  align?: 'start' | 'center' | 'stretch';
  size?: 'sm' | 'md';
  iconColor?: 'default' | 'dark';
}

const IconList = ({ items, variant, iconPlacement, align, size, className, iconColor }: IconListProps) => {
  return (
    <Grid
      as="ul"
      className={className}
      colsSm={variant === 'grid' ? 2 : 1}
      gap={variant === 'grid' ? 'md' : 'sm'}
      align={align}
    >
      {items.map((item, index) => (
        <li key={index} className={`${styles.item} ${iconPlacement === 'top' ? styles.iconTop : styles.iconLeft}`}>
          <span className={`${styles.icon} ${iconColor === 'dark' ? styles.iconDark : ''}`} aria-hidden="true">
            {item.icon}
          </span>
          <div className={styles.body}>
            {item.title && <strong>{item.title}</strong>}
            {item.description && <p className={size === 'sm' ? styles.sizeSm : ''}>{item.description}</p>}
          </div>
        </li>
      ))}
    </Grid>
  );
};

export default IconList;
