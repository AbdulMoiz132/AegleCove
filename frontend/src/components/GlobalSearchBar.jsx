import React, { useState } from 'react';
import styles from '../styles/search.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const GlobalSearchBar = () => {
  const [query, setQuery] = useState(''); 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);  
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  return (
    <div className={styles.searchbar}>
      <input
        className={styles.searchbox}
        type="text"
        placeholder="Search Here"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        aria-label="Search"
      />
      <button 
        className={styles.searchBtn} 
        type="submit" 
        onClick={handleSearch}
      >
        <FaMagnifyingGlass className={styles.magnifyglass} />
      </button>
    </div>
  );
};

export default GlobalSearchBar;
