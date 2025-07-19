
import React from 'react'

const Button = ({children,className,...props}) => {
  return (
    <button 
        className={`bg-blue-400 rounded p-1 m-1 text-gray-200 font-semibold cursor-pointer ${className || " "}`}
        {...props}
      >
      {children}
    </button>
  )
}

export default Button