'use client'
import React from 'react'
import Link from 'next/link'
import useEmployeeStore from '@/store/EmployeeStore'

const Header = () => {
  const isDarkMode = useEmployeeStore(state => state.isDarkMode)
  const toggleMode = useEmployeeStore(state => state.toggleMode)

  return (
    <nav className={`flex items-center justify-between p-4 ${isDarkMode ? "bg-gray-300 text-gray-700" : "bg-black text-white"}`}>
        <div className='font-semibold text-lg space-x-8'>
          <Link href='/' className='text-2xl'>HR Dashboard</Link>
          <Link href='/bookmarks'>Bookmarks</Link>
          <Link href='/analytics'>Analytics</Link>
        </div>

        <div>
          <button onClick={toggleMode}>
            {isDarkMode ? 'DARK' : 'LIGHT'}
          </button>
        </div>
    </nav>
  )
}

export default Header