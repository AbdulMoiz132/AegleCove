import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import styles from '../styles/notfound.module.css';

function Notfound() {
  return (
    <div className={styles.notfoundPage}>
      <Logo />
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>We're sorry, but the page you were looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>Go to Homepage</Link>
    </div>
  );
}

export default Notfound;
