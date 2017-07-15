import React from 'react';
import { Route } from 'react-router-dom';

import AboutPage from '../pages/AboutPage/';
import CoreLayout from '../layouts/CoreLayout/';
import HomePage from '../pages/HomePage/';

export default (
  <CoreLayout>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/about" component={AboutPage} />
  </CoreLayout>
);
