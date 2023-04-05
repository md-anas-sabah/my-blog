import React from 'react'
import logo from '../assets/Logo.png'

const NextAuth = () => {
  return (
    <div className='px-10 py-5'>
        <div>
          <img className="h-60 md:h-96 object-fill w-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--n8wCV2Oa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ul5mxl9hasuvd9jnh51f.jpg" alt="logo" />
          <div className='mt-1 flex flex-row gap-x-1'>
            <img className='h-8 w-8 rounded-full' src={logo}alt="logo" />
            <div>
              <p className='text-[12px] font-semibold'>Md Anas Sabah</p>
              <p className='text-[8px] text-gray-400'>Posted on 14 Oct 2022</p>
            </div>
          </div>
        </div>
        <div></div>
    </div>
  )
}

export default NextAuth