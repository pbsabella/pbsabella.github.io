import Card from '@components/ui/Card/Card';
import FeaturedSection from '@components/sections/FeaturedSection';
import { COMPETENCIES, TECH_STACK } from '@/content/about';
import styles from './About.module.css';

const About = () => {
  return (
    <FeaturedSection id="about" introText="about" title="Background and expertise">
      <div className={styles.aboutLayout}>
        <p className={styles.aboutBio}>
          I am a Senior Frontend Engineer with over a decade of experience in
          <strong>Frontend Architecture</strong>, <strong>Design System governance</strong>, and
          <strong>product engineering</strong>. My focus is on building scalable, high-performance
          systems and component libraries that drive platform-wide consistency and maximize developer
          velocity.
        </p>
      </div>

      <div className={styles.aboutGrid}>
        <Card>
          <div role="region" aria-labelledby="about-competencies-title">
            <h4 id="about-competencies-title" className={styles.skillsTitle}>Core Competencies</h4>
            <ul className={styles.skillsList}>
              {COMPETENCIES.map((skill) => (
                <li key={skill} className={styles.skillsItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <div role="region" aria-labelledby="about-tech-stack-title">
            <h4 id="about-tech-stack-title" className={styles.skillsTitle}>Tech Stack</h4>
            <ul className={styles.skillsList}>
              {TECH_STACK.map((skill) => (
                <li key={skill} className={styles.skillsItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </FeaturedSection>
  );
};

export default About;
