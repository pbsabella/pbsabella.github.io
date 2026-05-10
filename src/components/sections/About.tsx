import Card from '@components/ui/Card/Card';
import Grid from '@components/ui/Grid/Grid';
import FeaturedSection from '@components/sections/FeaturedSection';
import { COMPETENCIES, TECH_STACK } from '@/content/about';
import styles from './About.module.css';

const About = () => {
  return (
    <FeaturedSection id="about" introText="about" title="Background and expertise">
      <div className={styles.aboutLayout}>
        <p className={styles.aboutBio}>
          I spend my time building the systems that help teams ship better products. My work focuses on creating component libraries and frontend architectures that remain maintainable as they grow.
        </p>
        <p className={styles.aboutBio}>
          I thrive on the technical details of design systems and making complex products feel simple for the people using them.
        </p>
      </div>

      <Grid colsSm={2}>
        <Card>
          <div role="region" aria-labelledby="about-competencies-title">
            <h4 id="about-competencies-title" className={styles.skillsTitle}>Core competencies</h4>
            <ul>
              {COMPETENCIES.map((skill) => (
                <li key={skill} className={styles.skillsItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <div role="region" aria-labelledby="about-tech-stack-title">
            <h4 id="about-tech-stack-title" className={styles.skillsTitle}>Tech stack</h4>
            <ul>
              {TECH_STACK.map((skill) => (
                <li key={skill} className={styles.skillsItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </Card>
      </Grid>
    </FeaturedSection>
  );
};

export default About;
