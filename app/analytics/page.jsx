import Chart from '@/components/Chart/Chart'
import React from 'react'

const analytics = () => {
  return (
    <div className='w-[90%] text-center  px-8'>
        <h1 className='text-center text-gray-600 font-semibold text-2xl mt-2 '>Analytics of each Department </h1>
        <Chart />
    </div>
  )
}

export default analytics