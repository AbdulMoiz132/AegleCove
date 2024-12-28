import React from 'react'
import styles from '../styles/dashsidebar.module.css'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaCircleUser } from 'react-icons/fa6';
import SearchBar from './SearchBar';
import useAegleCoveStore from '../store/AegleCoveStore';
import { Link } from 'react-router-dom';
const DashHeader = ({showMenu ,handleonclick}) => {
  const user = useAegleCoveStore((state) => state.user);
  const header=showMenu
  ? `${styles.header} ${styles.headerExpanded}`
  : `${styles.header} ${styles.headerCollapsed}`
  const username = user.firstname
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
          
          <Link to='/' className={styles.adminlink}><h2>AegleCove</h2></Link>
        </div>
        <SearchBar/>
        <div className={styles.profile}>
          <FaCircleUser className={styles.userIcon}/>
           <Link to = '/profile' className={styles.adminlink}>
            {username}</Link>
        </div>

        
      </div>
  )
}

export default DashHeader
