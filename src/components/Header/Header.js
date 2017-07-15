import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.scss';
import logo from './images/logo.png';

const Header = () => (
  <header className={styles['header']}>
    <div className={styles['header__logo']}>
      <img src={logo} alt="Logo" />
    </div>
    <ul className={styles['header__navigation']}>
      <li>
        <Link className={styles['header__navigation__link']} to="/">Home</Link>
      </li>
      <li>
        <Link className={styles['header__navigation__link']}to="/games">Games</Link>
      </li>
      <li>
        <Link className={styles['header__navigation__link']} to="/books">Books</Link>
      </li>
      <li>
        <Link className={styles['header__navigation__link']} to="/about">About</Link>
      </li>
      <li>
        <Link className={styles['header__navigation__link']} to="/tv-film">TV/Film</Link>
      </li>
      <li><a className={styles['header__navigation__link']}>Japanese</a></li>
    </ul>
  </header>
);

export default Header;
