import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return(
    <div>
      <div className='mainNavBar'>
          <h1>Logo</h1>
          <div className='linkContainer'>
            <p>Portfolio</p>
            <p>Info</p>
            <p>Blog</p>
            <p>Shop</p>
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

