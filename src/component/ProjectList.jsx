import React from 'react'
import { Link } from 'react-router-dom'
import Projects from './Projects'
import muroexe from '../assets/muroexe.png'
import vsapp from '../assets/vsapp.png'
import challan from '../assets/challan.jpg'
import foodista from '../assets/foodista.png'

const ProjectList = () => {
  return (
    <div className='px-10 py-5'>
        <div>
            <hr className="border-[#F7AB0A] mb-10" />
        </div>
        
        <div>
            <h1 className='text-center text-3xl uppercase'>My Projects</h1>
        </div>
        <div className='flex flex-col mt-3 items-center md:flex-col md:items-center' >
            <div className='flex flex-col md:flex-row md:flex-wrap md:justify-between' >
             <Link to="www.github.com">
                <Projects title="Muroexe" image={muroexe} createdAt="13 March 2023" category_1="React" category_2="Redux "/> 
            </Link>
            <Link to="www.github.com">
                <Projects title="Video Streaming Application" image={vsapp} createdAt="01 March 2023" category_1="React" category_2="Redux"/> 
            </Link>
            <Link to="www.github.com">
                <Projects title="Challan-X" image={challan}  createdAt="10 Nov 2023" category_1="React" category_2="MongoDB"/> 
            </Link>
            <Link to="www.github.com">
                <Projects title="Foodista" image={foodista}  createdAt="10 January 2023" category_1="React" category_2="Context-Api"/> 
            </Link>
            </div>
            <div className='px-5 py-3 text-[10px] md:text-base bg-gray-900 flex items-center justify-center  rounded-full text-[#F7AB0A] h-12 w-40'>
            <Link to="/" className='text-lg'>See More</Link>
            </div>
         </div> 
    </div>
  )
}

export default ProjectList