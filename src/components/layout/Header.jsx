import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useScrollManager } from '../../hooks/useScrollManager';
import ThemeToggle from '../ui/ThemeToggle';

const Header = ({ toggleSideNav }) => {
    const { headerClass } = useScrollManager();
    const location = useLocation();
    const isStyleguide = location.pathname === '/labs/styleguide';

    return (
        <header className={`header ${headerClass}`}>
            <div className="header__inner container-space">
                <nav className="nav">
                    {isStyleguide ? (
                        <Link className="nav__logo link" to="/">← Back to Portfolio</Link>
                    ) : (
                        <Link className="nav__logo" to="/">pbsabella</Link>
                    )}

                    <ul className="nav__list hide-on-medium">
                        <li className="nav__item nav__item--mobile">
                            <ThemeToggle id="theme-toggle-mobile" />
                        </li>
                        <li className="nav__item nav__item--mobile">
                            <button
                                id="menu-toggle"
                                className="nav__menu"
                                aria-controls="side-nav"
                                aria-label="Open main menu"
                                onClick={toggleSideNav}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            </button>
                        </li>
                    </ul>

                    {!isStyleguide && (
                        <ul className="nav__list hide-on-small">
                            <li className="nav__item">
                                <Link className="nav__link link" to="/labs/styleguide">Styleguide</Link>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link link scrollspy" href="#work">Work</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link link scrollspy" href="#about">About</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link link scrollspy" href="#contact">Contact</a>
                            </li>
                            <li className="nav__item">
                                <ThemeToggle id="theme-toggle" />
                            </li>
                        </ul>
                    )}

                    {isStyleguide && (
                        <ul className="nav__list hide-on-small">
                            <li className="nav__item">
                                <ThemeToggle id="theme-toggle" />
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
};

Header.propTypes = {
    toggleSideNav: PropTypes.func.isRequired,
};

export default Header;
