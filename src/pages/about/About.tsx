import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card/Card';
import Grid from '@/components/ui/Grid/Grid';
import { COMPETENCIES, TECH_STACK } from '@/content/about';
import styles from './About.module.css';
import { ABOUT_META } from '@/content/pageMeta';

const About = () => {
  return (
    <section className={styles.pageWrap}>
      <Container className={styles.about}>
        <h1 className={styles.aboutTitle}>{ABOUT_META.title}</h1>

        <div className={styles.aboutLayout}>
          <p className={styles.aboutDescription}>
            I spend my time building the systems that help teams ship better products. My work focuses on creating component libraries and frontend architectures that remain maintainable as they grow.
          </p>
          <p className={styles.aboutDescription}>
            I thrive on the technical details of design systems and making complex products feel simple for the people using them.
          </p>
        </div>


        <Grid colsSm={2}>
          <Card>
            <div role="region" aria-labelledby="about-competencies-title">
              <h2 id="about-competencies-title" className={styles.skillsTitle}>Core competencies</h2>
              <ul>
                {COMPETENCIES.map((skill) => (
                  <li key={skill} className={styles.skillsItem}>{skill}</li>
                ))}
              </ul>
            </div>
          </Card>

          <Card>
            <div role="region" aria-labelledby="about-tech-stack-title">
              <h2 id="about-tech-stack-title" className={styles.skillsTitle}>Tech stack</h2>
              <ul>
                {TECH_STACK.map((skill) => (
                  <li key={skill} className={styles.skillsItem}>{skill}</li>
                ))}
              </ul>
            </div>
          </Card>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
