'use client'
import React from 'react'
import useSearch from '@/customHooks/useSearch'
import useEmployeeStore from '@/store/EmployeeStore';

const SearchBar = () => {
    const {query,handleSearch,clearSearch} = useSearch();
    const isDarkMode = useEmployeeStore(state => state.isDarkMode)

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
            className= {`p-2 flex-1 rounded m-3 w-[350px] font-semibold text-lg ${isDarkMode ? "text-white bg-gray-400 " : "bg-gray-700 text-gray-200"}`}
        />

        {query && (
          <button 
            onClick={clearSearch}
            className= {` px-3 py-1 rounded hover:bg-gray-100 ${isDarkMode ? "text-gray-300": "text-gray-500"}`}>X</button>
        )}
    </div>
  )
}

export default SearchBar