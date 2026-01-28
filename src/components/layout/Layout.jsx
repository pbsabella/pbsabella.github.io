import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideNav from './SideNav';
import XRay from '../ui/XRay';

const Layout = ({ children }) => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const location = useLocation();
    const isStyleguide = location.pathname === '/labs/styleguide';

    const toggleSideNav = () => {
        setIsSideNavOpen((prev) => !prev);
    };

    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };

    return (
        <>
            <div
                id="overlay"
                className={isSideNavOpen ? 'is-active' : ''}
                onClick={closeSideNav}
                role="presentation"
            ></div>

            <Header toggleSideNav={toggleSideNav} />

            <SideNav
                isOpen={isSideNavOpen}
                onClose={closeSideNav}
            />

            <main className={isSideNavOpen ? 'is-disabled' : ''}>
                {children}
            </main>

            <Footer />
            {isStyleguide && <XRay />}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
