import React from 'react'
import imageOne from '../../../assets/SusiePic1.jpg'
import imageTwo from '../../../assets/SusiePic2.jpg'
import imageThree from '../../../assets/SusiePic3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'

const ImageCarousel = () => {
  return(
    <div>
      <Carousel autoPlay={true} showThumbs={false} height={100} showStatus={false} infiniteLoop={true} stopOnHover={false}>
          <div className='carouselCard'>
            <img src={imageOne} />
          </div>
          <div className='carouselCard'>
            <img src={imageThree} />
          </div>
          <div className='carouselCard'>
            <img src={imageOne} />
          </div>
          <div className='carouselCard'>
            <img src={imageThree} />
          </div>

      </Carousel>
    </div>
  )
}

export default ImageCarousel