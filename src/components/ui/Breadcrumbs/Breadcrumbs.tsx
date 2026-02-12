import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

type BreadcrumbItem = {
  /** Visible breadcrumb text */
  label: string;
  /** Route target for non-terminal crumb */
  to?: string;
};

interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /** Ordered breadcrumb trail */
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs Component
 *
 * Purpose:
 * - Hierarchical path navigation for page context.
 *
 * Usage:
 * ```tsx
 * <Breadcrumbs items={[{ label: 'Labs', to: '/labs' }, { label: 'Build Notes' }]} />
 * ```
 *
 * Accessibility:
 * - Uses `nav` landmark with default `aria-label="Breadcrumb"`.
 * - Last item is marked with `aria-current="page"`.
 */
const Breadcrumbs = ({ items, className, ...props }: BreadcrumbsProps) => {
  const { 'aria-label': ariaLabel = 'Breadcrumb', ...restProps } = props;
  const classNames = [styles.breadcrumbs, className].filter(Boolean).join(' ');

  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className={classNames}
      aria-label={ariaLabel}
      {...restProps}
    >
      <ol className={styles.breadcrumbsList}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li className={styles.breadcrumbsItem} key={`${item.label}-${index}`}>
              {item.to && !isLast ? (
                <Link className={styles.breadcrumbsLink} to={item.to}>
                  {item.label}
                </Link>
              ) : isLast ? (
                <span className={styles.breadcrumbsCurrent} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <span className={styles.breadcrumbsText}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className={styles.breadcrumbsSeparator} aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
