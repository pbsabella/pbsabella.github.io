import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { ROUTES, SECTION_ANCHORS } from '@constants/routes';
import { useSectionNav } from '@hooks/useSectionNav';
import { useFocusTrap } from '@hooks/useFocusTrap';
import styles from './SideNav.module.css';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const { getSectionLinkProps } = useSectionNav();
  const { pathname } = useLocation();
  const isLabEnvironment = pathname.startsWith(ROUTES.LABS);
  const workLink = getSectionLinkProps(SECTION_ANCHORS.WORK);
  const aboutLink = getSectionLinkProps(SECTION_ANCHORS.ABOUT);
  const contactLink = getSectionLinkProps(SECTION_ANCHORS.CONTACT);

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

      <aside
        id="side-nav"
        aria-label="Mobile menu"
        role="dialog"
        aria-modal={isOpen ? 'true' : undefined}
        aria-hidden={isOpen ? undefined : 'true'}
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
            {!isLabEnvironment && (
              <>
                <li className={styles.sideMenuItem}>
                  <Link
                    className={styles.sideMenuLink}
                    {...workLink}
                    onClick={() => {
                      workLink.onClick();
                      onClose();
                    }}
                  >
                    Work
                  </Link>
                </li>
                <li className={styles.sideMenuItem}>
                  <Link
                    className={styles.sideMenuLink}
                    {...aboutLink}
                    onClick={() => {
                      aboutLink.onClick();
                      onClose();
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className={styles.sideMenuItem}>
                  <Link
                    className={styles.sideMenuLink}
                    {...contactLink}
                    onClick={() => {
                      contactLink.onClick();
                      onClose();
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li className={styles.sideMenuItem}>
                  <Link className={styles.sideMenuLink} to={ROUTES.LABS} onClick={onClose}>
                    Labs
                  </Link>
                </li>
              </>
            )}
            {isLabEnvironment && (
              <>
                <li className={styles.sideMenuItem}>
                  <Link className={styles.sideMenuLink} to={ROUTES.LABS} onClick={onClose} aria-current="page">
                    Labs
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );

  // Teleport the navContent to the end of the <body> tag
  return createPortal(navContent, document.body);
};

export default SideNav;
