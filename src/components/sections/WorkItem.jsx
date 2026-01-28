import React from 'react';
import PropTypes from 'prop-types';
import Tag from '@components/ui/Tag';
import styles from './WorkItem.module.css';

const WorkItem = ({
    image,
    title,
    company,
    period,
    position,
    description,
    tags,
    bgClass = ''
}) => {
    const isMidImage = image.includes('sm-notifications') || image.includes('animation-knobs');

    return (
        <div className={bgClass}>
            <div className={`${styles.workItem} container-space`}>
                <img
                    className={`${styles.workItemImage} ${isMidImage ? styles.workItemImageMid : ''}`}
                    src={image}
                    alt={title}
                    width="1440"
                    height="810"
                    loading="lazy"
                />
                <div className={styles.workItemSubtitle}>
                    <span className={styles.workItemCompany}>{company}</span>
                    <span>{period}</span>
                </div>
                <div className={styles.workItemPosition}>
                    {position}
                </div>
                <h4 className={`h3 ${styles.workItemTitle}`}>
                    {title}
                </h4>
                {description.map((desc, index) => (
                    <p key={index} className={styles.workItemDescription}>
                        {desc}
                    </p>
                ))}

                <div className={styles.workItemTags}>
                    {tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </div>
            </div>
        </div>
    );
};

WorkItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    bgClass: PropTypes.string,
};

export default WorkItem;
