'use client'
import Badge from '@/components/Badge/Badge'
import Rating from '@/components/Rating/Rating'
import { getEmployeesByID } from '@/lib/api'
import React, { useEffect, useState ,use} from 'react'

const page =  ({params}) => {
    const [employee,setEmployee] = useState(null)

    const resolvedParams = use(params)
    
    useEffect(() => {
        const fetchEmployee = async () => {
            try {
            const id = resolvedParams.id;
            console.log(id);
            const employee = await getEmployeesByID(id);
            console.log(employee);
            setEmployee(employee);
        } catch (error) {
            console.log(error);
        }
        }

        if(resolvedParams?.id){
            fetchEmployee();
        }
    },[resolvedParams.id])

    if(!employee) {
        return <p>Employee Not Found</p>
    }
  return (
    <div className='flex justify-center'>
    <div className='w-[50%] border boder-gray-400 p-5 flex flex-col gap-5 bg-gray-500 text-gray-200 font-semibold rounded-md mt-6   '>
        <h1 >{employee.name}</h1>
        <p>Age: {employee.age}</p>
        <p>Email: {employee.email}</p>
        <p>Department: {employee.department}</p>
        <p>Rating: <Rating rating={employee.rating}/> </p>
        <p>Address: {employee.address}</p>
        <div className='flex gap-5 items-center'>
            {employee.badges.map((badge,idx) => (
                <Badge text={badge} key={idx}/>
            ))}
        </div>
        <p className='text-justify'>{employee.bio}</p>
    </div>
    </div>
  )
}

export default page