import React from 'react';
import styles from '../styles/header.module.css';
import styles2 from '../styles/footer.module.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
    const HeaderLinks = [
        { title: 'Diseases and Conditions', link: '/' },
        { title: 'Medicines', link: '/medicines' },
        { title: 'Live Well', link: '#' },
        { title: 'Pregnancy', link: '#' },
        { title: 'Care & Support', link: '#' },
        { title: 'AegleCove Services', link: '#' },
        { title: 'My Account', link: 'login' }
    ];

    return (
        <header className={styles.header}>
            <div className={styles.upperheader}>
                <Link to="/" className={styles.link}>
                    <img src="/images/logo2.png" className={styles.logoimg} alt="Logo" />
                    AEGLECOVE
                </Link>
                <SearchBar />
            </div>
            <nav className={styles.lowerheader}>
                <ul className={styles.ul}>
                    {HeaderLinks.map(({ title, link }, index) => (
                        <li className={styles2.li} key={index}>
                            <Link to={link} className={styles.list}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
