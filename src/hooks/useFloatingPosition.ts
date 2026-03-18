import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

type FloatingPos = {
  top?: number;
  bottom?: number;
  right: number;
  maxHeight: number;
} | null;

/**
 * Computes a viewport-aware fixed position for a floating element (dropdown, tooltip, etc.)
 * anchored to a trigger element. Flips above the trigger when space below is insufficient.
 * Constrains height to the available space in the chosen direction.
 *
 * Uses `visualViewport` for accurate measurements on mobile (accounts for software keyboard
 * and browser chrome). Falls back to `window.innerHeight` where unavailable.
 */
export function useFloatingPosition<T extends HTMLElement = HTMLButtonElement>(isOpen: boolean) {
  const triggerRef = useRef<T>(null);
  const [pos, setPos] = useState<FloatingPos>(null);

  const updatePos = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const gap = 8;
    const safetyMargin = 8;

    const availableBelow = viewportHeight - rect.bottom - gap - safetyMargin;
    const availableAbove = rect.top - gap - safetyMargin;
    const placeBelow = availableBelow >= availableAbove;

    if (placeBelow) {
      setPos({
        top: rect.bottom + gap,
        right: window.innerWidth - rect.right,
        maxHeight: Math.max(availableBelow, 0),
      });
    } else {
      setPos({
        bottom: viewportHeight - rect.top + gap,
        right: window.innerWidth - rect.right,
        maxHeight: Math.max(availableAbove, 0),
      });
    }
  }, []);

  useLayoutEffect(() => {
    if (isOpen) updatePos();
  }, [isOpen, updatePos]);

  useEffect(() => {
    if (!isOpen) return;
    const vv = window.visualViewport;
    window.addEventListener('resize', updatePos);
    vv?.addEventListener('resize', updatePos);
    return () => {
      window.removeEventListener('resize', updatePos);
      vv?.removeEventListener('resize', updatePos);
    };
  }, [isOpen, updatePos]);

  return { triggerRef, dropdownPos: pos };
}
