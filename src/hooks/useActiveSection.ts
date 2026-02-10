import { useEffect, useState } from 'react';

type ActiveSectionOptions = {
  offsetTop?: number;
  bottomThreshold?: number;
};

export const useActiveSection = (
  sectionIds: string[],
  { offsetTop = 100, bottomThreshold = 1 }: ActiveSectionOptions = {}
) => {
  const [activeId, setActiveId] = useState<string | null>(null);

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

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        const elementTop = element.getBoundingClientRect().top + scrollTop;
        if (elementTop <= targetLine) {
          currentId = id;
        }
      });

      const docHeight = document.documentElement.scrollHeight;
      if (scrollTop + viewportHeight >= docHeight - bottomThreshold && sectionIds.length > 0) {
        currentId = sectionIds[sectionIds.length - 1] ?? currentId;
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
  }, [sectionIds, offsetTop, bottomThreshold]);

  return activeId;
};
