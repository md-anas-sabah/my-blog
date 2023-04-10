import React from 'react'
import BlogList from './BlogList'

import ProjectList from './ProjectList'
import TechStack from './TechStack'
// import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=''>
  
        <BlogList />
        <ProjectList/>
        <TechStack />
    </div>
  )
}

export default Body