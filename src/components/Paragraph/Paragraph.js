import PropTypes from 'prop-types';
import React from 'react';

import styles from './Paragraph.scss';

const Paragraph = ({ title, text }) => (
  <div className={styles['paragraph']}>
    <h1 className={styles['section__title']}>
      {title}
    </h1>
    <div className={styles['section__text']}>
      {text}
    </div>
  </div>
);

Paragraph.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Paragraph;
