import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Work from '../components/sections/Work';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
  // Handle smooth scroll for anchor links
  useEffect(() => {
    const handleScrollLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash && target.origin === window.location.origin) {
        const targetId = target.hash.slice(1);
        const targetElem = document.getElementById(targetId);

        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update URL without jump
          window.history.pushState(null, '', target.hash);
        }
      }
    };

    document.addEventListener('click', handleScrollLinkClick);
    return () => document.removeEventListener('click', handleScrollLinkClick);
  }, []);

  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
};

export default Home;
