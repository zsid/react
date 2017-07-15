import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer/';

const CoreLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CoreLayout;
