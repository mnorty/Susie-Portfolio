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
            <div>Latest Updates:</div>
          </div>
          <div className='updateDisplay'>Nice little fluffy clouds laying around in the sky being lazy. This is probably the greatest thing to happen in my life - to be able to share this with you. That's what makes life fun. That you can make these decisions. That you can create the world that you want. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying.

Let's put some happy trees and bushes back in here. That's a son of a gun of a cloud. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. Let's put some highlights on these little trees. The sun wouldn't forget them.</div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage