import { useCallback } from 'react';

export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId: string | null) => {
    if (!sectionId) return;

    const target = document.getElementById(sectionId);

    if (target) {
      // Wait a frame to ensure the DOM is stable
      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: 'auto', // Inherits 'smooth' or 'auto' from CSS media queries
          block: 'start',
        });
      });
    }
  }, []);

  return scrollToSection;
};
