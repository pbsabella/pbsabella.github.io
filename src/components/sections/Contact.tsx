import FeaturedSection from '@components/sections/FeaturedSection';
import Socials from '@components/ui/Socials/Socials';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <FeaturedSection id="contact" introText="contact" title="Get in touch">
      <div className={styles.contactLayout}>
        <p className={styles.contactLead}>
          Open to Senior Frontend and Design Systems Engineering roles focused on platform quality
          and product delivery.
        </p>
        <p className={styles.contactCopy}>
          If your team needs a hands-on engineer to scale frontend systems and ship reliable product
          experiences, let&apos;s talk.
        </p>
        <Socials className={styles.contactSocials} />
      </div>
    </FeaturedSection>
  );
};

export default Contact;
