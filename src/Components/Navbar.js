import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
      <h3 className='font'>Guru 🌟</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
