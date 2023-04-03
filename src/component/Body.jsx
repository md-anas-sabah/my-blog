import React from 'react'
import BlogList from './BlogList'
import Banner from './Banner'
import ProjectList from './ProjectList'
// import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=''>
        <Banner />
        <BlogList />
        <ProjectList/>
    </div>
  )
}

export default Body