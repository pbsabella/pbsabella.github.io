import type { HTMLAttributes, MouseEvent } from 'react';
import styles from './TableOfContents.module.css';
import { useScrollToSection } from '@hooks/useScrollToSection';
import type { ScrollBehavior } from '@/types/scroll';
import { useActiveSection } from '@hooks/useActiveSection';

/**
 * TableOfContents Component
 *
 * A reusable sidebar navigation with scroll spy functionality
 *
 * @param {Object} props
 * @param {Array<{id: string, label: string}>} props.sections - Array of section objects with id and label
 * @param {number} [props.offsetTop=100] - Pixels from top before activating first section
 */

type TableOfContentsSection = {
  id: string;
  label: string;
};

interface TableOfContentsProps extends HTMLAttributes<HTMLElement> {
  sections: TableOfContentsSection[];
  offsetTop?: number;
  scrollBehavior?: ScrollBehavior;
  respectReducedMotion?: boolean;
  isSticky?: boolean;
  className?: string;
}

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
