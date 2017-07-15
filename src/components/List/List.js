import React from 'react';
import PropTypes from 'prop-types';

import styles from './List.scss';

const List = ({ listItems }) => (
  <ul className={styles['list']}>
    {listItems.map(item => (
      <li
        className={styles['list__element']}
        key={item}
      >
        {item}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  listItems: PropTypes.array.isRequired,
};

export default List;
