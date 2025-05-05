import React from 'react'

function Navbar() {
  return (
    <>
    <nav>
        <ul className='flex items-center justify-center  w-[100vw] h-[10vh] bg-blue-950 text-white gap-8  font-bold'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Services</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar;