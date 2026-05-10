import Tag from '@components/ui/Tag/Tag';
import Container from '@components/layout/Container';
import HeroCanvas from '@/components/sections/HeroCanvas';
import styles from './Hero.module.css';

const HERO_TOOLSET = [
  'Design Systems',
  'Frontend Architecture',
  'Product Delivery',
  'TypeScript',
  'UI Engineering',
];

const Hero = () => {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroSurface}>
        <HeroCanvas />
        <Container className={styles.heroInner} variant="wide">
          <div className={styles.heroBadgeRow}>
            {/* <Tag size="md" variant="primary">
              Personal Portfolio
            </Tag>
            <span className={styles.heroRule} aria-hidden="true" /> */}
            <span className={styles.heroMeta}>Senior Frontend Engineer // Design Systems // Product Engineer</span>
          </div>

          <h1 id="hero-title" className={styles.heroTitle}>
            I build scalable frontend systems that make complex products simple to use.
          </h1>

          <p className={styles.heroLead}>
            I work on the logic and architecture that keep large-scale applications maintainable. My focus is on state management, internal tooling, and the systems needed to turn complex requirements into reliable product experiences.
          </p>

          <ul className={styles.heroToolset} aria-label="Core toolset and expertise">
            {HERO_TOOLSET.map((item) => (
              <li key={item}>
                <Tag size="sm">{item}</Tag>
              </li>
            ))}
            <li>
              <Tag size="sm" variant="success">
                Available
              </Tag>
            </li>
          </ul>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
