import { ROUTES } from '@constants/routes';
import { useScrollToSection } from '@hooks/useScrollToSection';

export const useSectionNav = () => {
  const scrollToSection = useScrollToSection();

  const getSectionLinkProps = (sectionId: string) => ({
    to: { pathname: ROUTES.HOME, search: `?section=${sectionId}` },
    onClick: () => scrollToSection(sectionId),
  });

  return { getSectionLinkProps, scrollToSection };
};
