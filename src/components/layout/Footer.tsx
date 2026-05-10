import { Globe } from 'lucide-react';
import Socials from '@/components/ui/Socials/Socials';
import Tag from '@components/ui/Tag/Tag';
import Container from '@/components/layout/Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container variant="wide" className={styles.footerInner}>
        <div>
          <Tag size="sm" variant="success">
            Available for new challenges
          </Tag>
        </div>
        <div className={styles.footerContent}>
          <div className={styles.footerIntro}>
            <span className="h3">
              Let&apos;s build something<br />
              <span className={styles.footerAccent}>reliable.</span>
            </span>
            <p className={styles.footerLead}>
              Currently looking for Senior Frontend or Design Systems roles where I can scale architecture and ship polished products.
            </p>
          </div>
          <Socials />
        </div>

        <div className={styles.footerInfo}>
          <span className={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} <b>pbsabella</b>.
          </span>

          <div className={styles.footerLocation}>
            <Globe size={14} /> Manila, PH
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
