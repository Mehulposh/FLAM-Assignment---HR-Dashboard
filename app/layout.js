'use client'
import Header from '@/components/Header/Header';
import '../styles/globals.css'  

import useEmployeeStore from '@/store/EmployeeStore';







export default function RootLayout({ children }) {
  const isDarkMode= useEmployeeStore(state => state.isDarkMode)

  
  return (
    <html lang="en">
      <head>
        <title>HR Dashboard</title>
      </head>
      <body
        className={`${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
