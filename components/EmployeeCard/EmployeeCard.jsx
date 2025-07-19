'use client'
import React, { useState } from 'react'
import Rating from '../Rating/Rating'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import useBookmarks from '@/customHooks/useBookmarks'
import Link from 'next/link'

const EmployeeCard = ({employee}) => {
    const {toggleBookmark} = useBookmarks();
    const [text,setText] = useState('Promote');

    const handleText = ()=> {
      if(text === 'Promote'){
        setText('Assign to Project')
      }
      else{
        setText('Promote')
      }
    };

    
  return (
    <div className='bg-gray-300 w-[350px] p-3 rounded'>
        <h2>Name: {employee.name}</h2>
        <p>Email: {employee.email}</p>
        <p>Age: {employee.age}</p>
        <Badge text={employee.department} />
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