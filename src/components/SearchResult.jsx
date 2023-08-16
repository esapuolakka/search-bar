import React from 'react';
import './SearchResult.css';

export default function SearchResult({ result, handleClick }) {
  return (
    <div className='search-result' onClick={() => handleClick(result)}>{result.name}</div>
  );
}

