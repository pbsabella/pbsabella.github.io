import { useState, useEffect, ReactNode } from 'react';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import SideNav from '@components/layout/SideNav';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

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

      <SideNav isOpen={isSideNavOpen} onClose={closeSideNav} />

      <main className={isSideNavOpen ? styles.isDisabled : ''}>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
