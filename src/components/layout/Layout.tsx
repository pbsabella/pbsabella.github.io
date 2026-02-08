import { useState, useRef, ReactNode } from 'react';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import SideNav from '@components/layout/SideNav';
import { useBodyScrollLock } from '@hooks/useBodyScrollLock';
import { useInert } from '@hooks/useInert';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const toggleSideNav = () => {
    setIsSideNavOpen((prev) => !prev);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  useBodyScrollLock(isSideNavOpen, { className: styles.noScroll });
  useInert(mainRef, isSideNavOpen);

  return (
    <div className={styles.appWrapper}>
      <Header toggleSideNav={toggleSideNav} />

      <SideNav isOpen={isSideNavOpen} onClose={closeSideNav} />

      <main
        ref={mainRef}
        className={`${styles.mainContent} ${isSideNavOpen ? styles.mainContentDisabled : ''}`}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
