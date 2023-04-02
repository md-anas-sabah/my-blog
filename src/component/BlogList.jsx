import React from 'react'
import Blogs from './Blogs'
import { Link } from 'react-router-dom'

const BlogList = () => {
  return (
    <div className='px-10 py-5'>
         <hr className="border-[#F7AB0A] mb-10"  />
         <div>
            <Link to="www.github.com">
                <Blogs title="NextJS: Next-Auth" image="https://res.cloudinary.com/practicaldev/image/fetch/s--n8wCV2Oa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ul5mxl9hasuvd9jnh51f.jpg" createdAt="14 Oct 2022" category_1="NextJS" category_2="Dev.to"/> 
            </Link>
         </div>

    </div>
  )
}

export default BlogList