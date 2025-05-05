import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

function College() {
  return (
    <div className='text-center'>
      <h1 className='text-2xl font-semibold mb-4'>College Page</h1>
      <Link to="/" >Back to home page</Link>

      <div className="flex justify-center space-x-6 mb-6">
        <NavLink to="" className="text-blue-600 hover:underline">Student</NavLink>
        <NavLink to="department" className="text-blue-600 hover:underline">Department</NavLink>
        <NavLink to="details" className="text-blue-600 hover:underline">CollegeDetails</NavLink>
        
      </div>
      <Outlet />

     
    </div>
  )
}


export default College
