import FeaturedSection from '@components/sections/FeaturedSection';
import Socials from '@components/ui/Socials/Socials';
import Button from '@components/ui/Button/Button';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <FeaturedSection id="contact" introText="contact" title="Get in touch">
      <div className={styles.contactLayout}>
        <p className={styles.contactLead}>
          Open to Senior Frontend Engineer and Design Systems Engineer roles.
        </p>
        <p className={styles.contactCopy}>
          If your team needs a hands-on engineer to scale frontend systems and ship reliable product
          experiences, let&apos;s talk.
        </p>
        <div className={styles.contactActions}>
          <a href="mailto:pau.abella@gmail.com">
            <Button variant="primary" size="md">Email me</Button>
          </a>
          <Socials className={styles.contactSocials} />
        </div>
      </div>
    </FeaturedSection>
  );
};

export default Contact;
