import React from 'react'
import './Blog.css'
import BlogCard from './BlogCard/BlogCard'

const Blog = () => {
  return(
    <div>
      <div className='blogContainer'>
          <div className='blogTitle'>
            <p>Blog</p>
          </div>
          {/* <div className='blogIntroPic'></div> */}
      </div>
      <div className='blogEntryArea'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  )
}

export default Blog