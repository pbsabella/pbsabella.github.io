import Card from '@components/ui/Card';
import Section from '@components/layout/Section';
import styles from './About.module.css';

const About = () => {
  const competencies = [
    'Design Systems',
    'Design Tokens',
    'Component Lifecycle Management',
    'Accessibility (WCAG)',
    'Frontend Architecture',
    'Mentoring & Leadership',
  ];

  const techStack = [
    'TypeScript, JavaScript',
    'Vue.js, Angular',
    'HTML, CSS, Tailwind',
    'Vite, Webpack',
    'Figma',
    'Unit, Component, End-to-End, & Visual Testing (Jest, Cypress, Percy)',
  ];

  return (
    <Section id="about" introText="about" title="A little overview" bgClass="bgAccentIce">
      <div className={`${styles.aboutContent} ${styles.flex}`}>
        <p className={`${styles.aboutDescription} ${styles.flexItem2}`}>
          Senior Frontend Engineer with deep expertise in <strong>Design Systems</strong> and
          scalable architecture. I bridge the gap between design and engineering, translating visual
          language into robust, accessible code.
          <br />
          <br />I am passionate about developer experience, tooling, and creating inclusive
          products.
        </p>

        <div className={styles.flex}>
          <Card className={styles.flexItem}>
            <h4 className={styles.skillsTitle}>Core Competencies</h4>
            <ul className={styles.skillsList}>
              {competencies.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </Card>

          <Card className={styles.flexItem}>
            <h4 className={styles.skillsTitle}>Tech Stack</h4>
            <ul className={styles.skillsList}>
              {techStack.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default About;
