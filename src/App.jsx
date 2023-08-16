import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResultsList from './components/SearchResultsList';
import ResultList from './components/ResultList';

function App() {
  const [results, setResults] = useState([]);
  const [selectedResults, setSelectedResults] = useState([]);

  const handleItemClick = (itemToRemove) => {
    setSelectedResults(prevSelected => prevSelected.filter(item => item !== itemToRemove));
  };

  return (
    <div className='App'>
      <h1>Search me</h1>
      <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} setSelectedResults={setSelectedResults} />
      </div>
      <div className='result-list-container'>
        <ResultList selectedResults={selectedResults} onItemClick={handleItemClick} />
      </div>
    </div>
  );
}

export default App;
