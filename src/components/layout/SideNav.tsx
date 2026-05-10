import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { ROUTES } from '@constants/routes';
import { useFocusTrap } from '@hooks/useFocusTrap';
import styles from './SideNav.module.css';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();


  useFocusTrap(navRef, {
    isActive: isOpen,
    onEscape: onClose,
    initialFocusSelector: '#side-menu-close',
  });

  const navContent = (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        id="side-nav"
        aria-label="Mobile menu"
        role="dialog"
        aria-modal="true"
        className={`${styles.sideMenu} ${isOpen ? styles.sideMenuOpen : ''}`}
        ref={navRef}
      >
        <button
          id="side-menu-close"
          className={styles.sideMenuCloseButton}
          aria-label="Close mobile menu"
          onClick={onClose}
        >
          <X size={24} aria-hidden="true" />
        </button>

        <nav>
          <ul className={styles.sideMenuList}>
            <li className={styles.sideMenuItem}>
              <Link
                className={`${styles.sideMenuLink} ${pathname === ROUTES.HOME ? styles.activeLink : ''}`}
                to={ROUTES.HOME}
                onClick={onClose}
              >
                Work
              </Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link
                className={`${styles.sideMenuLink} ${pathname === ROUTES.ABOUT ? styles.activeLink : ''}`}
                to={ROUTES.ABOUT}
                onClick={onClose}
              >
                About
              </Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link
                className={`${styles.sideMenuLink} ${pathname === ROUTES.LABS ? styles.activeLink : ''} ${pathname.startsWith(ROUTES.LABS) && !pathname.endsWith(ROUTES.LABS) ? styles.activeParentLink : ''}`}
                to={ROUTES.LABS}
                onClick={onClose}
              >
                Labs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );

  // Teleport the navContent to the end of the <body> tag
  return createPortal(navContent, document.body);
};

export default SideNav;
