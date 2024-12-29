import React from 'react';
import styles from '../styles/comingsoon.module.css';
import Logo from '../components/Logo';

const ComingSoon = () => {
  return (
    <div className={styles.comingSoonPage}>
        <Logo/>
        <div className={styles.commingsoonContent}>
          <h1>Coming Soon</h1>
          <p>Our Team is working hard to bring you new and exciting features. Stay tuned!</p>
        </div>
      </div>
  
  );
};

export default ComingSoon;
