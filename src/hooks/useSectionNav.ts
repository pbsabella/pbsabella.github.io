import { ROUTES } from '@constants/routes';
import { useScrollToSection } from '@hooks/useScrollToSection';

/**
 * Returns helpers for section-based navigation to Home route anchors
 */
export const useSectionNav = () => {
  const scrollToSection = useScrollToSection();

  /**
   * Builds Link props for navigating to a Home section and scrolling to it
   */
  const getSectionLinkProps = (sectionId: string) => ({
    to: { pathname: ROUTES.HOME, search: `?section=${sectionId}` },
    onClick: () => scrollToSection(sectionId),
  });

  return { getSectionLinkProps, scrollToSection };
};
