import React from 'react';
import styles from './FeaturedWork.scss';

import a from './images/dora1s.jpg';
import b from './images/yokaiculture.jpg';
import c from './images/nioh.jpg';
import d from './images/strider.jpg';

const itemsArray = [
  { img: a, title: 'Doraemon', description: 'some text' },
  { img: b, title: 'Yokai Culture', description: 'some text' },
  { img: c, title: 'Nioh', description: 'some text' },
  { img: d, title: 'strider', description: 'some text' },
];

const createItem = item => (
  <div key={`${item.title}-${item.description}`} className={styles['item']}>
    <a href="google.com" target="__blank" className={styles['item__wrapper']}>
      <div><img src={item.img} alt="doras" /></div>
      <div className={styles['item__content']}>
        <div className={styles['item__content__title']}>{item.title}</div>
        <div className={styles['item__content__description']}>{item.description}</div>
      </div>
    </a>
  </div>
);

const FeaturedWork = () => {
  const test = 'test';
  console.log(test, 'test');
  return (
    <div className={styles['featured-work']}>
      <h1 className={styles['section__title']}>
        Featured Work
      </h1>

      <div className={styles['items__container']}>
        {
          itemsArray.map(item => createItem(item))
        }
      </div>
    </div>
  );
};

export default FeaturedWork;
