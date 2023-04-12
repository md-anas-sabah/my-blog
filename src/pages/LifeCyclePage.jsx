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
            <p className=''>1. Initialization</p>
            <p className=''>2. Mounting</p>
            <p className=''>3. Mounting</p>
            <p className=''>4. Unmounting</p>

            <h2 className='mt-2 font-semibold'>Function of each Phase of Cycle</h2>
            <p className='font-semibold mt-1'>1. Initialization</p>
            <p className='mt-1'>In this phase, we have to define the props and initial state of the component. This is done in the constructor of the component.</p>
            <p className='mt-2 font-semibold'>2. Mounting</p>
            <p className='mt-1'>In this phase, Initialization of the component is completed and the component is mounted on the DOM and rendered on the first time on web page.</p>
            <p> • componentWillMount() Function</p>
            <p> • componentDidMount() Function</p>
            <p className='font-semibold mt-1'>3. Mounting</p>
            <p className='mt-1'>It is the phase where the states and the props of a component are updated followed by some user events like click or press keyboard button etc.</p>
            <p>• componentWillRecieveProps() Function</p>
            <p>• setState() Function</p>
            <p>• shouldComponentUpdate() Function</p>
            <p>• componentWillUpdate() Function</p>
            <p>• componentDidUpdate() Function</p>
            <p className='font-semibold mt-1'>4. Unmounting</p>
            <p className='mt-1'>This is the final phase of the life cycle of the component that is the phase of unmounting the component from the DOM.</p>
            <p>• componentWillUnmount() Function</p>
            <p className='mt-3 italic text-gray-500'>Note: React follows a default procedure in the Naming Conventions of these predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase.</p>
            <img className='mt-3 w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--uOL63gFw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u9n91nq7xtj0713uhdsy.png" alt="n" />
            <p></p>

       </div>
    </div>
  )
}

export default LifeCyclePage