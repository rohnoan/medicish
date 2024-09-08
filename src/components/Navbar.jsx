import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    <div  className='header mb-[20px]'>
      <div className='button-container '>
        <Link to="/home" >
          <button
          className='nav-but'
          >HOME</button>
        </Link>

        <Link to="/my-meds">
          <button
          className='nav-but'
          >MY MEDS</button>
        </Link>

        <Link to="/reminders" >
          <button
          className='nav-but'
          >REMINDERS</button>
        </Link>

        <Link to="/pharmacies" >
         <button
          className='nav-but'
          >PHARMACIES</button>
        </Link>

        <Link to="/profile">
          <button
          className='nav-but'
          >PROFILE</button>
        </Link>

        <Link to="/logout" >
          <button
          className='nav-but'
          >LOGIN</button>
        </Link>

      </div>
    </div>

  )
}
