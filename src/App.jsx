import React, { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResultsList from './components/SearchResultsList';
import ResultList from './components/ResultList';

function App() {

  const [results, setResults] = useState([]);
  const [selectedResults, setSelectedResults] = useState([]);



  return (

      <div className='App'>
        <div className='search-bar-container'>
          <SearchBar setResults={setResults} />
          <SearchResultsList results={results} />
          <ResultList selectedResults={selectedResults} />
        </div>
      </div>
  )
}

export default App
