import { useEffect } from 'react';

/**
 * Lock/unlock document scroll while a UI "modal" is open
 */
export function useBodyScrollLock(isLocked: boolean, options?: { className?: string }) {
  useEffect(() => {
    if (!isLocked) return;

    // Prefer class-based locking (keeps styling in CSS, supports future tweaks like padding compensation)
    if (options?.className) {
      document.body.classList.add(options.className);
      return () => document.body.classList.remove(options.className!);
    }

    // Fallback: inline style lock
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLocked, options?.className]);
}
