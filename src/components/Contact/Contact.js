import React from 'react';
import styles from './Contact.scss';

const buttonClick = () => {
  window.location.href = 'mailto:info@altjapan.com';
  return window.location.href;
};

const Contact = () => (
  <div className={styles['contact']}>
    <h1 className={styles['contact__title']}>Curious?</h1>
    <button
      className={styles['contact__button']}
      onClick={buttonClick}
    >
      Let&apos;s talk
    </button>
  </div>
);

export default Contact;
