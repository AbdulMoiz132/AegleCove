import React from 'react'
import styles from '../styles/search.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
const SearchBar = ({handlechange,handleclick}) => {
  return (
    <div className={styles.searchbar}>
          <input
            className={styles.searchbox}
            type='text'
            placeholder='Search Here'
            onChange={handlechange}
            aria-label="Search"
          />
          <button className={styles.searchBtn} type='submit' onClick={handleclick}><FaMagnifyingGlass className={styles.magnifyglass}/></button>
         
        </div>
  )
}

export default SearchBar
