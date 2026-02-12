import FeaturedSection from '@components/sections/FeaturedSection';
import Socials from '@components/ui/Socials/Socials';
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
          <a className={styles.contactEmailLink} href="mailto:pau.abella@gmail.com">Email me</a>
          <Socials className={styles.contactSocials} />
        </div>
      </div>
    </FeaturedSection>
  );
};

export default Contact;
