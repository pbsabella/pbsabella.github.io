import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import SideNav from '@components/layout/SideNav';
// import XRay from '@components/ui/XRay';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    // TODO: Add back x-ray for styleguide
    // const location = useLocation();
    // const isStyleguide = location.pathname === '/labs/styleguide';

    const toggleSideNav = () => {
        setIsSideNavOpen((prev) => !prev);
    };

    const closeSideNav = () => {
        setIsSideNavOpen(false);
    };

    useEffect(() => {
        if (isSideNavOpen) {
            document.body.classList.add(styles.noScroll);
        } else {
            document.body.classList.remove(styles.noScroll);
        }

        // Cleanup function when component unmounts
        return () => {
            document.body.classList.remove(styles.noScroll);
        };
    }, [isSideNavOpen]);

    return (
        <>
            <Header toggleSideNav={toggleSideNav} />

            <SideNav
                isOpen={isSideNavOpen}
                onClose={closeSideNav}
            />

            <main className={isSideNavOpen ? styles.isDisabled : ''}>
                {children}
            </main>

            <Footer />
            {/* {isStyleguide && <XRay />} */}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
