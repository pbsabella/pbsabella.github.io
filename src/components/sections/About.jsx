import React from 'react';
import Section from '@components/layout/Section';
import SkillsCard from '@components/ui/SkillsCard';
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
        <Section
            id="about"
            introText="about"
            title="A little overview"
            bgClass="bgAccentNeutral"
        >
            <div className={`${styles.aboutContent} ${styles.flex}`}>
                <p className={`${styles.aboutDescription} ${styles.flexItem2}`}>
                    Senior Frontend Engineer with deep expertise in <strong>Design Systems</strong> and scalable architecture.
                    I bridge the gap between design and engineering, translating visual language into robust, accessible code.
                    <br /><br />
                    I am passionate about developer experience, tooling, and creating inclusive products.
                </p>

                <div className={styles.flex}>
                    <SkillsCard
                        title="Core Competencies"
                        skills={competencies}
                        className={styles.flexItem}
                    />
                    <SkillsCard
                        title="Tech Stack"
                        skills={techStack}
                        className={styles.flexItem}
                    />
                </div>
            </div>
        </Section>
    );
};

export default About;
