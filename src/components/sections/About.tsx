import Card from '@components/ui/Card';
import Section from '@components/layout/Section';
import { COMPETENCIES, TECH_STACK } from '@/content/about';
import styles from './About.module.css';

const About = () => {
  return (
    <Section id="about" introText="about" title="A little overview" bgClass="bgAccentIce">
      <div className={`${styles.aboutContent} ${styles.flex}`}>
        <p className={`${styles.aboutDescription} ${styles.flexItem2}`}>
          I am a Senior Frontend Engineer with over a decade of experience in <strong>Frontend Architecture</strong>, <strong>Design System governance</strong>, and <strong>product engineering</strong>. My focus is on building scalable, high-performance systems and component libraries that drive platform-wide consistency and maximize developer velocity. I thrive on bridging the gap between design vision and technical implementation.
        </p>

        <div className={styles.flex}>
          <Card className={styles.flexItem}>
            <h4 className={styles.skillsTitle}>Core Competencies</h4>
            <ul className={styles.skillsList}>
              {COMPETENCIES.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Card>

          <Card className={styles.flexItem}>
            <h4 className={styles.skillsTitle}>Tech Stack</h4>
            <ul className={styles.skillsList}>
              {TECH_STACK.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default About;
