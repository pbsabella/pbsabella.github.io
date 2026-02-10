import { useCallback } from 'react';

type ScrollToSectionOptions = {
  behavior?: ScrollBehavior;
  respectReducedMotion?: boolean;
};

export const useScrollToSection = () => {
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
