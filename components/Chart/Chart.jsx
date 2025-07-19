'use client'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {

    const data = {
        labels: [ 'Engineering', 'Legal','Accounting','Training', 'Finance','R&D','Product Management','Human Resources','Marketing' , 'Support'],
        datasets: [
            {
                label: 'Avg Ratings',
                data: [3.5, 4.2, 3.8 , 3.5, 4.3, 4.1, 3.9, 3, 4, 4.9 ],
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
            },
        ],
        
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Average Ratings by Department',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
                ticks: {
                    stepSize: 0.5,
                }
            },
            x: {
                // Control spacing between bars
                categoryPercentage: 1,  // Default is 0.8 (80% of category width)
                barPercentage: 0.9,       // Default is 0.9 (90% of category width)
            }
        },
        
    }; 

  return <Bar data={data} options={options}/>
}

export default Chart 