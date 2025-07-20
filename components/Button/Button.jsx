
import React from 'react'
import useEmployeeStore from '@/store/EmployeeStore'


const Button = ({children,className,...props}) => {
  const isDarkMode = useEmployeeStore(state => state.isDarkMode);
  return (
    <button 
        className={`rounded p-1 m-1 font-semibold cursor-pointer ${isDarkMode ? "text-gray-100 bg-blue-600" :"text-gray-200 bg-blue-400"} ${className || " "}`}
        {...props}
      >
      {children}
    </button>
  )
}

export default Button