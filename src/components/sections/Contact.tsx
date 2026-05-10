import FeaturedSection from '@components/sections/FeaturedSection';
import Button from '@components/ui/Button/Button';
import Socials from '@components/ui/Socials/Socials';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <FeaturedSection id="contact" introText="contact" title="Get in touch">
      <div className={styles.contactLayout}>
        <p className={styles.contactLead}>
          I&apos;m currently looking for my next challenge in <strong>Senior Frontend</strong> or <strong>Design Systems Engineering</strong>.
        </p>
        <p className={styles.contactCopy}>
          If your team needs a hands-on lead to scale your frontend architecture and ship reliable, polished product experiences, I&apos;d love to talk.
        </p>
        <div className={styles.contactActions}>
          <Button
            as="a"
            href="mailto:pau.abella@gmail.com"
          >
            Email
          </Button>
          <Socials />
        </div>
      </div>
    </FeaturedSection>
  );
};

export default Contact;
