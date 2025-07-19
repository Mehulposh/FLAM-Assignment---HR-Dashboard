'use client'
import React, { useState } from 'react'
import Rating from '../Rating/Rating'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import useBookmarks from '@/customHooks/useBookmarks'
import Link from 'next/link'
import useEmployeeStore from '@/store/EmployeeStore'

const EmployeeCard = ({employee}) => {
    const {toggleBookmark} = useBookmarks();
    const [text,setText] = useState('Promote');

    const isDarkMode = useEmployeeStore(state => state.isDarkMode)

    const handleText = ()=> {
      if(text === 'Promote'){
        setText('Assign to Project')
      }
      else{
        setText('Promote')
      }
    };

    
  return (
    <div className={`w-[350px] p-3 rounded ${isDarkMode ? "bg-gray-100" : "bg-gray-300 "}`}>
        <h2>Name: {employee.name}</h2>
        <p>Email: {employee.email}</p>
        <p>Age: {employee.age}</p>
        <p>Department: <Badge text={employee.department} /></p>
        <Rating rating={employee.rating} />
        <div>
            <Link href={`/employee/${employee.id}`}>
                <Button>View</Button>
            </Link>
            <Button onClick = {() => toggleBookmark(employee)}>Bookmark</Button>
            <Button onClick={handleText}>{text}</Button>
        </div>

    </div>
  )
}

export default EmployeeCard