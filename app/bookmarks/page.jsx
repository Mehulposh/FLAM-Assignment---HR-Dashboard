'use client'
import EmployeeCard from '@/components/EmployeeCard/EmployeeCard';
import useBookmarks from '@/customHooks/useBookmarks'
import React from 'react'

const page = () => {
    const {bookmarks}  = useBookmarks();
  return (
    <div className='mt-3'>
        <h1 className='text-center font-semibold text-3xl mb-4'>Bookmarked Employees</h1>
        
        {bookmarks.length > 0 ? (
          <div className='flex flex-wrap gap-4 p-3'>
            {bookmarks.map(emp => (
            <EmployeeCard key={emp.id} employee={emp}/>
            ))}
        </div>
        ) : (
          <h1 className='text-xl font-bold'>No Bookmarked Employees</h1>
        )}
        
    </div>
  )
}

export default page 