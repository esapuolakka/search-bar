import React, { useState } from 'react'

import './SearchBar.css'
import { FaSearch } from'react-icons/fa'

export default function SearchBar( {setResults}) {

  const [searchTerm, setSearchTerm] = useState('')

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name 
            && user.name.toLowerCase().includes(value)
          );
        });
        setResults(results)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleChange = (value) => {
    setSearchTerm(value)
    fetchData(value)
  }

  
  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon'/>
        <input type="text" placeholder="Type to search" value={searchTerm} onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}
