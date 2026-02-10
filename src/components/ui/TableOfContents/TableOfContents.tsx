import { useState, useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import styles from './TableOfContents.module.css';
import { useScrollToSection } from '@hooks/useScrollToSection';

/**
 * TableOfContents Component
 *
 * A reusable sidebar navigation with scroll spy functionality
 *
 * @param {Object} props
 * @param {Array<{id: string, label: string}>} props.sections - Array of section objects with id and label
 * @param {number} [props.offsetTop=100] - Pixels from top before activating first section
 * @param {number} [props.scrollOffset=80] - Offset for scroll position calculation (accounts for fixed headers)
 */

type TableOfContentsSection = {
  id: string;
  label: string;
};

interface TableOfContentsProps {
  sections: TableOfContentsSection[];
  offsetTop?: number;
  scrollBehavior?: ScrollBehavior;
  respectReducedMotion?: boolean;
  isSticky?: boolean;
}

const TableOfContents = ({
  sections,
  offsetTop = 100,
  scrollBehavior = 'auto',
  respectReducedMotion = true,
  isSticky = true,
}: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    let ticking = false;

    const computeActiveId = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < offsetTop) {
        return null;
      }

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const targetLine = scrollTop + Math.max(viewportHeight * 0.35, 1);
      let currentId: string | null = null;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return;

        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (elementTop <= targetLine) {
          currentId = id;
        }
      });

      const docHeight = document.documentElement.scrollHeight;
      if (scrollTop + viewportHeight >= docHeight - 1 && sections.length > 0) {
        currentId = sections[sections.length - 1]?.id ?? currentId;
      }

      return currentId;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setActiveId(computeActiveId());
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offsetTop]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id, { behavior: scrollBehavior, respectReducedMotion });
  };

  return (
    <nav
      className={`${styles.tableOfContents} ${!isSticky ? styles.tableOfContentsStatic : ''}`}
      ref={navRef}
      aria-label="Table of contents"
    >
      <div className={styles.stickyWrapper}>
        <span className={styles.heading}>On this page</span>
        <ul className={styles.list}>
          {sections.map(({ id, label }) => (
            <li key={id} className={styles.listItem}>
              <a
                href={`#${id}`}
                className={`${styles.link} ${activeId === id ? styles.active : ''}`}
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
