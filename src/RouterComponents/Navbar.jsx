import React from 'react'
import { Link, NavLink, Outlet } from 'react-router' // Make sure you're using 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='flex justify-between bg-gray-300 px-10 py-4'>
        <div className='flex items-center'>
          <Link to="/"><h1 className="text-xl font-bold">Logo</h1></Link>
        </div>

        <div className='w-[400px] pt-[15px]'>
          <ul className='flex justify-around space-x-4'>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/in/user/about"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/in/user/login"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'
                }
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/college"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'
                }
              >
                College
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'
                }
              >
                Users
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/users/list"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'
                }
              >
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Navbar
