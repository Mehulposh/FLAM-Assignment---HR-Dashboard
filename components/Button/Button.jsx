
import React from 'react'

const Button = ({children,...props}) => {
  return (
    <button 
        className='bg-blue-400 rounded p-1 m-1 text-gray-200 font-semibold'
        {...props}
      >
      {children}
    </button>
  )
}

export default Button