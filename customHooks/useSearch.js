'use client'

import useEmployeeStore from '@/store/EmployeeStore';
import React,{useState} from 'react'

const useSearch = () => {
 const [query, setQuery] = useState('');
 const {searchEmployees, resetFilters} = useEmployeeStore();

 const handleSearch = (term) => {
    setQuery(term);
    searchEmployees(term)
 }

 const clearSearch = () => {
    setQuery('');
    searchEmployees('');

 }
 return {query,setQuery,handleSearch,clearSearch};
}

export default useSearch