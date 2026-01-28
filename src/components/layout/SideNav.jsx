import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

    return (
        <div id="side-nav" className={`side-menu ${isOpen ? 'is-active' : ''}`} ref={navRef}>
            <button
                id="side-menu-close"
                className="side-menu__close"
                aria-label="Close menu"
                onClick={onClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>

            <ul className="side-menu__list">
                <li className="side-menu__item">
                    <Link className="side-menu__link" to="/labs/styleguide" onClick={onClose}>styleguide</Link>
                </li>
                <li className="side-menu__item">
                    <a className="side-menu__link" href="#work" onClick={onClose}>work</a>
                </li>
                <li className="side-menu__item">
                    <a className="side-menu__link" href="#about" onClick={onClose}>about</a>
                </li>
                <li className="side-menu__item">
                    <a className="side-menu__link" href="#contact" onClick={onClose}>contact</a>
                </li>
            </ul>
        </div>
    );
};

SideNav.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SideNav;
