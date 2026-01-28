import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div id="hero" className={styles.hero}>
            <div className={styles.heroInner}>
                <h1 className={`${styles.heroTitle} ${styles.heroIndent}`}>
                    A portfolio<br />
                    <span className={styles.heroIndentInner}>of sorts.</span>
                </h1>
                <div className={`${styles.heroAction} ${styles.heroIndent}`}>
                    <a className={styles.heroLink} href="#about">
                        <span>
                            Senior Frontend Engineer & <br />
                            Design Systems Specialist
                        </span>
                        <span className={styles.heroDivider}></span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
