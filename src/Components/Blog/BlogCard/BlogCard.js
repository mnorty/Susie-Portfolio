import React from 'react'
import './BlogCard.css'
import {Link} from 'react-router-dom'

const BlogCard = () => {
  return(
    <div className='BlogCardContainer'>
        <div className='blogPic'></div>
        <div className='blogPostTitle'>This is a PlaceHolder Blog Title</div>
        <div className='blogDate'>00/00/0000</div>
        <div className='blogCardText'>Nice little fluffy clouds laying around in the sky being lazy. This is probably the greatest thing to happen in my life - to be able to share this with you. That's what makes life fun. That you can make these decisions. That you can create the world that you want. Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying.

Let's put some happy trees and bushes back in here. That's a son of a gun of a cloud. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. Let's put some highlights on these little trees. The sun wouldn't forget them.
</div>
        <Link>Read More</Link>
    </div>
  )
}

export default BlogCard