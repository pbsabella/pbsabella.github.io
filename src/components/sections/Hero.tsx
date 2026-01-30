import { Link } from 'react-router-dom';
import { ROUTES, SECTION_ANCHORS } from '@constants/routes';
import styles from './Hero.module.css';

const Hero = () => {
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
            to={{ pathname: ROUTES.HOME, search: `?section=${SECTION_ANCHORS.ABOUT}` }}
          >
            <span>
              Senior Frontend Engineer & <br />
              Design Systems Specialist
            </span>
            <span className={styles.heroDivider}></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
