import React from 'react'
import './SearchResultsList.css'
import SearchResult from './SearchResult'

export default function SearchResultsList({ results }) {
  
  
  return (
    <div className='results-list'>
       {results.map((result, id) => (
        <SearchResult key={id} result={result} />
       ))}
    </div>
  )
}
