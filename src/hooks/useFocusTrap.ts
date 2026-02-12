import { RefObject, useEffect } from 'react';

type UseFocusTrapOptions = {
  isActive: boolean;
  onEscape?: () => void;
  initialFocusSelector?: string;
};

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Trap focus inside a container while active.
 * Restores focus to previously focused element on cleanup.
 */
export const useFocusTrap = <T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  {
    isActive,
    onEscape,
    initialFocusSelector,
  }: UseFocusTrapOptions
) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!isActive || !container) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusable = () => Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));

    const focusInitial = () => {
      if (initialFocusSelector) {
        const target = container.querySelector<HTMLElement>(initialFocusSelector);
        if (target) {
          target.focus();
          return;
        }
      }

      const [first] = focusable();
      first?.focus();
    };

    const handleDocumentKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        if (!onEscape) return;
        event.preventDefault();
        onEscape();
        return;
      }

      if (event.key !== 'Tab') return;

      const nodes = focusable();
      if (nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || active === container) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleDocumentKeyDown);
    focusInitial();

    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
      requestAnimationFrame(() => {
        previouslyFocused?.focus?.();
      });
    };
  }, [containerRef, isActive, onEscape, initialFocusSelector]);
};

export default useFocusTrap;
