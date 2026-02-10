import { Link, useLocation } from 'react-router-dom';
import { useHeaderScroll } from '@hooks/useHeaderScroll';
import { useScrollToSection } from '@hooks/useScrollToSection';
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
  const scrollToSection = useScrollToSection();

  const isLabEnvironment = pathname.startsWith(ROUTES.LABS);
  const isLabsRoot = pathname === ROUTES.LABS;
  const backTarget = isLabEnvironment && !isLabsRoot ? ROUTES.LABS : ROUTES.HOME;

  return (
    <header
      className={`${styles.header} ${isTransparent ? styles.headerTransparent : ''} ${isHidden ? styles.headerHidden : ''}`}
    >
      <Container
        className={`${styles.headerInner} ${isLabEnvironment ? styles.headerInnerWide : ''}`}
        variant={isLabEnvironment ? 'wide' : 'default'}
        flush={isLabEnvironment}
      >
        <nav className={styles.nav} aria-label="Main menu">
          {isLabEnvironment ? (
            <Link className={`${styles.navLogo} link`} to={backTarget}>
              ← Back
            </Link>
          ) : (
            <Link className={styles.navLogo} to={ROUTES.HOME}>
              pbsabella
            </Link>
          )}

          <ul className={`${styles.navList} ${styles.hideOnMedium}`}>
            <li className={`${styles.navItem}`}>
              <ThemeToggle id="theme-toggle-mobile" />
            </li>

            {!isLabEnvironment && (
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
            )}
          </ul>

          {!isLabEnvironment && (
            <ul className={`${styles.navList} ${styles.hideOnSmall}`}>
              <li className={styles.navItem}>
                <Link className={`${styles.navLink} link`} to={ROUTES.LABS}>
                  Labs
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={`${styles.navLink} link`}
                  to={{ pathname: ROUTES.HOME, search: `?section=${SECTION_ANCHORS.WORK}` }}
                  onClick={() => scrollToSection(SECTION_ANCHORS.WORK)}
                >
                  Work
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={`${styles.navLink} link`}
                  to={{ pathname: ROUTES.HOME, search: `?section=${SECTION_ANCHORS.ABOUT}` }}
                  onClick={() => scrollToSection(SECTION_ANCHORS.ABOUT)}
                >
                  About
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={`${styles.navLink} link`}
                  to={{ pathname: ROUTES.HOME, search: `?section=${SECTION_ANCHORS.CONTACT}` }}
                  onClick={() => scrollToSection(SECTION_ANCHORS.CONTACT)}
                >
                  Contact
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
