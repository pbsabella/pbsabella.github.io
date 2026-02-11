import { useEffect, useRef, useState } from 'react';

type ActiveSectionOptions = {
  offsetTop?: number;
  bottomThreshold?: number;
};

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
      return undefined;
    }

    const commitActiveId = (nextId: string | null) => {
      if (activeIdRef.current === nextId) return;
      activeIdRef.current = nextId;
      setActiveId(nextId);
    };

    const updateActiveFromMap = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < offsetTop) {
        commitActiveId(null);
        return;
      }

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollTop + viewportHeight >= docHeight - bottomThreshold) {
        commitActiveId(sectionIds[sectionIds.length - 1] ?? null);
        return;
      }

      const targetLine = Math.max(viewportHeight * 0.35, 1);
      const intersectingIds = sectionIds.filter((id) => sectionStateRef.current[id]?.isIntersecting);

      if (intersectingIds.length > 0) {
        const withinTarget = intersectingIds.filter(
          (id) => (sectionStateRef.current[id]?.top ?? Infinity) <= targetLine
        );

        if (withinTarget.length > 0) {
          const best = withinTarget.reduce((closest, id) => {
            const top = sectionStateRef.current[id]?.top ?? Infinity;
            const closestTop = sectionStateRef.current[closest]?.top ?? -Infinity;
            return top > closestTop ? id : closest;
          }, withinTarget[0]);
          commitActiveId(best);
          return;
        }

        const best = intersectingIds.reduce((closest, id) => {
          const top = sectionStateRef.current[id]?.top ?? Infinity;
          const closestTop = sectionStateRef.current[closest]?.top ?? Infinity;
          return top < closestTop ? id : closest;
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

    if (typeof IntersectionObserver === 'undefined') {
      requestAnimationFrame(seedState);
      return undefined;
    }

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
        rootMargin: `-${offsetTop}px 0px -50% 0px`,
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
