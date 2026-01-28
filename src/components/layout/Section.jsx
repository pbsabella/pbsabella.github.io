import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';
import Container from './Container';

const Section = ({
    id,
    title,
    introText,
    children,
    className = '',
    bgClass = '',
    noContainer = false
}) => {
    // Common header logic
    const renderHeader = () => (introText || title) && (
        <div className={styles.sectionInner}>
            {introText && (
                <div className={styles.sectionIntro}>
                    <span className={styles.sectionIntroDivider}></span>
                    <h2 className={styles.sectionIntroText}>{introText}</h2>
                </div>
            )}
            {title && <h3 className={styles.sectionTitle}>{title}</h3>}
        </div>
    );

    return (
        <section id={id} className={`${styles.section} ${bgClass} ${className}`}>
            {noContainer ? (
                <>
                    <Container>
                        {renderHeader()}
                    </Container>
                    <div className={styles.sectionContent}>
                        {children}
                    </div>
                </>
            ) : (
                <Container>
                    {renderHeader()}
                    <div className={styles.sectionContent}>
                        {children}
                    </div>
                </Container>
            )}
        </section>
    );
};

Section.propTypes = {
    id: PropTypes.string,
    title: PropTypes.node,
    introText: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    bgClass: PropTypes.string,
    noContainer: PropTypes.bool,
};

export default Section;
