import React from 'react';

import Clients from '../../components/Clients/';
import Contact from '../../components/Contact';
import FeaturedWork from '../../components/FeaturedWork/';
import List from '../../components/List/';
import Paragraph from '../../components/Paragraph/';

import styles from './HomePage.scss';

const homePageContent = require('../../config/content').default.homePage;

const HomePage = () => (
  <div>
    <Paragraph {...homePageContent.aboutUs} />
    <FeaturedWork />

    <div>
      <h1 className={styles['section__title']}>{homePageContent.services.title}</h1>
      <List listItems={homePageContent.services.listItems} />
    </div>

    <Contact />
    <Clients />
  </div>
);


export default HomePage;
