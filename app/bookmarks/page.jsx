'use client'
import EmployeeCard from '@/components/EmployeeCard/EmployeeCard';
import useBookmarks from '@/customHooks/useBookmarks'
import React from 'react'

const page = () => {
    const {bookmarks}  = useBookmarks();
  return (
    <div>
        <h1>Bookmarked Employees</h1>
        {bookmarks.map(emp => (
            <EmployeeCard employee={emp}/>
        ))}
    </div>
  )
}

export default page