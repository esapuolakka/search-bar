import React from 'react'
import './SearchResult.css'

export default function SearchResult({ result }) {

  return (
    <div className='search-result' onClick={(e) => alert(result.name)}>{result.name}</div>
  )
}
