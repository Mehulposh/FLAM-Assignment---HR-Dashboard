'use client'
import React from 'react'
import useSearch from '@/customHooks/useSearch'

const SearchBar = () => {
    const {query,setQuery} = useSearch();
  return (
    <div >
        <input 
            type='text'
            placeholder='Search by name, email, or department'
            value={query}
            onChange={e => setQuery(e.target.value)}
            className='bg-gray-700 p-2 rounded m-3 w-[350px] font-semibold text-gray-200 text-lg'
        />
    </div>
  )
}

export default SearchBar