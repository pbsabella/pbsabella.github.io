import React from 'react';
import PropTypes from 'prop-types';

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
    return (
        <div className={bgClass}>
            <div className="work-item container-space">
                <img
                    className="work-item__image"
                    src={image}
                    alt={title}
                    width="1440"
                    height="810"
                    loading="lazy"
                />
                <div className="work-item__subtitle">
                    <span className="work-item__company">{company}</span>
                    <span>{period}</span>
                </div>
                <div className="work-item__position">
                    {position}
                </div>
                <h4 className="h3 work-item__title">
                    {title}
                </h4>
                {description.map((desc, index) => (
                    <p key={index} className="work-item__description">
                        {desc}
                    </p>
                ))}

                <div className="work-item__tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
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
