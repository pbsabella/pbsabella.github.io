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
  iconColor?: 'primary' | 'secondary' | 'muted' | 'dark';
}

const IconList = ({
  items,
  variant = 'list',
  iconPlacement = 'left',
  align,
  size,
  className,
  iconColor = 'secondary',
}: IconListProps) => {
  const colorClasses: Record<string, string> = {
    primary: styles.colorPrimary,
    secondary: styles.colorSecondary,
    muted: styles.colorMuted,
    dark: styles.colorDark,
  };

  return (
    <Grid
      as="ul"
      className={className}
      colsSm={variant === 'grid' ? 2 : 1}
      gap={variant === 'grid' ? 'md' : 'sm'}
      align={align}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={`${styles.item} ${iconPlacement === 'top' ? styles.isTop : ''}`}
        >
          <span
            className={`${styles.iconWrapper} ${colorClasses[iconColor]}`}
            aria-hidden="true"
          >
            {item.icon}
          </span>

          <div className={styles.content}>
            {item.title && <strong>{item.title}</strong>}
            {item.description && (
              <p className={`${styles.description} ${size === 'sm' ? styles.isSmall : ''}`}>
                {item.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </Grid>
  );
};

export default IconList;
