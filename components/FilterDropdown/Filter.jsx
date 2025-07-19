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
    <div className='flex items-start gap-5'>
        <div className='font-semibold border-2 rounded border-blue-300 px-2'>
            <p className='text-center mb-3'>DEPARTMENT</p>
            <div className='flex flex-col flex-wrap h-20  gap-2'>
                
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
        <div className='font-semibold border-2 rounded border-blue-300 px-2'>
            <p>RATINGS</p>
            <div className='flex flex-col h-10 flex-wrap gap-2 '>
                
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