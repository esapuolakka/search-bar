import React from 'react'
import SearchResult from './SearchResult'
import './ResultList.css'

export default function ResultList({ selectedResults }) {

  return (

    <div className='results-list'>
        {selectedResults.map((result, id) => {
            return <SearchResult key={id} result={result} />
        })}
    </div>
  )
}
