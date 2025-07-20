'use client'
import Button  from '../Button/Button'
import Badge from '../Badge/Badge'
import Rating from '../Rating/Rating'
import { useState } from 'react'
import FeedbackForm from '../Feedback/FeedbackForm'
import useEmployeeStore from '@/store/EmployeeStore'

export default function Tabs({ employee }) {
  const isDarkMode = useEmployeeStore(state => state.isDarkMode);
  const [tab, setTab] = useState('overview')

  return (
    <>
      <div className="flex gap-2 mb-2 flex-wrap">
        {['overview', 'projects', 'feedback'].map(t => (
          <Button key={t} onClick={() => setTab(t)} className={`${tab === t ? (isDarkMode ? "bg-yellow-600 " : "bg-blue-600" ) :  null}`}>{t}</Button>
        ))}
      </div>
      <div>
        {tab === 'overview' && (
            <div className='space-y-4'>
                <p>Age: {employee.age}</p>
                <p>Email: {employee.email}</p>
                <p>Department: {employee.department}</p>
                <p>Rating: <Rating rating={employee.rating}/> </p>
                <p>Address: {employee.address}</p>
                <div className='flex flex-wrap gap-5 items-center'>
                    {employee.badges.map((badge,idx) => (
                        <Badge text={badge} key={idx}/>
                    ))}
                </div>
                <p className='text-justify'>{employee.bio}</p>
            </div>
        )}

        {tab === 'projects' && (
            <div>
                <ol className='space-y-4'>
                    {employee.projects.map((pro,idx) => (
                        <li key={idx} >{pro}</li>
                    ))}
                </ol>
            </div>
        )}

        {tab === 'feedback' && (
            <FeedbackForm />
        )}
      </div>
    </>
  )
}