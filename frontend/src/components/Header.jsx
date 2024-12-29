import React from 'react';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';
import GlobalSearchBar from './GlobalSearchBar';

const Header = () => {
    const HeaderLinks = [
        { title: 'Diseases', link: '/diseases/a' },
        { title: 'Medicines', link: '/medicines/a' },
        { title: 'Bmi Calculator', link: '/bmicalculator' },
        { title: 'Find Doctor', link: '/finddoctor' },
        { title: 'Find Pharmacy', link: '/findpharmacy' },
        { title: 'About Us', link: '/aboutus' },
        { title: 'My Account', link: 'login' }
    ];

    return (
        <header className={styles.header}>
            <div className={styles.upperheader}>
                <Link to="/" className={styles.link}>
                    <img src="/images/logo2.png" className={styles.logoimg} alt="Logo" />
                </Link>
                <div className={styles.searchbardiv}>
                <GlobalSearchBar />
                </div>
            </div>
            <nav className={styles.lowerheader}>
                <ul className={styles.ul}>
                    {HeaderLinks.map(({ title, link }, index) => (
                      <Link to={link} className={styles.list} key={index}>{title}</Link>
                        
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
