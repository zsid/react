import React from 'react';

import Paragraph from '../../components/Paragraph/';
import FeaturedWork from '../../components/FeaturedWork/';

const homePageContent = require('../../config/content').default.homePage;

const HomePage = () => (
  <div>
    <Paragraph {...homePageContent.aboutUs} />
    <FeaturedWork />
  </div>
);


export default HomePage;
