import { RefObject, useEffect } from 'react';

/**
 * Applies or removes `inert` and `aria-hidden` on a target element
 * Useful for disabling background interaction when overlays are open
 */
export function useInert<T extends HTMLElement>(ref: RefObject<T | null>, isInert: boolean) {
  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    if (isInert) {
      el.setAttribute('inert', '');
      // Keep aria-hidden as fallback for environments where inert support can vary
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
