'use client'
import Badge from '@/components/Badge/Badge'
import Rating from '@/components/Rating/Rating'
import Tabs from '@/components/Tabs/Tabs'
import { getEmployeesByID } from '@/lib/api'
import useEmployeeStore from '@/store/EmployeeStore'
import React, { useEffect, useState ,use} from 'react'

const page =  ({params}) => {
    const [employee,setEmployee] = useState(null)
    const isDarkMode = useEmployeeStore(state => state.isDarkMode);

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
        return (
            <div className='text-center py-8 mt-4 '>
                <p className={`${isDarkMode ? "text-white" : "text-black"}`}>Loading Required Data...</p>
                <div className={`animate-spin rounded-full h-12 w-12 mx-auto mb-4 ${isDarkMode ? "border-b-4 border-white " : "border-b-4 border-black "}`}>
        
                </div>
                
            </div>
        )
    }
  return (
    <div className='flex justify-center'>
    <div className={`w-[70%] p-5 space-y-5 font-semibold rounded-md mt-6 ${isDarkMode ? " bg-gray-300 text-gray-500" : " bg-gray-500 text-gray-200"} `}>
        <h1 className={`text-2xl ${isDarkMode ? " border-b border-gray-400" : " border-b border-gray-100"}`}>{employee.name}</h1>
        <Tabs employee={employee}/>
    </div>
    </div>
  )
}

export default page


