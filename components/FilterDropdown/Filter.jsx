'use client'
import React , {useEffect, useState}from 'react'

const DEPARTMENTS = ['HR', 'Engineering', 'Sales', 'Finance' , 'Support']
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
    <div className='flex items-center gap-4'>
        <div className='font-semibold'>
            <p>DEPARTMENT</p>
            <div className='flex flex-col gap-2'>
                
                {DEPARTMENTS.map((dept,idx) => (
                    <label key={idx}  >
                        <input 
                            type='checkbox'
                            checked = {selectedDepartment.includes(dept)}
                            onChange={() => handleToggle(dept,setSelectedDepartment,selectedDepartment)}
                        />
                        <span>{dept}</span>
                    </label>
                ))}
            </div>
        </div>
        <div className='font-semibold'>
            <p>RATINGS</p>
            <div className='flex flex-col gap-2'>
                
                {RATINGS.map((rating,idx) => (
                    <label key={idx}  >
                        <input 
                            type='checkbox'
                            checked = {selectedRating.includes(rating)}
                            onChange={() => handleToggle(rating,setSelectedRating,selectedRating)}
                        />
                        <span>{rating}</span>
                    </label>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Filter