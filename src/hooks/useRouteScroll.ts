import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollToSection } from '@hooks/useScrollToSection';

export const useRouteScroll = () => {
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  useLayoutEffect(() => {
    const sectionId = new URLSearchParams(location.search).get('section');
    if (sectionId) {
      scrollToSection(sectionId, { behavior: 'instant', respectReducedMotion: false });
      return;
    }

    scrollToSection('page-top', { behavior: 'instant', respectReducedMotion: false });
  }, [location.pathname, location.search, scrollToSection]);
};
