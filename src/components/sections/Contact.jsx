import React from 'react';
import Section from '@components/layout/Section';
import Socials from '@components/ui/Socials';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <Section
            id="contact"
            introText="contact"
            title="Get in touch"
        >
            <p className={styles.sectionDescription}>
                Open to Senior Design System and Frontend Engineering roles.
            </p>

            <Socials />
        </Section>
    );
};

export default Contact;
