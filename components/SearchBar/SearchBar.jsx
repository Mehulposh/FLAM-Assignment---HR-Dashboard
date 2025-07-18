import React from 'react'
import useSearch from '@/customHooks/useSearch'

const SearchBar = () => {
    const {query,setQuery} = useSearch();
  return (
    <div>
        <input 
            type='text'
            placeholder='Search by name, email, or department'
            value={query}
            onChange={e => setQuery(e.target.value)}
        />
    </div>
  )
}

export default SearchBar