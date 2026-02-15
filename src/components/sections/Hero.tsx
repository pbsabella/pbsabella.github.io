import { Link } from 'react-router-dom';
import { ROUTES, SECTION_ANCHORS } from '@constants/routes';
import { useSectionNav } from '@hooks/useSectionNav';
import Tag from '@components/ui/Tag/Tag';
import Container from '@components/layout/Container';
import HeroCanvas from '@/components/sections/HeroCanvas';
import Button from '@components/ui/Button/Button';
import styles from './Hero.module.css';

const HERO_TOOLSET = [
  'Design Systems',
  'Frontend Architecture',
  'TypeScript',
];

const Hero = () => {
  const { getSectionLinkProps } = useSectionNav();

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroSurface}>
        <HeroCanvas />
        <Container className={styles.heroInner} variant="wide">
          <div className={styles.heroBadgeRow}>
            <Tag size="md" variant="success">
              Personal Portfolio
            </Tag>
            <span className={styles.heroRule} aria-hidden="true" />
            <span className={styles.heroMeta}>Senior Frontend Engineer | Design Systems Engineer</span>
          </div>

          <h1 id="hero-title" className={styles.heroTitle}>
            Building product interfaces with system rigor and an eye for pixel-perfect detail.
          </h1>

          <p className={styles.heroLead}>
            I build frontend systems for complex products, balancing thoughtful UI craft with
            practical implementation details.
          </p>

          <ul className={styles.heroToolset} aria-label="Core toolset and expertise">
            {HERO_TOOLSET.map((item) => (
              <li key={item}>
                <Tag size="sm">{item}</Tag>
              </li>
            ))}
          </ul>

          <div className={styles.heroActions}>
            <Button
              as={Link}
              {...getSectionLinkProps(SECTION_ANCHORS.CONTACT)}
            >
              Contact me
            </Button>

            <Button as={Link} to={ROUTES.LABS} variant="secondary">
              Explore labs
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
