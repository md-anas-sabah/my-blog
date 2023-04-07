import React from 'react'
import Blogs from './Blogs'
import { Link } from 'react-router-dom'
import promise from '../assets/promise.jpg'

const BlogList = () => {


  return (
    <div className='px-10 py-5'>
        <div>
           <hr className="border-[#F7AB0A] mb-10" />
        </div>
         
         <div className='flex flex-col items-center md:flex-col md:items-center' >
            <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between' >
             <Link to="/promisepage">
                <Blogs title="Callback Hell & Promises" image={promise} createdAt="03 April 2023" category_1="JavaScript" category_2="Async"/> 
            </Link>
             <Link to="/next-auth">
                <Blogs title="NextJS: Next-Auth" image="https://res.cloudinary.com/practicaldev/image/fetch/s--n8wCV2Oa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ul5mxl9hasuvd9jnh51f.jpg" createdAt="14 Oct 2022" category_1="NextJS" category_2="Dev.to"/> 
            </Link>
            <Link to="/react-redux">
                <Blogs title="React + Redux" image="https://res.cloudinary.com/practicaldev/image/fetch/s--tcZq71xv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ulbh4rjjxhxz4ynowygh.jpg" createdAt="19 July 2022" category_1="React" category_2="Redux"/> 
            </Link>
            </div>
            <div className='px-5 py-3 text-[10px] md:text-base bg-gray-900 flex items-center justify-center  rounded-full text-[#F7AB0A] h-12 w-40'>
            <Link to="/more-blogs" className='text-lg'>See More</Link>
            </div>
         </div> 
    </div>
  )
}

export default BlogList