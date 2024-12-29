import React from 'react';
import styles from '../styles/popout.module.css';
import Logo from  '../components/Logo.jsx'

const PopOut = ({ title, message }) => {
  return (
    <div className={styles.popout}>
      <div className={styles.popoutcontent}>
        <Logo/>
        <h1 className={styles.h1}>{title}</h1>
        <p className={styles.p}>{message}</p>
      </div>
    </div>
  );
};

export default PopOut;
