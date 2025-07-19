'use client'
import React from 'react'
import useSearch from '@/customHooks/useSearch'

const SearchBar = () => {
    const {query,handleSearch,clearSearch} = useSearch();

    const handleChange = (e) => {
      const value = e.target.value;
      handleSearch(value);

    }


  return (
    <div className='flex' >
        <input 
            type='text'
            placeholder='Search by name, email, or department'
            value={query}
            onChange={handleChange}
            className='bg-gray-700 p-2 flex-1 rounded m-3 w-[350px] font-semibold text-gray-200 text-lg'
        />

        {query && (
          <button 
            onClick={clearSearch}
            className='text-gray-500 px-3 py-1 rounded hover:bg-gray-100'>X</button>
        )}
    </div>
  )
}

export default SearchBar