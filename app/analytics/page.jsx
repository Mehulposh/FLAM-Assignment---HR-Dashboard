'use client'
import Chart from '@/components/Chart/Chart'
import useEmployeeStore from '@/store/EmployeeStore'
import React from 'react'

const analytics = () => {
  const isDarkMode = useEmployeeStore(state => state.isDarkMode);
  return (
    <div className='w-[90%] text-center  px-8'>
        <h1 className={`text-center font-semibold text-2xl mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Analytics of each Department </h1>
        <Chart />
    </div>
  )
}

export default analytics