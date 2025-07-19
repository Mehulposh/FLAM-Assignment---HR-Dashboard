import React from 'react'

const Rating = ({rating}) => {
  return (
    <>
        {Array.from({length: 5}).map((_,idx) => (
            <span key={idx} className={idx < rating ? 'text-yellow-500' : 'text-gray-500'}>
                *
            </span>
        ))}
    </>
  )
}

export default Rating