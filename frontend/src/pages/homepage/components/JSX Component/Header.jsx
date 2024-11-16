import React from 'react';
import './header.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
    const HeaderLinks = [
        { title: 'Health', link: '/' },
        { title: 'Diseases', link: '#' },
        { title: 'Live Well', link: '#' },
        { title: 'Pregnancy', link: '#' },
        { title: 'Care & Support', link: '#' },
        { title: 'AegleCove Services', link: '#' },
        { title: 'My Account', link: 'Login' }
    ];

    return (
        <header className='header'>
            <div className='upperheader'>
                <Link to='/' className='innerlogo'>AEGLECOVE</Link>
                <div className='searchbar'>
                    <input
                        type='text'
                        placeholder='Search Here'
                        className='searchbox'
                        aria-label="Search"
                    />
                    <FaMagnifyingGlass className='magnifyglass' />
                </div>
            </div>
            <nav className='lowerheader'>
                <ul className='ul'>
                    {HeaderLinks.map(({ title, link }, index) => (
                        <li className='li' key={index}>
                            <Link to={link} className='list'>{title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
