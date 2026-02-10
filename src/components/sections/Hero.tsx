import { Link } from 'react-router-dom';
import { SECTION_ANCHORS } from '@constants/routes';
import { useSectionNav } from '@hooks/useSectionNav';
import styles from './Hero.module.css';

const Hero = () => {
  const { getSectionLinkProps } = useSectionNav();

  return (
    <div id="hero" className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={`${styles.heroTitle} ${styles.heroIndent}`}>
          A portfolio
          <br />
          <span className={styles.heroIndentInner}>of sorts.</span>
        </h1>
        <div className={`${styles.heroAction} ${styles.heroIndent}`}>
          <Link
            className={styles.heroLink}
            {...getSectionLinkProps(SECTION_ANCHORS.ABOUT)}
          >
            <span>
              Senior Frontend Engineer & <br />
              Design Systems Engineer
            </span>
            <span className={styles.heroDivider}></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
