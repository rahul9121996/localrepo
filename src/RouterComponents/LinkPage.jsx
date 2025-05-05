import React from 'react'
import { Link } from 'react-router'

function LinkPage() {
  return (
    <div>
       <Link to="/"><h1>Home</h1></Link>
       <Link to="/about"><h1>About</h1></Link>
        <Link to="/login"><h1>Login</h1></Link>
    </div>
  )
}

export default LinkPage