import Card from '@components/ui/Card';
import FeaturedSection from '@components/sections/FeaturedSection';
import { COMPETENCIES, TECH_STACK } from '@/content/about';
import styles from './About.module.css';

const About = () => {
  return (
    <FeaturedSection id="about" introText="about" title="A little overview" bgClass="bgAccentIce">
      <div>
        <p className={`${styles.aboutBio}`}>
          I am a Senior Frontend Engineer with over a decade of experience in <strong>Frontend Architecture</strong>, <strong>Design System governance</strong>, and <strong>product engineering</strong>. My focus is on building scalable, high-performance systems and component libraries that drive platform-wide consistency and maximize developer velocity. I thrive on bridging the gap between design vision and technical implementation.
        </p>

        <div className={styles.aboutGrid}>
          <Card className={styles.aboutCard}>
            <h4 className={styles.skillsTitle}>Core Competencies</h4>
            <ul className={styles.skillsList}>
              {COMPETENCIES.map((skill) => (
                <li key={skill} className={styles.skillsItem}>{skill}</li>
              ))}
            </ul>
          </Card>

          <Card className={styles.aboutCard}>
            <h4 className={styles.skillsTitle}>Tech Stack</h4>
            <ul className={styles.skillsList}>
              {TECH_STACK.map((skill) => (
                <li key={skill} className={styles.skillsItem}>{skill}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </FeaturedSection>
  );
};

export default About;
