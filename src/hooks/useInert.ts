import { RefObject, useEffect } from 'react';

/**
 * Apply/remove the `inert` attribute to an element
 */
export function useInert<T extends HTMLElement>(ref: RefObject<T | null>, isInert: boolean) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isInert) {
      el.setAttribute('inert', '');
      el.setAttribute('aria-hidden', 'true');
      return () => {
        el.removeAttribute('inert');
        el.removeAttribute('aria-hidden');
      };
    }

    el.removeAttribute('inert');
    el.removeAttribute('aria-hidden');
  }, [ref, isInert]);
}
