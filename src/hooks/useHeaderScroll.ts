import { useEffect, useRef, useState } from 'react';

// Minimum scroll distance before hide-on-scroll can activate
const HEADER_HIDE_SCROLL_THRESHOLD = 100;

type HeaderScrollOptions = {
  /** Hide header while scrolling down after threshold */
  enableHide?: boolean;
};

/**
 * Returns header UI state for transparency and hide-on-scroll
 */
export const useHeaderScroll = (options: HeaderScrollOptions = { enableHide: false }) => {
  const [state, setState] = useState({
    isTransparent: true,
    isHidden: false,
  });

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setState({
        isTransparent: currentScrollY <= 0,
        isHidden: options.enableHide
          // Only hide if we've scrolled enough and are moving downward
          ? (currentScrollY > lastScrollY.current && currentScrollY > HEADER_HIDE_SCROLL_THRESHOLD)
          : false,
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [options.enableHide]);

  return state;
};
