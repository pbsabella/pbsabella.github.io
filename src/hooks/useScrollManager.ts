import { useEffect, useRef, useState } from 'react';

interface ScrollManagerState {
  isTransparent: boolean;
  isHidden: boolean;
}

/**
 * Header scroll behavior
 */
export const useScrollManager = (): ScrollManagerState => {
  const [state, setState] = useState<ScrollManagerState>({
    isTransparent: true,
    isHidden: false,
  });

  // Persist previous scroll position without re-rendering.
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setState({
        isTransparent: scrollTop === 0,
        isHidden: scrollTop > lastScrollY.current && scrollTop > 100,
      });

      lastScrollY.current = scrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return state;
};
