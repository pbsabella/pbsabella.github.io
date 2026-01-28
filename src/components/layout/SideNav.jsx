import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.css';

const SideNav = ({ isOpen, onClose }) => {
    const navRef = useRef(null);

    // Trap focus when side nav is open
    useEffect(() => {
        if (!isOpen) return;

        const focusableElements = navRef.current.querySelectorAll('a, button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleKeyDown = (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        firstElement?.focus();

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const navContent = (
        <>
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayActive : ''}`}
                onClick={onClose}
                role="presentation"
            ></div>

            <div
                id="side-nav"
                className={`${styles.sideMenu} ${isOpen ? styles.isActive : ''}`}
                ref={navRef}
            >
                <button
                    id="side-menu-close"
                    className={styles.sideMenuClose}
                    aria-label="Close menu"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <ul className={styles.sideMenuList}>
                    <li className={styles.sideMenuItem}>
                        <Link className={styles.sideMenuLink} to="/labs/styleguide" onClick={onClose}>styleguide</Link>
                    </li>
                    <li className={styles.sideMenuItem}>
                        <a className={styles.sideMenuLink} href="#work" onClick={onClose}>work</a>
                    </li>
                    <li className={styles.sideMenuItem}>
                        <a className={styles.sideMenuLink} href="#about" onClick={onClose}>about</a>
                    </li>
                    <li className={styles.sideMenuItem}>
                        <a className={styles.sideMenuLink} href="#contact" onClick={onClose}>contact</a>
                    </li>
                </ul>
            </div>
        </>
    );

    // Teleport the navContent to the end of the <body> tag
    return createPortal(navContent, document.body);
};

SideNav.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SideNav;
