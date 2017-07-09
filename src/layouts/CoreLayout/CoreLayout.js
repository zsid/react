import React from 'react';
import PropTypes from 'prop-types';

const CoreLayout = ({ children }) => (
  <div>
    { children }
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CoreLayout;
