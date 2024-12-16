import React from 'react'
import styles from '../styles/search.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
          <input
            className={styles.searchbox}
            type='text'
            placeholder='Search Here'
            
            aria-label="Search"
          />
          <button className={styles.searchBtn}><FaMagnifyingGlass className={styles.magnifyglass}/></button>
         
        </div>
  )
}

export default SearchBar
