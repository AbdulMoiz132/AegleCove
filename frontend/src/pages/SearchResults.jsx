import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import styles from '../styles/searchresults.module.css';
import { useSearchParams } from 'react-router-dom';
import GlobalSearchBar from '../components/GlobalSearchBar';

const SearchResults = () => {
  const [searchParams] = useSearchParams(); // Destructure useSearchParams
  const query = searchParams.get('query');
  const [data, setData] = useState(null); // State for search results
  const [error, setError] = useState(false); // State for error handling

  const searchResult = async () => {
    try {
      const response = await fetch(`http://localhost:8080/search?query=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch results');
      }
      const resultData = await response.json();
      setData(resultData);
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  useEffect(() => {
    if (query) {
      searchResult();
    }
  }, [query]);

  return (
    <div className={styles.searchResultsPage}>
      <Logo />
      {error ? (
        <div className={styles.noSearchResultsContainer}>
          <GlobalSearchBar/>
          <h2 className={styles.noSearchResultsTitle}>No search results found</h2>
          
        </div>
      ) : data ? (
        <div className={styles.searchResultsContainer}>
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className={styles.resultItem}>
              <h3>{key}</h3>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchResults;
