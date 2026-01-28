import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsCard.module.css';

const SkillsCard = ({ title, skills, className = '' }) => {
    return (
        <div className={`${styles.skillsCard} ${className}`}>
            <h4 className={styles.skillsCardTitle}>{title}</h4>
            <ul className={styles.skillsCardList}>
                {skills.map((skill, index) => (
                    <li key={index} className={styles.skillsCardItem}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

SkillsCard.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
};

export default SkillsCard;
