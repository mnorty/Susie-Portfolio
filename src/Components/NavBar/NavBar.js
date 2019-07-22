import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return(
    <div>
      <div className='mainNavBar'>
          <h1>Logo</h1>
          <div className='linkContainer'>
            <Link to='/' className='linkStyling'>Home</Link>
            <Link to='/portfolio' className='linkStyling'>Portfolio</Link>
            <Link to='/info' className='linkStyling'>Info</Link>
            <Link to='/blog' className='linkStyling'>Blog</Link>
            <Link to='/shop' className='linkStyling'>Shop</Link>
            <Link to='/contact' className='linkStyling'>Contact</Link>
          </div>
          <h1>Social</h1>
      </div>
      <div className='signatureheader'>
        <div className='nameContainer'>Susan Gerberding</div>
      </div>
    </div>
  )
}

export default NavBar

