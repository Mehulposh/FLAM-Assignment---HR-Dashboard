import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='bg-black text-white flex items-center  gap-10 p-4 font-semibold text-lg'>
        <Link href='/' className='text-2xl'>HR Dashboard</Link>
        <Link href='/bookmarks'>Bookmarks</Link>
        <Link href='/analytics'>Analytics</Link>
    </nav>
  )
}

export default Header