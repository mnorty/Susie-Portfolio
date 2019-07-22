import React from 'react'
import './LandingPage.css'
import Carousel from './Carousel/Carousel'

const LandingPage = () => {
  return(
    <div className='landingPage'>
      <Carousel/>
      <div className='latestUpdates'>
        <div className='updateContainer'>
          <div className='updateHeader'>
            <div>Latest Updates</div>
          </div>
          <div className='updateDisplay'></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage