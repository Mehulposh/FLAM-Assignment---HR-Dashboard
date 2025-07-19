'use client'
import React , {useEffect, useState}from 'react'

const DEPARTMENTS = [ 'Engineering', 'Legal','Accounting','Training', 'Finance','R&D','Product Management','Human Resources','Marketing' , 'Support']
const RATINGS = [1, 2, 3, 4, 5]


const Filter = ({onChange}) => {
    const [selectedDepartment, setSelectedDepartment] = useState([])
    const [selectedRating, setSelectedRating] = useState([])


    const handleToggle = (value,setState,state) => {
        if(state.includes(value)){
            setState(state.filter(val => val !== value));
        }else{
            setState([...state,value]);
        }
    }

    useEffect( () => {
        onChange({
            departments: selectedDepartment,
            ratings: selectedRating
        })
    },[selectedDepartment,selectedRating])


  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5'>
    <div className='font-semibold border-2 rounded border-blue-300 px-3 py-2'>
        <p className='text-center mb-3 text-sm sm:text-base'>DEPARTMENT</p>
        <div className='flex flex-col gap-2 max-h-32 overflow-y-auto sm:flex-wrap sm:h-20 sm:max-h-none sm:overflow-visible'>
            {DEPARTMENTS.map((dept,idx) => (
                <label key={idx} className='flex items-center gap-2 text-sm cursor-pointer'>
                    <input 
                        type='checkbox'
                        className='w-4 h-4'
                        checked = {selectedDepartment.includes(dept)}
                        onChange={() => handleToggle(dept,setSelectedDepartment,selectedDepartment)}
                    />
                    <span className='select-none'>{dept}</span>
                </label>
            ))}
        </div>
    </div>
    
    <div className='font-semibold border-2 rounded border-blue-300 px-3 py-2'>
        <p className='text-center mb-3 text-sm sm:text-base'>RATINGS</p>
        <div className='flex flex-col gap-2 max-h-24 overflow-y-auto sm:flex-wrap sm:h-10 sm:max-h-none sm:overflow-visible'>
            {RATINGS.map((rating,idx) => (
                <label key={idx} className='flex items-center gap-2 text-sm cursor-pointer'>
                    <input 
                        type='checkbox'
                        className='w-4 h-4'
                        checked = {selectedRating.includes(rating)}
                        onChange={() => handleToggle(rating,setSelectedRating,selectedRating)}
                    />
                    <span className='select-none'>{rating}</span>
                </label>
            ))}
        </div>
    </div>
</div>
  )
}

export default Filter