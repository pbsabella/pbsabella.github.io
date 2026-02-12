import { useCallback } from 'react';
import type { ScrollBehavior } from '@/types/scroll';

type ScrollToSectionOptions = {
  /** Scroll behavior for target section */
  behavior?: ScrollBehavior;
  /** Honor prefers-reduced-motion when behavior is smooth */
  respectReducedMotion?: boolean;
};

/**
 * Returns a stable function that scrolls to a section by id
 * Uses requestAnimationFrame to ensure layout is ready before scrolling
 */
export const useScrollToSection = () => {
  /**
   * Scroll to the section element matching `sectionId`
   */
  const scrollToSection = useCallback((sectionId: string | null, options?: ScrollToSectionOptions) => {
    if (!sectionId) return;

    const target = document.getElementById(sectionId);

    if (target) {
      const requestedBehavior = options?.behavior ?? 'auto';
      const respectReducedMotion = options?.respectReducedMotion ?? true;
      const prefersReducedMotion = respectReducedMotion
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;
      const behavior = prefersReducedMotion && requestedBehavior === 'smooth' ? 'auto' : requestedBehavior;

      // Wait a frame to ensure the DOM is stable
      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior,
          block: 'start',
        });
      });
    }
  }, []);

  return scrollToSection;
};
