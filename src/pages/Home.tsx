import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollToSection } from '@hooks/useScrollToSection';
import Hero from '../components/sections/Hero';
import Work from '../components/sections/Work';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  // HashRouter-safe deep links:
  // Use `/#/?section=about` instead of `/#about` so refresh/share works with routing
  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get('section');
    if (!sectionId) return;

    scrollToSection(sectionId);
  }, [location.search, scrollToSection]);

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
