import React from 'react'
import logo from '../assets/Logo.png'

const NextAuth = () => {
  return (
    <div className='px-10 py-5'>
        <div>
          <img className="h-60 md:h-[26rem] object-fill w-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--n8wCV2Oa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ul5mxl9hasuvd9jnh51f.jpg" alt="logo" />
          <div className='mt-1 flex flex-row gap-x-1'>
            <img className='h-8 w-8 rounded-full' src={logo}alt="logo" />
            <div>
              <p className='text-[12px] font-semibold'>Md Anas Sabah</p>
              <p className='text-[8px] text-gray-400'>Posted on 14 Oct 2022</p>
            </div>
          </div>
        </div>
        <div className='mt-4'>
            <h1 className='text-2xl md:text-4xl font-bold'>NextJs: Next-Auth</h1>
            <p className='mt-1'>In this article, you will see how to authenticate our Next application with Google</p>
            <h2 className='mt-2 text-xl font-bold'>What is Next?</h2>
            <p className='mt-1'>Next is a full stack , open source react framework for production application by the company named Vercel.</p>
            <h2 className='mt-2 text-xl font-bold'>Getting Started with Next-auth.</h2>
            <p className='mt-1'>First setup your Next application</p>
            <p className='text-sm bg-black text-white px-2 w-56 rounded-md mt-1'>npx create-next-app app-name</p>
            <img className='mt-1' src="https://res.cloudinary.com/practicaldev/image/fetch/s--u4JGF2Pi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/478cofs9omvph260dl3d.png" alt="logo" />

       </div>
    </div>
  )
}

export default NextAuth