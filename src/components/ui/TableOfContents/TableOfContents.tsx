import type { HTMLAttributes, MouseEvent } from 'react';
import styles from './TableOfContents.module.css';
import { useScrollToSection } from '@hooks/useScrollToSection';
import type { ScrollBehavior } from '@/types/scroll';
import { useActiveSection } from '@hooks/useActiveSection';

type TableOfContentsSection = {
  id: string;
  label: string;
};

interface TableOfContentsProps extends HTMLAttributes<HTMLElement> {
  /** Ordered section anchors to render */
  sections: TableOfContentsSection[];
  /** Activation offset for scroll spy calculations */
  offsetTop?: number;
  /** Scroll behavior used by click navigation */
  scrollBehavior?: ScrollBehavior;
  /** Honors reduced-motion when true */
  respectReducedMotion?: boolean;
  /** Keeps TOC sticky when true */
  isSticky?: boolean;
  className?: string;
}

/**
 * TableOfContents Component
 *
 * Purpose:
 * - In-page navigation with active section tracking.
 *
 * Usage:
 * ```tsx
 * <TableOfContents sections={sections} scrollBehavior="instant" />
 * ```
 *
 * Accessibility:
 * - Uses `nav` landmark and `aria-current="location"` for active section link.
 */
const TableOfContents = ({
  sections,
  offsetTop = 100,
  scrollBehavior = 'instant',
  respectReducedMotion = true,
  isSticky = true,
  className,
  ...props
}: TableOfContentsProps) => {
  const scrollToSection = useScrollToSection();
  const activeId = useActiveSection(
    sections.map((section) => section.id),
    { offsetTop }
  );

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id, { behavior: scrollBehavior, respectReducedMotion });
  };

  return (
    <nav
      className={`${styles.tableOfContents} ${!isSticky ? styles.tableOfContentsStatic : ''} ${className ?? ''}`}
      role="navigation"
      aria-label={props['aria-label'] ?? 'Table of contents'}
      {...props}
    >
      <div className={styles.tableOfContentsStickyWrapper}>
        <span className={styles.tableOfContentsHeading}>On this page</span>
        <ul className={styles.tableOfContentsList}>
          {sections.map(({ id, label }) => (
            <li key={id} className={styles.tableOfContentsItem}>
              <a
                href={`#${id}`}
                className={`${styles.tableOfContentsLink} ${activeId === id ? styles.tableOfContentsActive : ''}`}
                aria-current={activeId === id ? 'location' : undefined}
                onClick={(e) => handleClick(e, id)}
                title={label}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
