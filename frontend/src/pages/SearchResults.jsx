import React from 'react';
import Logo from '../components/Logo';
import styles from '../styles/searchresults.module.css';
import useAegleCoveStore from '../store/AegleCoveStore';

const SearchResults = () => {
  const searchResults = useAegleCoveStore((state) => state.searchResults);

  return (
    <div className={styles.searchResultsPage}>
       <Logo/>
        <div className={styles.searchContent}>
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <div key={index} className={styles.resultCard}>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <h2>Sorry, no results found.</h2>
              <p>Please try searching with different keywords.</p>
            </div>
          )}
        </div>
      </div>
   
  );
};

export default SearchResults;
