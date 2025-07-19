'use client'
import Badge from '@/components/Badge/Badge'
import Rating from '@/components/Rating/Rating'
import Tabs from '@/components/Tabs/Tabs'
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
        return <p className='text-2xl'>Employee Not Found</p>
    }
  return (
    <div className='flex justify-center'>
    <div className='w-[70%] p-5 space-y-5 bg-gray-500 text-gray-200 font-semibold rounded-md mt-6   '>
        <h1 className='text-2xl border-b border-gray-100 '>{employee.name}</h1>
        <Tabs employee={employee}/>
    </div>
    </div>
  )
}

export default page


