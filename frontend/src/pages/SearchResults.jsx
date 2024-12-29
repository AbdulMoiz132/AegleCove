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

      // Exclude "id" field from results
      const filteredData = Object.entries(resultData).filter(([key]) => key !== 'id');
      setData(filteredData);
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

  const renderData = (data) => {
    if (Array.isArray(data)) {
      return (
        <ul className={styles.resultList}>
          {data.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {typeof item === 'object' ? renderData(item) : item}
            </li>
          ))}
        </ul>
      );
    }

    return Object.entries(data).map(([key, value]) => (
      <div key={key} className={styles.resultItem}>
        <h3 className={styles.resultKey}>{key}</h3>
        {typeof value === 'object' ? renderData(value) : (
          <p className={styles.resultValue}>{value}</p>
        )}
      </div>
    ));
  };

  return (
    <div className={styles.searchResultsPage}>
      <Logo />
      <div className={styles.searchbar}><GlobalSearchBar /></div>
      {error ? (
        <div className={styles.noSearchResultsContainer}>
          <h2 className={styles.noSearchResultsTitle}>
            No search results found for <strong>{query}</strong>.
          </h2>
        </div>
      ) : data ? (
        <div className={styles.searchResultsContainer}>
          <h2 className={styles.searchResultsTitle}>
            Search results for <strong>{query}</strong>:
          </h2>
          {data?.length > 0 ? (
            data.map(([key, value]) => (
              <div key={key} className={styles.resultItem}>
                <h3 className={styles.resultKey}>{key}</h3>
                {typeof value === 'object' ? renderData(value) : (
                  <p className={styles.resultValue}>{value}</p>
                )}
              </div>
            ))
          ) : (
            <p className={styles.noResultsMessage}>
              No relevant data found for your search query.
            </p>
          )}
        </div>
      ) : (
        <p className={styles.loadingMessage}>Loading search results...</p>
      )}
    </div>
  );
};

export default SearchResults;