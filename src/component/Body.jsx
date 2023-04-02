import React from 'react'
import BlogList from './BlogList'
import Banner from './Banner'
// import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=''>
        <Banner />
        <BlogList />
    </div>
  )
}

export default Body