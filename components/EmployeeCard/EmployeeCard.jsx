'use client'
import React from 'react'
import Rating from '../Rating/Rating'
import Badge from '../Badge/Badge'
import useBookmarks from '@/customHooks/useBookmarks'
import Link from 'next/link'

const EmployeeCard = ({employee}) => {
  return (
    <div>
        <h2>{employee.name}</h2>
        <p>{employee.email}</p>
        <p>Age: {employee.age}</p>
        <Badge text={employee.department} />
        <Rating rating={employee.rating} />
        <div>
            <Link>View</Link>
            <button>Bookmark</button>
            <button>Promote</button>
        </div>

    </div>
  )
}

export default EmployeeCard