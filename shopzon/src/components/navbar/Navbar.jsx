import React from 'react'
import NavbarLeft from './navbaritem/NavbarLeft.jsx'
import NavbarRight from './navbaritem/NavbarRight.jsx'


const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-5'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
