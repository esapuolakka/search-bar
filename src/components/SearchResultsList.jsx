import React from 'react';
import './SearchResultsList.css';
import SearchResult from './SearchResult';

export default function SearchResultsList({ results, setSelectedResults }) {
  const handleResultClick = (result) => {
    setSelectedResults(prevSelected => {
      if (prevSelected.includes(result)) {
        return prevSelected.filter(item => item !== result);
      } else {
        return [...prevSelected, result];
      }
    });
  };

  return (
    <div className='results-list'>
      {results.map((result, id) => (
        <SearchResult
          key={id}
          result={result}
          handleClick={handleResultClick}
        />
      ))}
    </div>
  );
}
