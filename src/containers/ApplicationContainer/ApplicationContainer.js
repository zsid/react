import React, { Component } from 'react';
import styles from '../../styles/main.scss';

class ApplicationContainer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className={styles['big']}>
        Hello From React It actually works wat haha
        <button className={styles['test']}>HAhaha</button>
      </div>
    );
  }
}

export default ApplicationContainer;
