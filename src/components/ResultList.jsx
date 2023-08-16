import React from 'react'
import SearchResult from './SearchResult'
import './ResultList.css'

export default function ResultList({ selectedResults, onItemClick }) {
  return (
    <div className='result-list'>
      {selectedResults.map((result, id) => (
        <div key={id} className='result-item' onClick={() => onItemClick(result)}>
          {result.name}
        </div>
      ))}
    </div>
  );
}
