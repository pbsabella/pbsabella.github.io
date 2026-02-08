import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ROUTES, SECTION_ANCHORS } from '@constants/routes';
import { useScrollToSection } from '@hooks/useScrollToSection';
import styles from './SideNav.module.css';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const scrollToSection = useScrollToSection();

  // Trap focus when side nav is open and restore focus when it closes
  useEffect(() => {
    if (!isOpen || !navRef.current) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    const getFocusable = () =>
      navRef.current?.querySelectorAll<HTMLElement>(
        [
          'a[href]',
          'button:not([disabled])',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])',
        ].join(', ')
      ) ?? [];

    const focusCloseButton = () => {
      const closeButton = navRef.current?.querySelector<HTMLElement>('#side-menu-close');
      closeButton?.focus();
    };

    const handleDocumentKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusable = Array.from(getFocusable());
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || active === navRef.current) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleDocumentKeyDown);
    focusCloseButton();

    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [isOpen, onClose]);

  const navContent = (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <aside
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <nav>
          <ul className={styles.sideMenuList}>
            <li className={styles.sideMenuItem}>
              <Link className={styles.sideMenuLink} to={ROUTES.LABS} onClick={onClose}>
                Labs
              </Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link
                className={styles.sideMenuLink}
                to={{ pathname: ROUTES.HOME, search: `?section=${SECTION_ANCHORS.WORK}` }}
                onClick={() => {
                  scrollToSection(SECTION_ANCHORS.WORK);
                  onClose();
                }}
              >
                Work
              </Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link
                className={styles.sideMenuLink}
                to={{ pathname: ROUTES.HOME, search: `?section=${SECTION_ANCHORS.ABOUT}` }}
                onClick={() => {
                  scrollToSection(SECTION_ANCHORS.ABOUT);
                  onClose();
                }}
              >
                About
              </Link>
            </li>
            <li className={styles.sideMenuItem}>
              <Link
                className={styles.sideMenuLink}
                to={{ pathname: ROUTES.HOME, search: `?section=${SECTION_ANCHORS.CONTACT}` }}
                onClick={() => {
                  scrollToSection(SECTION_ANCHORS.CONTACT);
                  onClose();
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );

  // Teleport the navContent to the end of the <body> tag
  return createPortal(navContent, document.body);
};

export default SideNav;
