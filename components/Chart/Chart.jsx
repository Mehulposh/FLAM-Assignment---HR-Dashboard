'use client'
import React from 'react'
import { Bar } from 'react-chartjs-2'

const Chart = () => {

    const data = {
        labels: [ 'Engineering', 'Legal','Accounting','Training', 'Finance','R&D','Product Management','Human Resources','Marketing' , 'Support'],
        datasets: [
            {
                label: 'Avg Ratings',
                data: [3.5, 4.2, 3.8 , 3.5, 4.3, 4,1, 3.9, 3, 4, 4.9 ],
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
            },
        ],
    }


  return <Bar data={data}/>
}

export default Chart 