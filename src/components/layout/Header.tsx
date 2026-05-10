import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useHeaderScroll } from '@hooks/useHeaderScroll';
import BrandThemeToggle from '@components/ui/BrandThemeToggle/BrandThemeToggle';
import { ROUTES } from '@constants/routes';
import styles from './Header.module.css';
import Container from '@/components/layout/Container';

interface HeaderProps {
  toggleSideNav: () => void;
  isSideNavOpen: boolean;
}

type DesktopLink = {
  label: string;
  to: string | { pathname: string; search: string };
  isActive: boolean;
  isParentRoute?: boolean;
  onClick?: () => void;
  ariaCurrent?: 'page';
};

const Header = ({ toggleSideNav, isSideNavOpen }: HeaderProps) => {
  const { isHidden, isTransparent } = useHeaderScroll();
  const { pathname } = useLocation();

  const isLabsRoot = pathname === ROUTES.LABS;

  const desktopLinks: DesktopLink[] = [
    {
      label: 'Work',
      to: ROUTES.HOME,
      isActive: pathname === ROUTES.HOME,
      ariaCurrent: pathname === ROUTES.HOME ? 'page' : undefined,
    },
    {
      label: 'About',
      to: ROUTES.ABOUT,
      isActive: pathname === ROUTES.ABOUT,
      ariaCurrent: pathname === ROUTES.ABOUT ? 'page' as const : undefined,
    },
    {
      label: 'Labs',
      to: ROUTES.LABS,
      isActive: pathname === ROUTES.LABS,
      ariaCurrent: pathname === ROUTES.LABS ? 'page' as const : undefined,
      isParentRoute: pathname.startsWith(ROUTES.LABS) && !isLabsRoot,
    },
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
              <BrandThemeToggle id="theme-toggle-mobile" />
            </li>

            <li className={`${styles.navItem}`}>
              <button
                className={styles.navMenu}
                aria-expanded={isSideNavOpen}
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
                  className={`${styles.navLink} link ${link.isActive ? styles.navLinkActive : link.isParentRoute ? styles.navLinkParent : ''}`}
                  to={link.to}
                  aria-current={link.ariaCurrent ?? (link.isActive ? 'location' : undefined)}
                  onClick={link.onClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className={styles.navItem}>
              <BrandThemeToggle id="theme-toggle" />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
