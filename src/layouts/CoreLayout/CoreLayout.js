import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';

const CoreLayout = ({ children }) => (
  <div>
    <Header />
    { children }
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CoreLayout;
