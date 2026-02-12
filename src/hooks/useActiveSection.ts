import { useEffect, useRef, useState } from 'react';

// Viewport ratio used as the section activation line for TOC highlighting
const ACTIVE_TARGET_LINE_RATIO = 0.35;

type ActiveSectionOptions = {
  /** Top offset before a section is considered active */
  offsetTop?: number;
  /** Distance from bottom that forces the last section active */
  bottomThreshold?: number;
};

/**
 * Tracks which section id is currently active in the viewport
 * Designed for TOC highlighting and in-page navigation state
 */
export const useActiveSection = (
  sectionIds: string[],
  { offsetTop = 100, bottomThreshold = 1 }: ActiveSectionOptions = {}
) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sectionStateRef = useRef<Record<string, { isIntersecting: boolean; top: number }>>({});
  const activeIdRef = useRef<string | null>(null);

  useEffect(() => {
    sectionStateRef.current = {};
    activeIdRef.current = null;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) {
      requestAnimationFrame(() => setActiveId(null));
      return;
    }

    const commitActiveId = (nextId: string | null) => {
      if (activeIdRef.current === nextId) return;

      activeIdRef.current = nextId;
      setActiveId(nextId);
    };

    // Resolve one active section with priority:
    // bottom-of-page last section, crossed activation-line section, then topmost intersecting fallback
    const updateActiveFromMap = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < offsetTop) {
        commitActiveId(null);
        return;
      }

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If user is at the bottom of the page, force the last section as active
      if (scrollTop + viewportHeight >= docHeight - bottomThreshold) {
        commitActiveId(sectionIds[sectionIds.length - 1] ?? null);
        return;
      }

      const targetLine = Math.max(viewportHeight * ACTIVE_TARGET_LINE_RATIO, 1);
      const intersectingIds = sectionIds.filter((id) => sectionStateRef.current[id]?.isIntersecting);

      if (intersectingIds.length > 0) {
        // Keep only intersecting sections that have crossed the activation line
        const withinTarget = intersectingIds.filter(
          (id) => (sectionStateRef.current[id]?.top ?? Infinity) <= targetLine
        );

        if (withinTarget.length > 0) {
          const best = withinTarget.reduce((mostRecent, id) => {
            const top = sectionStateRef.current[id]?.top ?? Infinity;
            const mostRecentTop = sectionStateRef.current[mostRecent]?.top ?? -Infinity;

            return top > mostRecentTop ? id : mostRecent;
          }, withinTarget[0]);

          commitActiveId(best);
          return;
        }

        const best = intersectingIds.reduce((topmost, id) => {
          const top = sectionStateRef.current[id]?.top ?? Infinity;
          const topmostTop = sectionStateRef.current[topmost]?.top ?? Infinity;

          return top < topmostTop ? id : topmost;
        }, intersectingIds[0]);

        commitActiveId(best);
        return;
      }

      commitActiveId(null);
    };

    const scheduleUpdate = () => {
      requestAnimationFrame(() => {
        updateActiveFromMap();
      });
    };

    const seedState = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        sectionStateRef.current[element.id] = {
          isIntersecting: rect.top < viewportHeight && rect.bottom > 0,
          top: rect.top,
        };
      });

      updateActiveFromMap();
    };

    // Early exit path
    if (typeof IntersectionObserver === 'undefined') {
      requestAnimationFrame(seedState);
      return;
    }

    // Throttle the updates
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        updateActiveFromMap();
        ticking = false;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionStateRef.current[entry.target.id] = {
            isIntersecting: entry.isIntersecting,
            top: entry.boundingClientRect.top,
          };
        });

        scheduleUpdate();
      },
      {
        root: null,
        // Account for sticky header and use a shorter viewport band so section switching happens earlier
        rootMargin: `-${offsetTop}px 0px -50% 0px`,
        // Fire at multiple visibility ratios for smoother section activation updates
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((element) => observer.observe(element));
    requestAnimationFrame(seedState);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offsetTop, bottomThreshold]);

  return activeId;
};
