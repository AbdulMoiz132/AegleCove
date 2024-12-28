import React from 'react';
import Bmi from '../components/Bmi';
import styles from '../styles/bmi.module.css';
import Logo from '../components/Logo';

const BmiPage = () => {
    return (
        <div className={styles.container}>
            <Logo />
            <div className={styles.bmiPage}>
                <Bmi />
            </div>
        </div>
    );
};

export default BmiPage;
