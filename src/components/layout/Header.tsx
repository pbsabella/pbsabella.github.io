import { Link, useLocation } from 'react-router-dom';
import { useScrollManager } from '@hooks/useScrollManager';
import ThemeToggle from '@components/ui/ThemeToggle';
import styles from './Header.module.css';
import Container from './Container';

interface HeaderProps {
  toggleSideNav: () => void;
}

const Header = ({ toggleSideNav }: HeaderProps) => {
  const { headerClass } = useScrollManager();
  const location = useLocation();
  const isStyleguide = location.pathname === '/labs/styleguide';

  // Map headerClass strings to module styles
  const classes = headerClass
    .split(' ')
    .map((cls) => {
      if (cls === 'header--transparent') return styles.headerTransparent;
      if (cls === 'header--hidden') return styles.headerHidden;
      return '';
    })
    .join(' ');

  return (
    <header className={`${styles.header} ${classes}`}>
      <Container className={`${styles.headerInner}`}>
        <nav className={styles.nav}>
          {isStyleguide ? (
            <Link className={`${styles.navLogo} link`} to="/">
              ← Back to Portfolio
            </Link>
          ) : (
            <Link className={styles.navLogo} to="/">
              pbsabella
            </Link>
          )}

          <ul className={`${styles.navList} ${styles.hideOnMedium}`}>
            <li className={`${styles.navItem} ${styles.navItemMobile}`}>
              <ThemeToggle id="theme-toggle-mobile" />
            </li>

            {!isStyleguide && (
              <li className={`${styles.navItem} ${styles.navItemMobile}`}>
                <button
                  className={styles.navMenu}
                  aria-controls="side-nav"
                  aria-label="Open main menu"
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

          {!isStyleguide && (
            <ul className={`${styles.navList} ${styles.hideOnSmall}`}>
              <li className={styles.navItem}>
                <Link className={`${styles.navLink} link`} to="/labs/styleguide">
                  Styleguide
                </Link>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} link`} href="#work">
                  Work
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} link`} href="#about">
                  About
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={`${styles.navLink} link`} href="#contact">
                  Contact
                </a>
              </li>
              <li className={styles.navItem}>
                <ThemeToggle id="theme-toggle" />
              </li>
            </ul>
          )}

          {isStyleguide && (
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
