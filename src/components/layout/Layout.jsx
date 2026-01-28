import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import SideNav from '@components/layout/SideNav';
import XRay from '@components/ui/XRay';
import styles from './Layout.module.css';

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
                className={`${styles.overlay} ${isSideNavOpen ? styles.overlayActive : ''}`}
                onClick={closeSideNav}
                role="presentation"
            ></div>

            <Header toggleSideNav={toggleSideNav} />

            <SideNav
                isOpen={isSideNavOpen}
                onClose={closeSideNav}
            />

            <main className={isSideNavOpen ? styles.isDisabled : ''}>
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
