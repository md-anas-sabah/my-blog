import React from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

const ReactRedux = () => {
  return (
    <div className='px-10 py-5'>
        <div>
          <img className="h-60 md:h-[26rem] object-fill w-full" src="https://res.cloudinary.com/practicaldev/image/fetch/s--tcZq71xv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ulbh4rjjxhxz4ynowygh.jpg" alt="logo" />
          <div className='mt-1 flex flex-row gap-x-1'>
            <img className='h-8 w-8 rounded-full' src={logo}alt="logo" />
            <div>
              <p className='text-[12px] font-semibold'>Md Anas Sabah</p>
              <p className='text-[8px] text-gray-400'>Posted on 16 July 2022</p>
            </div>
          </div>
        </div>
        <div className='px-5 py-3 text-[10px] md:text-base md:w-96 justify-center bg-gray-900 flex items-center rounded-full text-center text-[#F7AB0A] mt-3 '>
          <Link to="https://dev.to/mdanassabah/react-redux-4ldk">
             <p>Check this out on Dev.to</p>
          </Link>
        </div>
        <div className='mt-4'>
            <h1 className='text-2xl md:text-4xl font-bold'>React + Redux</h1>
            <h2 className='mt-2 text-xl font-bold'>What is Redux?</h2>
            <p className='mt-1'>"Redux is a predictable state container for JavaScript apps".</p>
            <p className='mt-2'>To understand what this means, lets break it down into three parts.</p>
            <p className='mt-1'>1.It is for JavaScript App.</p>
            <p className='mt-1'>2.It is a state container.</p>
            <p className='mt-1'>3.It is predictable.</p>
            <p className='mt-3'>Let's take a look at these parts individually.</p>
            <p className='mt-3 text-lg font-semibold'>Redux is for JavaScript Applications.</p>
            <p className='mt-1'>Redux is not tied to react. It can be used with any UI Library or Framework such as React, Angular, Vue or even Vanilla JavaScript.</p>
            <p className='mt-2'>So if you have this mental model where Redux and react are tightly coupled, now its a good time to get rid of it. Instead you should remember that Redux is a library for JavaScript application.</p>
            <p className='mt-3 text-lg font-semibold'>Redux is a state container</p>
            <p className='mt-1'>Redux stores the state of your application.</p>
            <p className='mt-2'>But what exactly do we mean by state of an application? Well consider a react app, we all learned about state of the component for example if we have a login form the state of the component is simply an object that holds user name password and a submitting flag to indicate the submit action happening in the background.</p>
            <p className='mt-2'>Or if we had a list of users to display the state of the component would be an object that contains an array of users.</p>
            <p className='mt-2'>Extending on this knowledge we can say that the state of an application is simply the state represented by all the individual components of that application this includes the data and the UI logic if your application is medium to large in size the state of the application could be something like his user logged in what is their username their profile pic URL a list of online users is a particular model opened is data being currently fetched and so on Redux will basically store and manage this application state. All right that clears tutoring of the definition Redux is a state container for JavaScript apps.</p>
            <p className='mt-3 text-lg font-semibold'>Redux is predictable</p>
            <p className='mt-2'>Predictable in what way? Redux is a state container and in any JavaScript application the state of application can change.</p>
            <p className='mt-1'>For example: In todo list app -- item(pending) - item(completed)
            In Redux, all state transitions are explicit and it is possible to keep track of them. In other words, the changes of your application's state become predictable.</p>
            <h1 className='text-2xl md:text-4xl font-bold'>Why React + Redux</h1>
            <p className='mt-1'>Component in react have their own state. Why do we need another tool to help manage state?</p>
            <p className='mt-2'>React is generally fast, but by default any updates to a component will cause React to re-render all of the components inside that part of the component tree. This does require work, and if the data for a given component hasn't changed, then re-rendering is likely some wasted effort because the requested UI output would be the same.</p>
            <p className='mt-2'>If performance is a concern, the best way to improve performance is to skip unnecessary re-renders, so that components only re-render when their data has actually changed. React Redux implements many performance optimizations internally, so that your own component only re-renders when it actually needs to.</p>
            <p className='mt-2'>In addition, by connecting multiple components in your React component tree, you can ensure that each connected component only extracts the specific pieces of data from the store state that are needed by that component. This means that your own component will need to re-render less often, because most of the time those specific pieces of data haven't changed.</p>

            



       </div>
    </div>
  )
}

export default ReactRedux