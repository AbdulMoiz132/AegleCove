import React from 'react'
import styles from '../styles/dashsidebar.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaCircleUser } from 'react-icons/fa6';
import SearchBar from './SearchBar';

const DashHeader = ({showMenu ,handleonclick}) => {
  const header=showMenu
  ? `${styles.header} ${styles.headerExpanded}`
  : `${styles.header} ${styles.headerCollapsed}`
  const username = 'admin'
  return (
    <div className={header}>
         {!showMenu ? (
        <button className={styles.menu_Icon} onClick={handleonclick}>
          <AiOutlineMenuUnfold />
        </button>
      ) : (
        <button className={styles.menu_Icon} onClick={handleonclick}>
          <AiOutlineMenuFold />
        </button>
      )}
        <div className={styles.logo}>
          <img src='images/logo2.png' className={styles.logoImg}></img>
          <h2>AegleCove</h2>
        </div>
        <SearchBar/>
        <div className={styles.profile}>
          <FaCircleUser className={styles.userIcon}/>
          <h3>{username}</h3>
        </div>
        
      </div>
  )
}

export default DashHeader
