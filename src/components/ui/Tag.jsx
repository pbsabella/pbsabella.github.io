import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.module.css';

const Tag = ({ children }) => {
    return (
        <span className={styles.tag}>
            {children}
        </span>
    );
};

Tag.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Tag;
