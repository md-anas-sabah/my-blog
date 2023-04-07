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

            <h2 className='mt-3 font-bold '>React Redux Setup</h2>
            <p className='mt-2'>Create react application using:</p>
            <p className='text-sm bg-black text-white px-2 w-56 rounded-md mt-1'>npx create-react-app app-name</p>
            <p className='mt-2'>Next we install the two require packages i.e, redux and react-redux.</p>
            <p className='text-sm bg-black text-white px-2 w-56 rounded-md mt-1'>npm intsall redux react-redux</p>
            <p className='mt-2'>Now we will create component folder in src folder, inside component we will create CakeContainer.js file.</p>
            <img className='mt-2 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--umxFSxZW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zjd97287ea3u8ftjq449.png" alt="a" />
            <p className='mt-2'>In App.js we include CakeContainer Component.</p>
            <img className='mt-2 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--dcQmYxFI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/02obfl1tbk5ljroi3myg.png" alt="b" />
            <p className='mt-1'>After including CakeContainer component in App.js, let's define Actions and Action Creators.</p>
            <p className='mt-2'>Here, we will create cakeAction.js file and inside this file we will create a function called buyCake that returns an Action.</p>
            <img className='mt-2 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--F07IcxuQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hpul72fpe26qh6dsixpj.png" alt="c" />
            <p className='italic font-semibold'>Action is a object with a type property and Action creator is a function(here: buyCake) that returns a object.</p>
            <p className='mt-2'>Next we are going to implement Reducer.</p>
            <p className='mt-2'>We know that a reducer is a function that accepts state and action as parameters and returns the new state.</p>
            <img className='mt-2 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--OSkEr15G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lp271k3b51ypfd37x214.png" alt="d" />
            <p className='mt-1'>Create Redux Store(state) and provide it our React application.</p>
            <p className='mt-2'>Lets create store.js file and within this file we create our store for which we use createStore method from redux.</p>
            <img className='mt-2 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--XevFvX5g--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7wvf65aftwr53cmucxx5.png" alt="d" />
            <p className='mt-1'>At last, In app.js import Provider from react-redux and wrap the div tag in the return statement with this provider component and for provider component to know our redux store we specify it as a prop.</p>
            <img className='mt-2 md:w-[40rem]' src="https://res.cloudinary.com/practicaldev/image/fetch/s--46sR5Bz6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iqgtspejy9yyt3chwr5p.png" alt="e" />
            <p className='mt-3'>That's all, I hope you found this article helpful.🙂</p>

       </div>
    </div>
  )
}

export default ReactRedux