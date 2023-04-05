import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

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
        <div className='px-5 py-3 text-[10px] md:text-base md:w-96 justify-center bg-gray-900 flex items-center rounded-full text-center text-[#F7AB0A] mt-3 '>
          <Link to="https://dev.to/mdanassabah/nextjs-next-auth-5856">
             <p>Check this out on Dev.to</p>
          </Link>
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
            <p className='mt-1 italic'>Note: npx stands for Node Package Execute and it comes with the npm to execute CLI command.</p>
            <p className='mt-1'>This CLI tool enables you to quickly start building a new Next.js application, with everything set up for you. You can create a new app using the default Next.js template.</p>
            <img className='mt-3 h- md:ml-52 md:h-96' src="https://res.cloudinary.com/practicaldev/image/fetch/s--NYHXkGhR--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xvgekvmp2bgc9q5ikkcl.png" alt="logo" />
            <p className='mt-1'>These folders/files will be created after running CLI.</p>
            <p className='mt-2'>To add NextAuth.js to a project create a file called [...nextauth].js in pages/api/auth. This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations.</p>
            <p className="text-[10px] md:text-sm bg-black text-white px-2 w-52 md:w-72 rounded-md mt-3">In [...nextauth].js file add the following code</p>
            <img className='mt-3 md:h-[27rem] md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--bT4xl6G0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ooedsocifagx737ruics.png" alt="pic" />

            <p className='mt-1 italic'>Store your google api and client_secret in .env.local file</p>
            <p className='mt-2' >To use authentication in your application first wrap your application with Session Provider.</p>
            <img className='mt-2 md:h-[27rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--XFSBSU9o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2kpmtf1mmwdhqjqi14p4.png" alt="a" />
            <p className='mt-2'>To be able to use useSession first you'll need to expose the session context,</p>
            <p>using <b>SessionProvider</b> at the top level of your application</p>

            <p className='mt-2 '>Now, to implement Sign-In and Sign-Out method, we have to import these to methods from next-auth/react and create a function on div or button where ever you want.</p>
            <img className='mt-2 md:w-[44rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--XAqdQ0Hq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r4m89stzpparsker4utz.png" alt="last" />
            <p className='mt-4'>That's It!!</p>
       </div>
    </div>
  )
}

export default NextAuth