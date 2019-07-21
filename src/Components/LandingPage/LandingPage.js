import React from 'react'
import './LandingPage.css'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../assets/SusiePic1.jpg'
import imageTwo from '../../assets/SusiePic2.jpg'
import imageThree from '../../assets/SusiePic3.jpg'

const LandingPage = () => {
  return(
    <div className='landingPage'>
      <div className = 'testCube'>
        <div>This will be a Carosel</div>
              {/* <Carousel>
      <img src={imageOne} />
      <img src={imageTwo} />
      <img src={imageThree} />
    </Carousel> */}
      </div>
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