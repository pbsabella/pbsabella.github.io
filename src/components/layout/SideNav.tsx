import { useEffect, useRef, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ROUTES, SECTION_ANCHORS } from '@constants/routes';
import styles from './SideNav.module.css';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  const navRef = useRef<HTMLDivElement>(null);

  // Trap focus when side nav is open
  useEffect(() => {
    if (!isOpen || !navRef.current) return;

    const focusableElements = navRef.current.querySelectorAll('a, button');
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent | Event): void => {
      const keyEvent = e as KeyboardEvent;
      if (keyEvent.key === 'Tab') {
        if (keyEvent.shiftKey) {
          if (document.activeElement === firstElement) {
            keyEvent.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            keyEvent.preventDefault();
            firstElement.focus();
          }
        }
      } else if (keyEvent.key === 'Escape') {
        onClose();
      }
    };

    const handleDocumentKeyDown = (e: Event): void => handleKeyDown(e);
    document.addEventListener('keydown', handleDocumentKeyDown);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleDocumentKeyDown);
  }, [isOpen, onClose]);

  const navContent = (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <nav
        id="side-nav"
        aria-label="Mobile menu"
        className={`${styles.sideMenu} ${isOpen ? styles.isActive : ''}`}
        ref={navRef}
      >
        <button
          id="side-menu-close"
          className={styles.sideMenuClose}
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

        <ul className={styles.sideMenuList}>
          <li className={styles.sideMenuItem}>
            <Link className={styles.sideMenuLink} to={ROUTES.STYLEGUIDE} onClick={onClose}>
              styleguide
            </Link>
          </li>
          <li className={styles.sideMenuItem}>
            <a className={styles.sideMenuLink} href={`#${SECTION_ANCHORS.WORK}`} onClick={onClose}>
              work
            </a>
          </li>
          <li className={styles.sideMenuItem}>
            <a className={styles.sideMenuLink} href={`#${SECTION_ANCHORS.ABOUT}`} onClick={onClose}>
              about
            </a>
          </li>
          <li className={styles.sideMenuItem}>
            <a
              className={styles.sideMenuLink}
              href={`#${SECTION_ANCHORS.CONTACT}`}
              onClick={onClose}
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );

  // Teleport the navContent to the end of the <body> tag
  return createPortal(navContent, document.body);
};

export default SideNav;
