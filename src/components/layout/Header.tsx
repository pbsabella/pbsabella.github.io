import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useHeaderScroll } from '@hooks/useHeaderScroll';
import { useSectionNav } from '@hooks/useSectionNav';
import { useActiveSection } from '@hooks/useActiveSection';
import ThemeToggle from '@components/ui/ThemeToggle/ThemeToggle';
import { ROUTES, SECTION_ANCHORS } from '@constants/routes';
import styles from './Header.module.css';
import Container from '@/components/layout/Container';

interface HeaderProps {
  toggleSideNav: () => void;
}

type DesktopLink = {
  label: string;
  to: string | { pathname: string; search: string };
  isActive: boolean;
  onClick?: () => void;
  ariaCurrent?: 'page';
};

const Header = ({ toggleSideNav }: HeaderProps) => {
  const { isHidden, isTransparent } = useHeaderScroll();
  const { pathname } = useLocation();
  const { getSectionLinkProps } = useSectionNav();

  const isLabEnvironment = pathname.startsWith(ROUTES.LABS);
  const isHome = pathname === ROUTES.HOME;

  const activeSection = useActiveSection(
    [
      SECTION_ANCHORS.WORK,
      SECTION_ANCHORS.ABOUT,
      SECTION_ANCHORS.CONTACT,
    ],
    { offsetTop: 80 }
  );

  const desktopLinks: DesktopLink[] = isLabEnvironment
    ? [
      {
        label: 'Labs',
        to: ROUTES.LABS,
        isActive: true,
        ariaCurrent: 'page' as const
      },
    ]
    : [
      {
        label: 'Work',
        ...getSectionLinkProps(SECTION_ANCHORS.WORK),
        isActive: isHome && activeSection === SECTION_ANCHORS.WORK,
      },
      {
        label: 'About',
        ...getSectionLinkProps(SECTION_ANCHORS.ABOUT),
        isActive: isHome && activeSection === SECTION_ANCHORS.ABOUT,
      },
      {
        label: 'Contact',
        ...getSectionLinkProps(SECTION_ANCHORS.CONTACT),
        isActive: isHome && activeSection === SECTION_ANCHORS.CONTACT,
      },
      { label: 'Labs', to: ROUTES.LABS, isActive: false },
    ];

  const headerClassName = [
    styles.header,
    isTransparent && styles.headerTransparent,
    isHidden && styles.headerHidden,
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClassName}>
      <Container
        className={styles.headerInner}
        variant="wide"
      >
        <nav className={styles.nav} aria-label="Main menu">
          <Link className={styles.navLogo} to={ROUTES.HOME}>
            pbsabella
          </Link>

          <ul className={`${styles.navList} ${styles.hideOnMedium}`}>
            <li className={`${styles.navItem}`}>
              <ThemeToggle id="theme-toggle-mobile" />
            </li>

            <li className={`${styles.navItem}`}>
              <button
                className={styles.navMenu}
                aria-controls="side-nav"
                aria-label="Open mobile menu"
                onClick={toggleSideNav}
              >
                <Menu size={24} aria-hidden="true" />
              </button>
            </li>
          </ul>

          <ul className={`${styles.navList} ${styles.hideOnSmall}`}>
            {desktopLinks.map((link) => (
              <li key={link.label} className={styles.navItem}>
                <Link
                  className={`${styles.navLink} link ${link.isActive ? styles.navLinkActive : ''}`}
                  to={link.to}
                  aria-current={link.ariaCurrent ?? (link.isActive ? 'location' : undefined)}
                  onClick={link.onClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.navItem}>
              <ThemeToggle id="theme-toggle" />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
