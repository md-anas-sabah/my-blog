import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'


const LifeCyclePage = () => {


  return (
    <div className='px-10 py-5'>
        <div>
          <img className="h-60 md:h-[26rem] object-fill w-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--RDdxoyBw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g1gg7j4clkbh0i84eka7.png" alt="logo" />
          <div className='mt-1 flex flex-row gap-x-1'>
            <img className='h-8 w-8 rounded-full' src={logo}alt="logo" />
            <div>
              <p className='text-[12px] font-semibold'>Md Anas Sabah</p>
              <p className='text-[8px] text-gray-400'>Posted on 04 April 2023</p>
            </div>
          </div>
        </div>
        <div className='px-5 py-3 text-[10px] md:text-base md:w-96 justify-center bg-gray-900 flex items-center rounded-full text-center text-[#F7AB0A] mt-3 '>
          <Link to="https://dev.to/mdanassabah/life-cycle-of-a-component-56cp">
             <p>Check this out on Dev.to</p>
          </Link>
        </div>
        <div className='mt-4'>
            <h1 className='text-2xl md:text-4xl font-bold'>Life Cycle of a Component</h1>
            <p className='mt-1'>Life cycle of a component can be defined as the series of methods that are invoked in different stages of the component existence.</p>
            <p className='mt-1'>Stages are:</p>
            <p className='mt-3'>1. Initialization</p>
            <p className='mt-3'>2. Mounting</p>
            <p className='mt-3'>3. Mounting</p>
            <p className='mt-3'>4. Unmounting</p>
            



       </div>
    </div>
  )
}

export default LifeCyclePage