import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Work from '../components/sections/Work';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => {
  const location = useLocation();

  // HashRouter-safe deep links:
  // Use `/#/?section=about` instead of `/#about` so refresh/share works with routing.
  useEffect(() => {
    const sectionId = new URLSearchParams(location.search).get('section');
    if (!sectionId) return;

    const target = document.getElementById(sectionId);
    if (!target) return;

    // Wait a frame to ensure layout is ready (and avoid scroll races during nav).
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.search]);

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
