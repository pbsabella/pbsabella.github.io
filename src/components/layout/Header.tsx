import { Link, useLocation } from 'react-router-dom';
import { useHeaderScroll } from '@hooks/useHeaderScroll';
import { useSectionNav } from '@hooks/useSectionNav';
import { useActiveSection } from '@hooks/useActiveSection';
import ThemeToggle from '@components/ui/ThemeToggle/ThemeToggle';
import { ROUTES, SECTION_ANCHORS } from '@constants/routes';
import styles from './Header.module.css';
import Container from './Container';

interface HeaderProps {
  toggleSideNav: () => void;
}

const Header = ({ toggleSideNav }: HeaderProps) => {
  const { isHidden, isTransparent } = useHeaderScroll();
  const { pathname } = useLocation();
  const { getSectionLinkProps } = useSectionNav();

  const isLabEnvironment = pathname.startsWith(ROUTES.LABS);
  const isHome = pathname === ROUTES.HOME;
  const activeSection = useActiveSection(
    [SECTION_ANCHORS.WORK, SECTION_ANCHORS.ABOUT, SECTION_ANCHORS.CONTACT],
    { offsetTop: 80 }
  );

  return (
    <header
      className={`${styles.header} ${isTransparent ? styles.headerTransparent : ''} ${isHidden ? styles.headerHidden : ''}`}
    >
      <Container
        className={styles.headerInner}
        variant="wide"
        flush={false}
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </li>
          </ul>

          {!isLabEnvironment && (
            <ul className={`${styles.navList} ${styles.hideOnSmall}`}>
              <li className={styles.navItem}>
                <Link
                  className={`${styles.navLink} link ${isHome && activeSection === SECTION_ANCHORS.WORK ? styles.navLinkActive : ''}`}
                  {...getSectionLinkProps(SECTION_ANCHORS.WORK)}
                  aria-current={isHome && activeSection === SECTION_ANCHORS.WORK ? 'location' : undefined}
                >
                  Work
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={`${styles.navLink} link ${isHome && activeSection === SECTION_ANCHORS.ABOUT ? styles.navLinkActive : ''}`}
                  {...getSectionLinkProps(SECTION_ANCHORS.ABOUT)}
                  aria-current={isHome && activeSection === SECTION_ANCHORS.ABOUT ? 'location' : undefined}
                >
                  About
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={`${styles.navLink} link ${isHome && activeSection === SECTION_ANCHORS.CONTACT ? styles.navLinkActive : ''}`}
                  {...getSectionLinkProps(SECTION_ANCHORS.CONTACT)}
                  aria-current={isHome && activeSection === SECTION_ANCHORS.CONTACT ? 'location' : undefined}
                >
                  Contact
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className={`${styles.navLink} link`} to={ROUTES.LABS}>
                  Labs
                </Link>
              </li>
              <li className={styles.navItem}>
                <ThemeToggle id="theme-toggle" />
              </li>
            </ul>
          )}

          {isLabEnvironment && (
            <ul className={`${styles.navList} ${styles.hideOnSmall}`}>
              <li className={styles.navItem}>
                <Link className={`${styles.navLink} link`} to={ROUTES.LABS} aria-current="page">
                  Labs
                </Link>
              </li>
              <li className={styles.navItem}>
                <ThemeToggle id="theme-toggle" />
              </li>
            </ul>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
