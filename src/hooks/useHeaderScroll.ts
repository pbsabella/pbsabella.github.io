import { useEffect, useRef, useState } from 'react';

/**
 * Header scroll behavior
 */
export const useHeaderScroll = (options = { enableHide: false }) => {
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
          // Only hide if we've scrolled a decent amount (100px)
          // AND we are moving downward.
          ? (currentScrollY > lastScrollY.current && currentScrollY > 100)
          : false,
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [options.enableHide]);

  return state;
};
