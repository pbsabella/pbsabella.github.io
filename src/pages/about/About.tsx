import Container from '@/components/layout/Container';
import Grid from '@/components/ui/Grid/Grid';
import { COMPETENCIES, TECH_STACK } from '@/content/aboutMeta';
import styles from './About.module.css';
import { ABOUT_META } from '@/content/pageMeta';
import IconList from '@/components/sections/IconList';
import { Accessibility, ExternalLink, Layout } from 'lucide-react';

const About = () => {
  return (
    <section className={styles.pageWrap}>
      <Container className={styles.about}>
        <h1 className={styles.aboutTitle}>{ABOUT_META.title}</h1>

        <div className={styles.aboutContent}>
          <p className={styles.aboutDescription}>
            I spend my time building the systems that help teams ship better products. My work focuses on creating component libraries and frontend architectures that remain maintainable as they grow.
          </p>
          <p className={styles.aboutDescription}>
            I thrive on the technical details of design systems and making complex products feel simple for the people using them.
          </p>
        </div>

        <div className={styles.aboutContent} role="region" aria-labelledby="about-competencies-title">
          <h2 id="about-competencies-title" className={`${styles.aboutSubtitle} kicker`}>
            Core competencies
          </h2>

          <IconList
            variant="grid"
            iconPlacement="top"
            align="start"
            size="sm"
            iconColor="primary"
            items={COMPETENCIES}
          />
        </div>

        <div className={styles.aboutContent} role="region" aria-labelledby="about-tech-stack-title">
          <h2 id="about-tech-stack-title" className={`${styles.aboutSubtitle} kicker`}>
            Tech stack & tools
          </h2>
          <IconList
            variant="grid"
            iconPlacement="top"
            align="start"
            size="sm"
            iconColor="primary"
            items={TECH_STACK}
          />
        </div>



        <div className={styles.aboutContent} role="region" aria-labelledby="about-certifications-title">
          <h2 id="about-certifications-title" className={`${styles.aboutSubtitle} kicker`}>
            Certifications
          </h2>

          <Grid colsSm={2} gap="lg">
            <div className={styles.aboutCert}>
              <Layout className={styles.aboutCertIcon} size={24} aria-hidden="true" />
              <h3 className="h4">Google UX Design</h3>
              <p className={styles.certificationSubtitle}>Professional Certificate</p>
              <ul className={styles.aboutList}>
                <li>Foundations of User Experience (UX) Design and Research</li>
                <li>Wireframes, Low-Fidelity and High-Fidelity Prototypes in Figma</li>
                <li>Accessible and Dynamic User Interfaces (UI)</li>
              </ul>
              <div>
                <a
                  className={styles.aboutCertLink}
                  href="https://www.credly.com/badges/98b55e17-f31c-4787-b493-cf04e99c4269/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Verify Google UX Design certificate on Credly (opens in a new tab)"
                >
                  <span>Verify on Credly</span> <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className={styles.aboutCert}>
              <Accessibility className={styles.aboutCertIcon} size={24} aria-hidden="true" />
              <h3 className="h4">Introduction to Web Accessibility</h3>
              <p className={styles.certificationSubtitle}>W3C / WAI0.1x Certification</p>
              <ul className={styles.aboutList}>
                <li>WCAG 2.1 compliance, screen reader optimization, and inclusive media</li>
                <li>Semantic ARIA patterns, landmarks, and navigation logic</li>
              </ul>
              <div>
                <a
                  className={styles.aboutCertLink}
                  href="https://courses.edx.org/certificates/f0a9ebe59cf341b58f914aa157d6cc80"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Introduction to Web Accessibility certificate (opens in a new tab)"
                >
                  <span>View certificate</span> <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Grid>

        </div>
      </Container>
    </section>
  );
};

export default About;
